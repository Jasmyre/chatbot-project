import nlp from "compromise";
import fs from "fs";

interface WordEntry {
	id: string;
	text: string;
	lemma: string;
	tags: string[];
	chunks: string[];
	frequency: number;
}

interface NgramModel {
	unigrams: Record<string, number>;
	bigrams: Record<string, Record<string, number>>;
	trigrams: Record<string, Record<string, number>>;
}

export class LanguageModel {
	private words: Record<string, WordEntry> = {};
	private ngrams: NgramModel = {
		unigrams: {},
		bigrams: {},
		trigrams: {},
	};

	public train(text: string) {
		const doc = nlp(text);
		const sentences = doc.json();

		sentences.forEach((sentence: { terms: any[]; }) => {
			const terms = sentence.terms.map((term: { text: string; lemma: any; tags: any; chunk: any; }) => ({
				text: term.text,
				lemma: term.lemma || term.text.toLowerCase(),
				tags: term.tags,
				chunk: term.chunk,
			}));

			terms.forEach((term: any, i: any) => {
				this.processWord(term);
				if (i > 0) this.processNgram(terms[i - 1].text, term.text);
			});
		});
	}

	private processWord(term: { text: string; lemma: string; tags: string[] }) {
		const id = `${term.lemma}-${term.tags.join("-")}`;
		if (!this.words[id]) {
			this.words[id] = { ...term, id, chunks: [], frequency: 0 };
		}
		this.words[id].frequency++;
		this.ngrams.unigrams[term.text] =
			(this.ngrams.unigrams[term.text] || 0) + 1;
	}

	private processNgram(prevWord: string, currentWord: string) {
		this.ngrams.bigrams[prevWord] = this.ngrams.bigrams[prevWord] || {};
		this.ngrams.bigrams[prevWord][currentWord] =
			(this.ngrams.bigrams[prevWord][currentWord] || 0) + 1;
	}

	public generateSentence(): string {
		let sentence = "";
		let previousWord = "";

		for (let i = 0; i < 10; i++) {
			const nextWord = this.predictNextWord(previousWord);
			if (!nextWord) break;
			sentence += `${nextWord} `;
			previousWord = nextWord;
		}

		return sentence.trim() + ".";
	}

	private predictNextWord(previousWord: string): string | null {
		if (!previousWord) {
			const starters = Object.keys(this.ngrams.unigrams);
			return starters[Math.floor(Math.random() * starters.length)];
		}

		const possibleNext = this.ngrams.bigrams[previousWord];
		if (!possibleNext) return null;

		const choices = Object.keys(possibleNext);
		return choices[Math.floor(Math.random() * choices.length)];
	}
}
