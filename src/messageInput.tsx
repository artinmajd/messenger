import { useCallback } from 'react';
import {Button, InputContainer} from './MessageInputStyles'
function MessageInput({inputState, setInputState, setSentMessages}
  :{
    inputState: string,
    setInputState: any,
    setSentMessages: any,
   }){
  
  const inputChangeCallback = useCallback(
    (event)=>{
      setInputState(event.target.value)
    },
    [setInputState])
  
  const handleSubmit = useCallback((event)=>{
    event.preventDefault()
    setSentMessages(inputState);
    setInputState('');
  },[inputState,setSentMessages, setInputState])

  return(
  <InputContainer>
    <form onSubmit={handleSubmit}>
      <input value={inputState} onChange={inputChangeCallback}/>
      <Button onClick={handleSubmit}>
          Send
      </Button>
    </form>
  </InputContainer>
  )

}

export default MessageInput;