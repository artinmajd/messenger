import styled from '@emotion/styled';

export const Button = styled.button`
  border: 0;
  box-shadow: none;
  border-radius: 10px;
  background-color: rgb(0,130,255);
  margin-left: 8px;
  color: whitesmoke;
  font-size: 16px;
  height: 21px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  bottom: 5px;
  
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
    padding-right: 30px;
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
        box-shadow: 0 0 0 3px rgb(21, 156, 228, 0.4);
        transition: all 0.3s ease;
      }
      
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  z-index: 2;
  right: 65px;
  top: 11px;
  height: 18px;
  width: 18px;
  background-color: white;

  & input{
      display: none;
  }

  & svg{
      height: 18px;
      width: 18px;
      fill: grey;      
      transition: fill 0.5s;

      :hover{
        fill: black;
        transition: fill 0.5s;
        
      }

  }
`;