import { useEffect, useRef } from "react";
import { Container, Anchor} from "./ChatScreenStyles";
import Bubble  from '../components/MessageBubble';
import React from 'react';
import {ContactsDataType} from '../App'
import { BackendGetMessagesOfContactType } from "../backend";

function ChatScreen({messages, contactName}: {messages: BackendGetMessagesOfContactType[] | null,contactName : ContactsDataType['contactName'] | undefined }){
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
        console.log( messagesEndRef.current)
      }

    useEffect(() => {
    scrollToBottom();
    }, [messages]);
    return(
        <>
            <Container>
            {contactName && messages
                ? messages!.map((message,index)=> 
                    <Bubble 
                    message={message.message} 
                    from={message.from}
                    />
                )
                : null
            }
            <Anchor
            ref = {messagesEndRef}
            />
            </Container>
        </>
    )
}

export default ChatScreen;