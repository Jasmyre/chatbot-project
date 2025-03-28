"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMEnhancer = void 0;
const transformers_1 = require("@xenova/transformers");
const axios_1 = __importDefault(require("axios"));
class LLMEnhancer {
    constructor(config) {
        this.config = config;
    }
    async initialize() {
        if (this.config.model === "Local") {
            this.tokenizer = await transformers_1.AutoTokenizer.from_pretrained("Xenova/llama-2-7b");
            this.model = await transformers_1.AutoModelForCausalLM.from_pretrained("Xenova/llama-2-7b");
        }
    }
    async enhanceText(prompt) {
        if (this.config.model === "GPT-3.5") {
            return this.callOpenAI(prompt);
        }
        else {
            return this.generateLocally(prompt);
        }
    }
    async callOpenAI(prompt) {
        const response = await axios_1.default.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        }, { headers: { Authorization: `Bearer ${this.config.apiKey}` } });
        return response.data.choices[0].message.content;
    }
    async generateLocally(prompt) {
        const inputs = await this.tokenizer(prompt, { return_tensors: "pt" });
        const outputs = await this.model.generate(inputs.input_ids, {
            max_length: 50,
        });
        return this.tokenizer.decode(outputs[0], { skip_special_tokens: true });
    }
}
exports.LLMEnhancer = LLMEnhancer;
