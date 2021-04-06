import { Global } from '@emotion/react';
import React, { useCallback, useMemo, useState } from 'react';
import { AppContainer } from './AppStyles';
import { BackendGetContactsType, getContacts, getContactsWithMessage } from './backend';
import ChatList from './screens/ChatList';
import WholeChatScreen from './screens/WholeChatScreen';

 export interface ContactsDataType {
  contactName: string;
  messages: string[];
}

function App() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [activeContact, setActiveContact] = useState<string | undefined>(undefined)
  const [contacts, setContacts ]= useState <BackendGetContactsType[]>(getContacts())
  //const [contactsData, setContactsData] = useState<ContactsDataType[]>(getContactsWithMessage())

  // const handleSetSentMessages = useCallback((newMessage)=>{
  //   if( newMessage.trim() === ''){
  //     return;
  //   }
  //   setContactsData((previousContactsData)=>{
  //     const newContactsData = previousContactsData.map((previousData)=>previousData.contactName === activeContact
  //     ?{contactName: activeContact, messages:[...(previousData.messages),newMessage]}
  //     : previousData )
  //     return(newContactsData)
  //   });
  // },[activeContact]);

  // const activeContactSentMessages = useMemo(()=>{
  //   return(
  //     activeContact
  //     ? contactsData.find((item)=>item.contactName === activeContact)!.messages
  //     : null
  //   )
  // }
  //   ,[contactsData,activeContact]
  //   )


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
      <ChatList contacts={contacts} activeContact={activeContact} setActiveContact={setActiveContact}/> 
      <WholeChatScreen 
      setInputMessage = {setInputMessage}
      inputMessage = {inputMessage}
      activeContactName = {activeContact}
      />
      
      
    </AppContainer>
  );
}

export default App;
