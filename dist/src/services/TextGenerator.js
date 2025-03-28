"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextGenerator = void 0;
const LanguageModel_1 = require("../models/LanguageModel");
const LLMEnhancer_1 = require("../models/LLMEnhancer");
class TextGenerator {
    constructor(llmConfig) {
        this.nlpModel = new LanguageModel_1.LanguageModel();
        this.llm = new LLMEnhancer_1.LLMEnhancer(llmConfig || { model: "Local" });
    }
    async train(corpus) {
        corpus.forEach((text) => this.nlpModel.train(text));
        await this.llm.initialize();
    }
    async generate(prompt) {
        const draft = this.nlpModel.generateSentence();
        if (!prompt)
            return draft;
        const enhanced = await this.llm.enhanceText(`Improve this sentence: ${draft}`);
        return enhanced;
    }
}
exports.TextGenerator = TextGenerator;
