"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModel = void 0;
const compromise_1 = __importDefault(require("compromise"));
class LanguageModel {
    constructor() {
        this.words = {};
        this.ngrams = {
            unigrams: {},
            bigrams: {},
            trigrams: {},
        };
    }
    train(text) {
        const doc = (0, compromise_1.default)(text);
        const sentences = doc.json();
        sentences.forEach((sentence) => {
            const terms = sentence.terms.map((term) => ({
                text: term.text,
                lemma: term.lemma || term.text.toLowerCase(),
                tags: term.tags,
                chunk: term.chunk,
            }));
            terms.forEach((term, i) => {
                this.processWord(term);
                if (i > 0)
                    this.processNgram(terms[i - 1].text, term.text);
            });
        });
    }
    processWord(term) {
        const id = `${term.lemma}-${term.tags.join("-")}`;
        if (!this.words[id]) {
            this.words[id] = { ...term, id, chunks: [], frequency: 0 };
        }
        this.words[id].frequency++;
        this.ngrams.unigrams[term.text] =
            (this.ngrams.unigrams[term.text] || 0) + 1;
    }
    processNgram(prevWord, currentWord) {
        this.ngrams.bigrams[prevWord] = this.ngrams.bigrams[prevWord] || {};
        this.ngrams.bigrams[prevWord][currentWord] =
            (this.ngrams.bigrams[prevWord][currentWord] || 0) + 1;
    }
    generateSentence() {
        let sentence = "";
        let previousWord = "";
        for (let i = 0; i < 10; i++) {
            const nextWord = this.predictNextWord(previousWord);
            if (!nextWord)
                break;
            sentence += `${nextWord} `;
            previousWord = nextWord;
        }
        return sentence.trim() + ".";
    }
    predictNextWord(previousWord) {
        if (!previousWord) {
            const starters = Object.keys(this.ngrams.unigrams);
            return starters[Math.floor(Math.random() * starters.length)];
        }
        const possibleNext = this.ngrams.bigrams[previousWord];
        if (!possibleNext)
            return null;
        const choices = Object.keys(possibleNext);
        return choices[Math.floor(Math.random() * choices.length)];
    }
}
exports.LanguageModel = LanguageModel;
