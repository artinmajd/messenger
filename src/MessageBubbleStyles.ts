import styled from '@emotion/styled';

type props = {
    from: 'me' | 'other';
}

export const Bubble = styled.div <props>`
    border: 1px solid ${(props:props)=>{return props.from === 'me'? 'rgb(152, 252, 119)' : 'white'}};
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 10px;
    padding: 3px 10px 3px 5px;
    width: fit-content;
    max-width: calc(100% /2);
    background-color: ${(props:props)=>{return props.from === 'me'? 'rgb(152, 252, 119)' : 'white'}};
    margin-bottom: 10px;
    align-self: ${(props:props)=>{return props.from === 'me'? 'flex-end' : 'flex-start'}}
`;
