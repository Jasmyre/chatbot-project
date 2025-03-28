import { AutoModelForCausalLM, AutoTokenizer } from "@xenova/transformers";
import axios from "axios";

type LLMConfig = {
	model: "GPT-3.5" | "Llama-2" | "Local";
	apiKey?: string;
};

export class LLMEnhancer {
	private model: any;
	private tokenizer: any;
	private config: LLMConfig;

	constructor(config: LLMConfig) {
		this.config = config;
	}

	async initialize() {
		if (this.config.model === "Local") {
			this.tokenizer = await AutoTokenizer.from_pretrained(
				"Xenova/llama-2-7b"
			);
			this.model = await AutoModelForCausalLM.from_pretrained(
				"Xenova/llama-2-7b"
			);
		}
	}

	async enhanceText(prompt: string): Promise<string> {
		if (this.config.model === "GPT-3.5") {
			return this.callOpenAI(prompt);
		} else {
			return this.generateLocally(prompt);
		}
	}

	private async callOpenAI(prompt: string): Promise<string> {
		const response = await axios.post(
			"https://api.openai.com/v1/chat/completions",
			{
				model: "gpt-3.5-turbo",
				messages: [{ role: "user", content: prompt }],
			},
			{ headers: { Authorization: `Bearer ${this.config.apiKey}` } }
		);
		return response.data.choices[0].message.content;
	}

	private async generateLocally(prompt: string): Promise<string> {
		const inputs = await this.tokenizer(prompt, { return_tensors: "pt" });
		const outputs = await this.model.generate(inputs.input_ids, {
			max_length: 50,
		});
		return this.tokenizer.decode(outputs[0], { skip_special_tokens: true });
	}
}
