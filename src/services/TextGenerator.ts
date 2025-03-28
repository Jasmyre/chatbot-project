import { LanguageModel } from "../models/LanguageModel";
import { LLMEnhancer } from "../models/LLMEnhancer";

export class TextGenerator {
	private nlpModel: LanguageModel;
	private llm: LLMEnhancer;

	constructor(llmConfig?: {
		model: "GPT-3.5" | "Llama-2" | "Local";
		apiKey?: string;
	}) {
		this.nlpModel = new LanguageModel();
		this.llm = new LLMEnhancer(llmConfig || { model: "Local" });
	}

	public async train(corpus: string[]) {
		corpus.forEach((text) => this.nlpModel.train(text));
		await this.llm.initialize();
	}

	public async generate(prompt?: string): Promise<string> {
		const draft = this.nlpModel.generateSentence();
		if (!prompt) return draft;

		const enhanced = await this.llm.enhanceText(
			`Improve this sentence: ${draft}`
		);
		return enhanced;
	}
}
