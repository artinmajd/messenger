import { useCallback } from 'react';
import { ConversationItemContainer,ContactNameWrapper } from './ConversationItemStyles';
import {ContactsDataType} from '../App'

export default function ConversationItem(
    {contactName,contactMessages, setActiveContact, isActive}:{
        contactName: ContactsDataType['contactName'],
        contactMessages: ContactsDataType['messages'],
        setActiveContact: any,
        isActive: boolean,
        }){
    const setActiveContactHandler = useCallback(()=>{
        setActiveContact(contactName);
    },[contactName,setActiveContact])
    return(
        <ConversationItemContainer onClick={setActiveContactHandler} isActive={isActive}>
            <ContactNameWrapper>
                {contactName}
            </ContactNameWrapper>
        </ConversationItemContainer>
    )
}