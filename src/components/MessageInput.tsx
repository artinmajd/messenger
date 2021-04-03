import { useCallback, useEffect, useRef } from 'react';
import {Button, InputContainer, LabelWrapper} from './MessageInputStyles';
import { Upload } from "../images";
import { ContactsDataType } from '../App';

function MessageInput({inputState, setInputState, setSentMessages, activeContact}
  :{
    inputState: string,
    setInputState: any,
    setSentMessages: any,
    activeContact: ContactsDataType['contactName'];
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

  const inputref = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputref.current?.focus();
    setInputState('');
  },[activeContact,setInputState]);

  return(
  <InputContainer>
    <form onSubmit={handleSubmit}>
      <input value={inputState} onChange={inputChangeCallback} ref={inputref}/>
      <Button onClick={handleSubmit}>
          Send
      </Button>
    </form>
      <LabelWrapper>
        <label className="custom-file-upload" >
            <input type="file"/>
              <Upload />
        </label>
      </LabelWrapper>
  </InputContainer>
  )

}

export default MessageInput;