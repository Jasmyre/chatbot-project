import nlp from "compromise";
import fs from "fs";

// Types
type TermData = {
	text: string;
	tags: string[];
};

type SentenceStructure = {
	text: string;
	structure: string[];
	terms: TermData[];
};

type GlobalAnalysisData = {
	nouns: string[];
	verbs: string[];
	adjectives: string[];
	people: string[];
	places: string[];
	organizations: string[];
	tags: Record<string, string[]>;
	sentences: SentenceStructure[];
};

// Global data store
let globalData: GlobalAnalysisData = {
	nouns: [],
	verbs: [],
	adjectives: [],
	people: [],
	places: [],
	organizations: [],
	tags: {},
	sentences: [],
};

// Function words
const functionWords = {
	prepositions: ["in", "at", "on", "with", "for", "to", "of", "by"],
	articles: ["a", "an", "the"],
	adverbs: ["quickly", "slowly", "eagerly", "recently"],
};

// Core Functions
export function analyzeText(text: string): void {
	const doc = nlp(text);

	globalData = {
		nouns: doc.nouns().out("array"),
		verbs: doc.verbs().toInfinitive().out("array"),
		adjectives: doc.adjectives().out("array"),
		people: doc.people().out("array"),
		places: doc.places().out("array"),
		organizations: doc.organizations().out("array"),
		tags: getTaggedWords(doc),
		sentences: getSentenceStructures(doc),
	};
}

function getTaggedWords(doc: any): Record<string, string[]> {
	const tags: Record<string, string[]> = {};

	doc.json().forEach((s: any) => {
		s.terms.forEach((t: any) => {
			t.tags.forEach((tag: string) => {
				if (!tags[tag]) tags[tag] = [];
				if (!tags[tag].includes(t.text)) tags[tag].push(t.text);
			});
		});
	});

	return tags;
}

function getSentenceStructures(doc: any): SentenceStructure[] {
	return doc.sentences().map((sentence: any) => {
		const json = sentence.json({ terms: { tags: true } })[0];
		return {
			text: json.text,
			structure: json.terms.map((t: any) => t.tags[0]),
			terms: json.terms.map((t: any) => ({
				text: t.text,
				tags: t.tags,
			})),
		};
	});
}

// Data Access Functions
export function getWordsByTag(tag: string): string[] {
	return globalData.tags[tag] || [];
}

export function getRandomWordByTag(tag: string): string {
	const words = getWordsByTag(tag);
	return words[Math.floor(Math.random() * words.length)] || "";
}

// Sentence Generation Functions
export function generateRandomSentence(): string {
	if (globalData.sentences.length === 0) return "";

	// Choose a random sentence structure
	const randomStructure =
		globalData.sentences[
			Math.floor(Math.random() * globalData.sentences.length)
		].structure;

	// Build sentence based on structure
	const sentenceParts = randomStructure.map((tag) => {
		let word = getRandomWordByTag(tag);

		if (!word) {
			if (tag.includes("Noun")) word = getRandomWordByTag("Noun");
			else if (tag.includes("Verb")) word = getRandomWordByTag("Verb");
			else if (tag.includes("Adjective"))
				word = getRandomWordByTag("Adjective");
		}

		return word || getRandomWordFromAny();
	});

	// Format the sentence
	const sentence = sentenceParts.join(" ");
	return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

function getRandomWordFromAny(): string {
	const allWords = [
		...globalData.nouns,
		...globalData.verbs,
		...globalData.adjectives,
		...globalData.people,
		...globalData.places,
	];
	return allWords[Math.floor(Math.random() * allWords.length)] || "something";
}

// Improved sentence generation with grammar rules
export function generateImprovedSentence(): string {
	if (globalData.sentences.length === 0) return "";

	// Select a random sentence structure
	const template =
		globalData.sentences[
			Math.floor(Math.random() * globalData.sentences.length)
		];

	// Get tense from the template sentence
	const tense = detectTense(template);

	// Build subject
	const subject = buildNounPhrase(
		getRandomWordByTag("Noun") || getRandomWordByTag("ProperNoun"),
		detectArticles(template)
	);

	// Get and conjugate verb
	let verb = getRandomWordByTag("Verb");
	verb = conjugateVerb(verb, tense);
	verb = ensureAgreement(subject, verb);

	// Build object
	const object = buildNounPhrase(getRandomWordByTag("Noun"));

	// Add optional adverb
	const useAdverb = Math.random() > 0.5;
	const adverb = useAdverb
		? functionWords.adverbs[
				Math.floor(Math.random() * functionWords.adverbs.length)
		  ]
		: "";

	// Build prepositional phrase
	const prepPhrase =
		getProperPreposition(verb) +
		" " +
		buildNounPhrase(
			getRandomWordByTag("Noun") || getRandomWordByTag("Place")
		);

	// Assemble sentence
	const components = [subject, verb, adverb, object, prepPhrase].filter(
		Boolean
	);
	const sentence = components.join(" ");
	return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

// Grammar helper functions
function detectTense(
	sentence: SentenceStructure
): "past" | "present" | "future" {
	const tags = sentence.terms.flatMap((t) => t.tags);
	if (tags.includes("PastTense")) return "past";
	if (tags.includes("FutureTense")) return "future";
	return "present";
}

function conjugateVerb(
	baseVerb: string,
	tense: "past" | "present" | "future"
): string {
	const compromise = nlp(baseVerb);
	switch (tense) {
		case "past":
			return compromise.verbs().toPastTense().out("text");
		case "future":
			return compromise.verbs().toFutureTense().out("text");
		default:
			return compromise.verbs().toPresentTense().out("text");
	}
}

function ensureAgreement(subject: string, verb: string): string {
	const isPlural = subject.endsWith("s") && !subject.endsWith("ss");
	const verbDoc = nlp(verb);

	if (verb === "be") return isPlural ? "are" : "is";

	if (!isPlural && detectTenseFromVerb(verb) === "present") {
		return verbDoc.verbs().toPresentTense().out("text");
	}
	return verb;
}

function detectTenseFromVerb(verb: string): string {
	const doc = nlp(verb);
	if (doc.verbs().toPastTense() === doc.verbs()) return "past";
	if (doc.verbs().toFutureTense() === doc.verbs()) return "future";
	return "present";
}

function buildNounPhrase(noun: string, article?: string): string {
	if (!noun) return "";

	const isPlural = noun.endsWith("s") && !noun.endsWith("ss");
	const isProper =
		globalData.people.includes(noun) ||
		globalData.places.includes(noun) ||
		globalData.organizations.includes(noun);
	const needsArticle = !isProper && !isPlural;

	const actualArticle = article || (needsArticle ? "the" : "");
	return [actualArticle, noun].filter(Boolean).join(" ");
}

function detectArticles(sentence: SentenceStructure): string | undefined {
	const firstTerm = sentence.terms[0];
	if (firstTerm.tags.includes("Determiner")) {
		const text = firstTerm.text.toLowerCase();
		if (text === "a" || text === "an") return "a";
		if (text === "the") return "the";
	}
	return undefined;
}

function getProperPreposition(verb: string): string {
	const collocations: Record<string, string> = {
		work: "at",
		announce: "on",
		develop: "for",
		depend: "on",
		look: "at",
		talk: "about",
	};
	return (
		collocations[verb] ||
		functionWords.prepositions[
			Math.floor(Math.random() * functionWords.prepositions.length)
		]
	);
}



// Persistence functions
export function saveToFile(filename: string): void {
	fs.writeFileSync(filename, JSON.stringify(globalData, null, 2));
}

export function loadFromFile(filename: string): void {
	const data = JSON.parse(fs.readFileSync(filename, "utf-8"));
	globalData = data;
}

const paragraphs = [
	`John Doe works at OpenAI in San Francisco. 
He announced on March 15, 2023: "We're developing revolutionary AI technology". 
This innovative project could change the future of computing.`,
	"Yeah, exactly! Skills like painting, sculpting, and architecture improve when you take creative ideas and actually bring them to life. The more you practice turning imagination into something real, the better you get at it. Creativity isn’t just about having ideas—it’s about making them happen! ",
];

paragraphs.forEach((p) => {
	analyzeText(p);
});

console.log("All nouns:", getWordsByTag("Noun"));
console.log("Random verb:", getRandomWordByTag("Verb"));

console.log("\nBasic sentences:");
for (let i = 0; i < 3; i++) {
	console.log(`${i + 1}. ${generateRandomSentence()}`);
}

console.log("\nImproved sentences:");
for (let i = 0; i < 5; i++) {
	console.log(`${i + 1}. ${generateImprovedSentence()}`);
}

saveToFile("global-analysis.json");
loadFromFile("global-analysis.json");
