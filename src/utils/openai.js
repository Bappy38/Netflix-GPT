import OpenAI from "openai";
import { OPENAI_API_KEY } from "../constants/gptConstants";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;