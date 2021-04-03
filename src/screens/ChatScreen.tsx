import { useEffect, useRef } from "react";
import { Container, Anchor} from "./ChatScreenStyles";
import Bubble  from '../components/MessageBubble';
import React from 'react';
import {ContactsDataType} from '../App'

function ChatScreen({messages, contactName}: {messages: string[],contactName : ContactsDataType['contactName'] }){
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
            {
                messages.map((message,index)=> 
                    <Bubble 
                    message={message} 
                    from={index%2 === 0? 'me': 'other'}
                    />
                )
            }
            <Anchor
            ref = {messagesEndRef}
            />
            </Container>
        </>
    )
}

export default ChatScreen;