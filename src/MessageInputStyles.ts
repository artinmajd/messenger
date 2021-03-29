import styled from '@emotion/styled';

export const Button = styled.button`
  border: 0;
  box-shadow: none;
  border-radius: 10px;
  background-color: rgb(0,100,100);
  height: 100%;
  margin-left: 8px;
  color: whitesmoke;
  font-size: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  & input{
    width: 100%;
    border-radius: 10px;
    border: 0 solid ;
    padding-left: 10px;
    font-family: "Comic Sans MS";

    :focus{
      outline: none;
      box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
      transition: all 0.3s ease;
    }
  }

  & button{
      outline: none;
      
      :focus{
        box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
      transition: all 0.3s ease;
      }
      
  }
`;