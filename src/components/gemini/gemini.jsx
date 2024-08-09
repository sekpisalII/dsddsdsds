import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Card, TextInput, Button, Dropdown, Modal, Spinner } from 'flowbite-react';
import { HiOutlinePaperAirplane } from 'react-icons/hi';

// GeminiChat Component
function GeminiChat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! I am STEM, your personal web page assistant.' },
    { sender: 'bot', text: 'How can I help you?' },
  ]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('EN');
  const typingRef = useRef(null);

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

  const handleSend = async (event) => {
    event.preventDefault();

    if (prompt.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: prompt }]);
      setLoading(true);

      try {
        const gemini = new GoogleGenerativeAI('AIzaSyD_h8SRy54jyYXns4btKTdFAiHfuMcxb88');
        const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt, { language });
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
      }
    }
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    console.log(`Selected language: ${language}`);
  };

  useEffect(() => {
    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, []);


  return (
    <Card className="max-w-lg mx-auto shadow-lg rounded-lg border bg-blue-400 font-suwannaphum">
      {/* Header */}
      <header className="bg-[#16A1DF] font-suwannaphum rounded-lg">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-md text-[20px] font-semibold text-white mt-2 font-suwannaphum">STEM <br /><p className="text-[15px] font-normal">Online</p></h2>
          <img
            className="w-[80px] h-[50px] md:w-[100px] md:h-[60px] object-cover"
            src="../src/assets/STEM_LOGO_TUTOR.png"
            alt="STEM Logo"
          />
          <section className="bg-red-600 p-1 rounded-md font-suwannaphum">
            <Dropdown label={language} inline={true}>
              <Dropdown.Item
                className="hover:bg-slate-300 active:bg-slate-400"
                onClick={() => handleLanguageChange('EN')}
              >
                ENGLISH
              </Dropdown.Item>
              <Dropdown.Item
                className="hover:bg-slate-300 active:bg-slate-400"
                onClick={() => handleLanguageChange('KH')}
              >
                KHMER
              </Dropdown.Item>
              <Dropdown.Item
                className="hover:bg-slate-300 active:bg-slate-400"
                onClick={() => handleLanguageChange('EE')}
              >
                Eesti
              </Dropdown.Item>
              <Dropdown.Item
                className="hover:bg-slate-300 active:bg-slate-400"
                onClick={() => handleLanguageChange('IT')}
              >
                Italiano
              </Dropdown.Item>
              <Dropdown.Item
                className="hover:bg-slate-300 active:bg-slate-400"
                onClick={() => handleLanguageChange('FR')}
              >
                Francais
              </Dropdown.Item>
              <Dropdown.Item
                className="hover:bg-slate-300 active:bg-slate-400"
                onClick={() => handleLanguageChange('FI')}
              >
                Suoml
              </Dropdown.Item>
            </Dropdown>
          </section>
        </div>
      </header>
    
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
            <div className="p-3 rounded-lg bg-gray-100 text-gray-800 text-sm max-w-xs font-suwannaphum">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
        <TextInput
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
          disabled={loading}
          className="flex-1 font-suwannaphum "
        />
        <Button type="submit" className="w-10 h-10 p-0" color="red" disabled={loading}>
          {loading ? <Spinner size="sm" /> : <HiOutlinePaperAirplane size={20} />}
        </Button>
      </form>
    </Card>
  );
}

// App Component
function App() {
  const [showChat, setShowChat] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    setDragStart({ x: e.clientX, y: e.clientY });
    e.dataTransfer.setData('text/plain', '');
  };


  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return; // Ignore invalid drag events
    setImagePosition((prevPosition) => ({
      x: prevPosition.x + (e.clientX - dragStart.x),
      y: prevPosition.y + (e.clientY - dragStart.y),
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="p-4" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <section
        className="w-20 h-20 cursor-pointer absolute"
        style={{ left: `${imagePosition.x}px`, top: `${imagePosition.y}px` }}
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onClick={() => setShowChat(!showChat)}
      >
        <img
          src="../src/assets/robot.png"
          alt="Robot"
          className="w-full h-full"
        />
      </section>
      <Modal show={showChat} onClose={() => setShowChat(false)} size="lg">
        <Modal.Header className="font-suwannaphum text-[25px] font-semibold">Welcome Chat with STEM</Modal.Header>
        <Modal.Body>
          <GeminiChat />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowChat(false)} className="font-suwannaphum text-[20px]">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
