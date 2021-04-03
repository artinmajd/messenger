import React from "react";
import MessageInput from "../components/MessageInput";
import ChatScreen from "./ChatScreen";
import { ChatScreenContainer } from "./WholeChatScreenStyles";
import {ContactsDataType} from '../App'

interface Props{
    activeContactSentMessages: string[];
    inputMessage: string;
    setInputMessage: any;
    handleSetSentMessages: any;
    activeContactName: ContactsDataType['contactName'];
}

function WholeChatScreen({
    activeContactSentMessages,
    inputMessage,
    setInputMessage,
    handleSetSentMessages,
    activeContactName,
    }:Props) {
    return(
        <ChatScreenContainer >
        <ChatScreen messages={activeContactSentMessages} contactName={activeContactName}/>
        <MessageInput 
        activeContact ={activeContactName}
        inputState={inputMessage}
        setInputState={setInputMessage}
        setSentMessages={handleSetSentMessages}
        />
      </ChatScreenContainer>
    )
}

export default WholeChatScreen;