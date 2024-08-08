import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function GeminiChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const gemini = new GoogleGenerativeAI(
        "AIzaSyD_h8SRy54jyYXns4btKTdFAiHfuMcxb88"
      );
      const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setResponse(text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default GeminiChat;
