import ConversationItem from "../components/ConversationItem";
import { Container } from "./ChatListStyles";
import {ContactsDataType} from '../App'
import { BackendGetContactsType } from "../backend";

function ChatList ({contacts,activeContact, setActiveContact}: 
    {
        contacts: BackendGetContactsType[],
        activeContact:ContactsDataType['contactName'] | undefined,
        setActiveContact: any,
    }){
    return(
        <Container>
            {
                contacts.map(contact=>
                <ConversationItem 
                contactName={contact.name} 
                setActiveContact = {setActiveContact}
                isActive ={contact.name === activeContact}
                />)
            }
          
        </Container>
    )
}

export default ChatList;