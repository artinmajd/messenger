import React, { useCallback, useMemo, useState } from 'react';
import { AppContainer } from './AppStyles';
import ChatList from './screens/ChatList';
import WholeChatScreen from './screens/WholeChatScreen';

interface MasterDataType {
  contactName: string;
  messages: string[];
}

function App() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [activeContact, setActiveContact] = useState<string>('Artin')
  const [contactsData, setContactsData] = useState<MasterDataType[]>([{contactName:'Artin' ,messages:[] }])

  const handleSetSentMessages = useCallback((newMessage)=>{
    if( newMessage.trim() === ''){
      return;
    }
    setContactsData((previousMasterData)=>{
      console.log(contactsData)
      const newMasterData = previousMasterData.map((previousData)=>previousData.contactName === activeContact
      ?{contactName: activeContact, messages:[...(previousData.messages),newMessage]}
      : previousData )
      return(newMasterData)
    });
  },[activeContact,contactsData]);

  const activeContactSentMessages = useMemo(()=>
    contactsData.find((item)=>item.contactName === activeContact)!.messages
    ,[contactsData,activeContact]
    )


  return (
    <AppContainer>
      <ChatList/> 
      <WholeChatScreen 
      handleSetSentMessages={handleSetSentMessages}
      setInputMessage = {setInputMessage}
      inputMessage = {inputMessage}
      sentMessages = {activeContactSentMessages}
      />
      
    </AppContainer>
  );
}

export default App;
