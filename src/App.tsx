import React from 'react';
import MessageInput from './MessageInput'
import ChatScreen from './ChatScreen'
import { AppContainer } from './AppStyles';

function App() {
  return (
    <AppContainer >
    <ChatScreen/>
    <MessageInput/>
    </AppContainer>
  );
}

export default App;
