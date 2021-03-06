import styled from '@emotion/styled';

type Props ={
    isActive: boolean;
}

export const ConversationItemContainer = styled.div <Props>`
    width: 200px;
    height: 100px;
    min-height: 100px;
    padding-left: 8px;
    border-bottom: 1px solid steelblue;
    background-image: ${(props:Props)=>props.isActive
    ? 'linear-gradient(rgb(0,130,255),white)': 'linear-gradient(white,white)'};
    color: ${(props:Props)=>props.isActive? 'white': 'black'}
`;

export const ContactNameWrapper = styled.div`
font-family: Tahoma;
font-size: 28px;
`;