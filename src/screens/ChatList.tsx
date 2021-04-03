import ConversationItem from "../components/ConversationItem";
import { Container } from "./ChatListStyles";
import {ContactsDataType} from '../App'

function ChatList ({contactsData,activeContact, setActiveContact}: 
    {
        contactsData: ContactsDataType[],
        activeContact:ContactsDataType['contactName'],
        setActiveContact: any,
    }){
    return(
        <Container>
            {
                contactsData.map(contactData=>
                <ConversationItem 
                contactName={contactData.contactName} 
                contactMessages={contactData.messages}
                setActiveContact = {setActiveContact}
                isActive ={contactData.contactName === activeContact}
                />)
            }
          
        </Container>
    )
}

export default ChatList;