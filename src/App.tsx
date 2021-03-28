import React, { useCallback, useState } from 'react';
import MessageInput from './MessageInput'
import ChatScreen from './ChatScreen'
import { AppContainer } from './AppStyles';

function App() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const handleSetSentMessages = useCallback((newMessage)=>{
    setSentMessages((messages)=>([...messages,newMessage]));
    console.log(sentMessages);
  },[sentMessages])

  return (
    <AppContainer >
    <ChatScreen messages={sentMessages}/>
    <MessageInput 
    inputState={inputMessage}
    setInputState={setInputMessage}
    setSentMessages={handleSetSentMessages}
    />
    </AppContainer>
  );
}

export default App;
