// import './App.css';

// function App() {
//   const comments = ["111","222","333"];
//   const commentsHTML = comments.map((comment) => { 
//     return (<li>{comment}</li>)
//   });
//   return (
//     <ul className='comments'>
//       {commentsHTML}
//     </ul>
//   )
// }

// export default App;

import React, { useState, useEffect, useRef } from 'react';

import personImg from './person.png';
import robotImg from './robot.png';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, sender: 'person' };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  useEffect(() => {
    const handleReplyMessage = () => {
      if (messages[messages.length - 1]?.sender === 'person') {
        setTimeout(() => {
          const replyMessage = { text: `I received: "${messages[messages.length - 1].text}"`, sender: 'robot' };
          setMessages([...messages, replyMessage]);
        }, 1000);
      }
    };
    handleReplyMessage();
  }, [messages]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '10px' }}>
        {messages.map((message, index) => (
          <div style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: index % 2 ? '#efefef' : '#ffffff', padding: '10px', borderRadius: '10px', marginBottom: '10px' }} key={index}>
            <img src={message.sender === 'person' ? personImg : robotImg} alt="头像" style={{ width: '40px', height: '40px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
            <div style={{ flexGrow: 1 }}>{message.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#efefef', padding: '10px' }}>
        <input style={{ marginRight: '10px', padding: '10px', border: 'none', flexGrow: 1, borderRadius: '10px' }} value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage} style={{ padding: '10px', borderRadius: '10px' }}>发送</button>
      </div>
    </div>
  );
}

export default App;