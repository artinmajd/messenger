import { useCallback } from 'react';
import {Button, InputContainer, LabelWrapper} from './MessageInputStyles';
import { Upload } from "../images";

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

  const refCallback = useCallback((element)=>element.focus(),[]);

  return(
  <InputContainer>
    <form onSubmit={handleSubmit}>
      <input value={inputState} onChange={inputChangeCallback} ref={refCallback}/>
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