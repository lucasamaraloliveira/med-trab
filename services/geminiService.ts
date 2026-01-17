
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da Med Trab, uma empresa líder em Medicina e Segurança do Trabalho no Brasil.
Seu objetivo é ajudar usuários com dúvidas sobre:
1. Normas Regulamentadoras (NRs).
2. Exames ocupacionais (Admissional, Demissional, Periódico, etc).
3. Programas de segurança (PGR, PCMSO).
4. Dúvidas gerais sobre saúde no ambiente de trabalho.

Seja profissional, empático e informativo. Responda de forma concisa. 
Se o usuário perguntar algo fora desse escopo, educadamente direcione-o para o contato comercial da Med Trab.
Não forneça diagnósticos médicos definitivos, sempre sugira a consulta com o médico do trabalho.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, tive um problema ao processar sua pergunta. Por favor, tente novamente mais tarde.";
  }
};
