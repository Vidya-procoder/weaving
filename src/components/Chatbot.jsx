import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import './Chatbot.css';

const PREDEFINED_RESPONSES = [
  {
    keywords: ['contact', 'phone', 'number', 'call', 'mobile'],
    reply: 'Phone: +91 9043137508'
  },
  {
    keywords: ['mail', 'email', 'id', 'gmail'],
    reply: 'Email: vidyasridhanasekaran@gmail.com'
  },
  {
    keywords: ['address', 'location', 'where', 'place', 'visit', 'located'],
    reply: '4/370 Malani Jedarplayam, Periyamalani Post, Namakkal District – 637410'
  },
  {
    keywords: ['service', 'services', 'provide', 'do you do', 'what do you do', 'offer'],
    reply: 'We provide Yarn Reeling Machine services, Warping Machine services, and Autoloom Weaving.'
  },
  {
    keywords: ['about', 'company', 'who are you', 'profile'],
    reply: 'T. Dhanasekaran Tex is a trusted weaving industry with 30+ years of experience in textile weaving and export-quality production.'
  },
  {
    keywords: ['experience', 'years', 'how long', 'working'],
    reply: 'We have over 30+ years of weaving experience.'
  },
  {
    keywords: ['machine', 'machines', 'details', 'equipment', 'handloom', 'powerloom'],
    reply: 'We started with Handloom, later used Powerloom, and now transformed into advanced Autoloom weaving technology.'
  },
  {
    keywords: ['autoloom', 'auto loom', 'modern'],
    reply: 'Yes, we currently use modern Autoloom weaving machines.'
  }
];

const FALLBACK_REPLY = "Sorry, please ask questions related to our weaving industry services.";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Welcome to T. Dhanasekaran Tex 👋\nHow can we help you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    for (const item of PREDEFINED_RESPONSES) {
      if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
        return item.reply;
      }
    }
    
    return FALLBACK_REPLY;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate slight delay for bot typing
    setTimeout(() => {
      const botReply = getBotResponse(newUserMessage.text);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: botReply
        }
      ]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <h3>T. Dhanasekaran Tex</h3>
                  <p>Online support</p>
                </div>
              </div>
              <button onClick={toggleChat} className="chatbot-close-btn" aria-label="Close Chat">
                <X size={20} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`chat-message-wrapper ${msg.sender}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="message-icon bot-icon">
                      <Bot size={14} />
                    </div>
                  )}
                  <div className={`chat-message ${msg.sender}`}>
                    {msg.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i !== msg.text.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="message-icon user-icon">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="chatbot-input-area">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-send-btn" disabled={!inputValue.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="chatbot-toggle-btn"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
