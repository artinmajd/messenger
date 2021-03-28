import {Bubble} from './MessageBubbleStyles'


function MessageBubble({message, from}:{message: string, from: 'me'|'other'}){
    return(
        <Bubble from={from}>
        {message}
        </Bubble>
    )
}

export default MessageBubble;