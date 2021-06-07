import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.ceil(Math.random() * 100000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter a room name');

    if (roomName) {
      //add room to db
    }
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className='sidebarChat__info'>
        <h2>Room name</h2>
        <p>last message</p>
      </div>
    </div>
  ) : (
    <div className='sidebarChat' onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
