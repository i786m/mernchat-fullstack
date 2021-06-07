import { Avatar, IconButton } from '@material-ui/core';
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons';
import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import axios from '../axios';

const Chat = ({ messages }) => {
  //room avatar
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.ceil(Math.random() * 100000));
  }, []);
  //scroll to bottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  //send message
  const [input, setInput] = useState('');

  const sendMessage = async e => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: 'Users name',
      timestamp: 'Message time',
      received: false,
    });

    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map(message => (
          <p
            key={message._id}
            className={`chat__message ${message.received && 'chat__receiver'}`}
          >
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type='text'
            placeholder='Type a message'
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
