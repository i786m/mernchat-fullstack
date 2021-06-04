import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(res => {
      setMessages(res.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher('545e738fb6c94fc61593', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', newMessage => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
};

export default App;
