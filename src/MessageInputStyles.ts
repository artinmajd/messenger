import styled from '@emotion/styled';

export const Button = styled.button`
  border: 0;
  box-shadow: none;
  border-radius: 10px;
  background-color: rgb(0,100,100);
  margin-left: 8px;
  color: whitesmoke;
  font-size: 16px;
  height: 21px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  & form {
    display: flex;
    flex-direction: row;
    width: 100% ;
    align-items: flex-end;
  }

  & input{
    width: 100%;
    border-radius: 10px;
    border: 0 solid ;
    padding-left: 10px;
    font-family: "Comic Sans MS";
    margin-top: 10px;

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