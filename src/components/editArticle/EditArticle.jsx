import React, { useState, useEffect, useRef } from 'react';
import { Card, Dropdown, TextInput, Button, Spinner } from 'flowbite-react';

function GeminiChat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! I am Norby, your personal web page assistant.' },
    { sender: 'bot', text: 'How can I help you?' },
  ]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);
  const chatEndRef = useRef(null);

  const typeMessage = (text) => {
    setIsTyping(true);
    let index = 0;
    typingRef.current = setInterval(() => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage.sender === 'bot') {
          lastMessage.text = text.slice(0, index + 20);
        }
        return newMessages;
      });
      index += 1;
      if (index >= text.length) {
        clearInterval(typingRef.current);
        setIsTyping(false);
      }
    }, 50);
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (event) => {
    event.preventDefault();

    if (prompt.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: prompt }]);
      setLoading(true);

      try {
        const gemini = new GoogleGenerativeAI('AIzaSyD_h8SRy54jyYXns4btKTdFAiHfuMcxb88');
        const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: '' },
        ]);

        typeMessage(text);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setPrompt('');
        scrollToBottom();
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, []);

  return (
    <Card className="max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto p-4 shadow-lg rounded-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Norby</h2>
        <Dropdown label="EN" inline={true}>
          <Dropdown.Item>EN</Dropdown.Item>
          <Dropdown.Item>KH</Dropdown.Item>
        </Dropdown>
      </div>

      {/* Messages */}
      <div className="overflow-auto h-96 p-2">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-2`}>
            <div
              className={`p-3 rounded-lg text-sm max-w-xs ${
                message.sender === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-red-500 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-2">
            <div className="p-3 rounded-lg bg-gray-100 text-gray-800 text-sm max-w-xs">
              Typing...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
        <TextInput
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
          disabled={loading}
          className="flex-1"
        />
        <Button type="submit" className="w-10 h-10 p-0" color="red" disabled={loading}>
          {loading ? <Spinner size="sm" /> : 'Send'}
        </Button>
      </form>
    </Card>
  );
}

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    window.alert('This is your alert message!');
  };

  return (
    <div className="p-4">
      <section className="w-20 h-20">
        <img
          src="../src/assets/robot.png"
          alt="Robot"
          onClick={handleClick}
          className="cursor-pointer"
        />
      </section>
      {showChat && <GeminiChat />}
    </div>
  );
}

export default App;
