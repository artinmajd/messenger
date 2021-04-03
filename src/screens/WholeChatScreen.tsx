import React, { useCallback, useEffect, useState } from "react";
import MessageInput from "../components/MessageInput";
import ChatScreen from "./ChatScreen";
import { ChatScreenContainer } from "./WholeChatScreenStyles";
import { BackendGetContactsType, BackendGetMessagesOfContactType, getMessagesOfContact } from "../backend";

interface Props{
    inputMessage: string;
    setInputMessage: any;
    activeContactName: BackendGetContactsType['name'] | undefined;
}

function WholeChatScreen({
    inputMessage,
    setInputMessage,
    activeContactName,
    }:Props) {
    const [sentMessages, setSentMessages] =useState<BackendGetMessagesOfContactType[] | null>(null);
    useEffect(()=>{
        setSentMessages(getMessagesOfContact(activeContactName!))
    },[activeContactName]);
    const handleSetSentMessages = useCallback((newMessage)=>{
          if( newMessage.message.trim() === ''){
            return;
          }
          return(
              sentMessages
              ? setSentMessages((previousSentMessages)=>[...previousSentMessages!, {from: newMessage.from, message:newMessage.message}])
              : setSentMessages([{from : newMessage.from, message: newMessage.message}])
          )
        },[sentMessages]);
          
    return(
        <ChatScreenContainer >
        {
        activeContactName?
        <>
        <ChatScreen contactName={activeContactName} messages={sentMessages}/>
        <MessageInput 
        activeContact ={activeContactName}
        inputState={inputMessage}
        setInputState={setInputMessage}
        setSentMessages={handleSetSentMessages}
        />
        </>
        : null
        }
        
      </ChatScreenContainer>
    )
}

export default WholeChatScreen;