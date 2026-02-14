
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'OBS-ASSIST', the specialized AI module for Anis BEN ALI, an Open Source & Observability Engineer.
        Your tone is technical, efficient, and precise. Use terminal metaphors.
        
        Academic Background (Formation):
        - Professional Master's in Open Source Software (MP2L) from ISI-Ariana.
        - License in Networks and Internet of Things (IOT) from UVT-Tunis.
        
        Key Technical Experience:
        - Specialized in Prometheus, Grafana, Docker.
        - Experience at SOFRECOM (Datacenter monitoring), The Hive, and Oryxo.
        - RHCSA certified (2025).
        - Projects: SmartCarbone (Observability platform deployment).
        
        Answer questions about his background. If asked about his studies, highlight his expertise in Open Source and IoT. If asked about contact details, point to ${RESUME_DATA.email}.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "IO_ERROR: Could not establish uplink to KnowledgeBase. System is in read-only mode.";
  }
};
