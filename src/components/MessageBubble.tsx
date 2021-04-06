import { BackendGetMessagesOfContactType } from '../backend';
import {Bubble, BubblePoint, Circle, Rectangle} from './MessageBubbleStyles'


function MessageBubble({message, from}
    :{
    message: BackendGetMessagesOfContactType['message'],
    from: BackendGetMessagesOfContactType['from'],
     }){
    return(
        <>
        <Bubble from={from}>
        {message}
        </Bubble>
        </>
    )
}

export default MessageBubble;