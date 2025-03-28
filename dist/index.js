"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeText = analyzeText;
exports.getWordsByTag = getWordsByTag;
exports.getRandomWordByTag = getRandomWordByTag;
exports.generateRandomSentence = generateRandomSentence;
exports.generateImprovedSentence = generateImprovedSentence;
exports.saveToFile = saveToFile;
exports.loadFromFile = loadFromFile;
const compromise_1 = __importDefault(require("compromise"));
const fs_1 = __importDefault(require("fs"));
// Global data store
let globalData = {
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
function analyzeText(text) {
    const doc = (0, compromise_1.default)(text);
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
function getTaggedWords(doc) {
    const tags = {};
    doc.json().forEach((s) => {
        s.terms.forEach((t) => {
            t.tags.forEach((tag) => {
                if (!tags[tag])
                    tags[tag] = [];
                if (!tags[tag].includes(t.text))
                    tags[tag].push(t.text);
            });
        });
    });
    return tags;
}
function getSentenceStructures(doc) {
    return doc.sentences().map((sentence) => {
        const json = sentence.json({ terms: { tags: true } })[0];
        return {
            text: json.text,
            structure: json.terms.map((t) => t.tags[0]),
            terms: json.terms.map((t) => ({
                text: t.text,
                tags: t.tags,
            })),
        };
    });
}
// Data Access Functions
function getWordsByTag(tag) {
    return globalData.tags[tag] || [];
}
function getRandomWordByTag(tag) {
    const words = getWordsByTag(tag);
    return words[Math.floor(Math.random() * words.length)] || "";
}
// Sentence Generation Functions
function generateRandomSentence() {
    if (globalData.sentences.length === 0)
        return "";
    // Choose a random sentence structure
    const randomStructure = globalData.sentences[Math.floor(Math.random() * globalData.sentences.length)].structure;
    // Build sentence based on structure
    const sentenceParts = randomStructure.map((tag) => {
        let word = getRandomWordByTag(tag);
        if (!word) {
            if (tag.includes("Noun"))
                word = getRandomWordByTag("Noun");
            else if (tag.includes("Verb"))
                word = getRandomWordByTag("Verb");
            else if (tag.includes("Adjective"))
                word = getRandomWordByTag("Adjective");
        }
        return word || getRandomWordFromAny();
    });
    // Format the sentence
    const sentence = sentenceParts.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}
function getRandomWordFromAny() {
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
function generateImprovedSentence() {
    if (globalData.sentences.length === 0)
        return "";
    // Select a random sentence structure
    const template = globalData.sentences[Math.floor(Math.random() * globalData.sentences.length)];
    // Get tense from the template sentence
    const tense = detectTense(template);
    // Build subject
    const subject = buildNounPhrase(getRandomWordByTag("Noun") || getRandomWordByTag("ProperNoun"), detectArticles(template));
    // Get and conjugate verb
    let verb = getRandomWordByTag("Verb");
    verb = conjugateVerb(verb, tense);
    verb = ensureAgreement(subject, verb);
    // Build object
    const object = buildNounPhrase(getRandomWordByTag("Noun"));
    // Add optional adverb
    const useAdverb = Math.random() > 0.5;
    const adverb = useAdverb
        ? functionWords.adverbs[Math.floor(Math.random() * functionWords.adverbs.length)]
        : "";
    // Build prepositional phrase
    const prepPhrase = getProperPreposition(verb) +
        " " +
        buildNounPhrase(getRandomWordByTag("Noun") || getRandomWordByTag("Place"));
    // Assemble sentence
    const components = [subject, verb, adverb, object, prepPhrase].filter(Boolean);
    const sentence = components.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}
// Grammar helper functions
function detectTense(sentence) {
    const tags = sentence.terms.flatMap((t) => t.tags);
    if (tags.includes("PastTense"))
        return "past";
    if (tags.includes("FutureTense"))
        return "future";
    return "present";
}
function conjugateVerb(baseVerb, tense) {
    const compromise = (0, compromise_1.default)(baseVerb);
    switch (tense) {
        case "past":
            return compromise.verbs().toPastTense().out("text");
        case "future":
            return compromise.verbs().toFutureTense().out("text");
        default:
            return compromise.verbs().toPresentTense().out("text");
    }
}
function ensureAgreement(subject, verb) {
    const isPlural = subject.endsWith("s") && !subject.endsWith("ss");
    const verbDoc = (0, compromise_1.default)(verb);
    if (verb === "be")
        return isPlural ? "are" : "is";
    if (!isPlural && detectTenseFromVerb(verb) === "present") {
        return verbDoc.verbs().toPresentTense().out("text");
    }
    return verb;
}
function detectTenseFromVerb(verb) {
    const doc = (0, compromise_1.default)(verb);
    if (doc.verbs().toPastTense() === doc.verbs())
        return "past";
    if (doc.verbs().toFutureTense() === doc.verbs())
        return "future";
    return "present";
}
function buildNounPhrase(noun, article) {
    if (!noun)
        return "";
    const isPlural = noun.endsWith("s") && !noun.endsWith("ss");
    const isProper = globalData.people.includes(noun) ||
        globalData.places.includes(noun) ||
        globalData.organizations.includes(noun);
    const needsArticle = !isProper && !isPlural;
    const actualArticle = article || (needsArticle ? "the" : "");
    return [actualArticle, noun].filter(Boolean).join(" ");
}
function detectArticles(sentence) {
    const firstTerm = sentence.terms[0];
    if (firstTerm.tags.includes("Determiner")) {
        const text = firstTerm.text.toLowerCase();
        if (text === "a" || text === "an")
            return "a";
        if (text === "the")
            return "the";
    }
    return undefined;
}
function getProperPreposition(verb) {
    const collocations = {
        work: "at",
        announce: "on",
        develop: "for",
        depend: "on",
        look: "at",
        talk: "about",
    };
    return (collocations[verb] ||
        functionWords.prepositions[Math.floor(Math.random() * functionWords.prepositions.length)]);
}
// Persistence functions
function saveToFile(filename) {
    fs_1.default.writeFileSync(filename, JSON.stringify(globalData, null, 2));
}
function loadFromFile(filename) {
    const data = JSON.parse(fs_1.default.readFileSync(filename, "utf-8"));
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
