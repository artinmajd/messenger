import { Global } from '@emotion/react';
import React, { useCallback, useMemo, useState } from 'react';
import { AppContainer } from './AppStyles';
import { getContactsWithMessage } from './backend';
import ChatList from './screens/ChatList';
import WholeChatScreen from './screens/WholeChatScreen';

 export interface ContactsDataType {
  contactName: string;
  messages: string[];
}

function App() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [activeContact, setActiveContact] = useState<string>('Artin')
  const [contactsData, setContactsData] = useState<ContactsDataType[]>(getContactsWithMessage())

  const handleSetSentMessages = useCallback((newMessage)=>{
    if( newMessage.trim() === ''){
      return;
    }
    setContactsData((previousContactsData)=>{
      const newContactsData = previousContactsData.map((previousData)=>previousData.contactName === activeContact
      ?{contactName: activeContact, messages:[...(previousData.messages),newMessage]}
      : previousData )
      return(newContactsData)
    });
  },[activeContact]);

  const activeContactSentMessages = useMemo(()=>
    contactsData.find((item)=>item.contactName === activeContact)!.messages
    ,[contactsData,activeContact]
    )


  return (
    <AppContainer>
      <Global 
      styles={`
        &body{
          margin: 0;
          padding: 0;
        }
      `
      }
      />
      <ChatList contactsData={contactsData} activeContact={activeContact} setActiveContact={setActiveContact}/> 
      <WholeChatScreen 
      handleSetSentMessages={handleSetSentMessages}
      setInputMessage = {setInputMessage}
      inputMessage = {inputMessage}
      activeContactSentMessages = {activeContactSentMessages}
      activeContactName = {activeContact}
      />
      
    </AppContainer>
  );
}

export default App;
