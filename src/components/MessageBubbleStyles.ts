import styled from '@emotion/styled';

type props = {
    from: 'me' | 'other';
}

export const Bubble = styled.div <props>`
    border: 1px solid ${(props:props)=>{return props.from === 'me'? 'rgb(152, 252, 119)' : 'white'}};
    border-radius: ${(props:props)=>{
        return props.from === 'me'? '30px 25px 5px 30px' : '15px 30px 30px 5px;'
        }};
    padding: ${(props:props)=>{return props.from === 'me'? '3px 10px 3px 10px' : '3px 10px 3px 10px'}};
    width: fit-content;
    max-width: calc(100% /2);
    background-color: ${(props:props)=>{return props.from === 'me'? 'rgb(152, 252, 119)' : 'white'}};
    margin-bottom: 10px;
    align-self: ${(props:props)=>{return props.from === 'me'? 'flex-end' : 'flex-start'}};
    position: relative;
    word-wrap: break-word;
    
    :last-child{
        transition: all 2s ease-in-out;
        transform: translate(20px,0);
    }
    
    
    

`;

export const BubblePoint = styled.div`

`;

export const Rectangle = styled.div`
width: 20px;
height: 20px;
background-color: red;
position: absolute
`;

export const Circle = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: black;
position: relative;
offset-position: 10px;
z-index:1;
`;