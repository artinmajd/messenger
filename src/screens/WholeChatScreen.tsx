import React from "react";
import MessageInput from "../components/MessageInput";
import ChatScreen from "./ChatScreen";
import { ChatScreenContainer } from "./WholeChatScreenStyles";

interface Props{
    sentMessages: string[];
    inputMessage: string;
    setInputMessage: any;
    handleSetSentMessages: any;
}

function WholeChatScreen({sentMessages,inputMessage, setInputMessage, handleSetSentMessages}:Props) {
    return(
        <ChatScreenContainer >
        <ChatScreen messages={sentMessages}/>
        <MessageInput 
        inputState={inputMessage}
        setInputState={setInputMessage}
        setSentMessages={handleSetSentMessages}
        />
      </ChatScreenContainer>
    )
}

export default WholeChatScreen;