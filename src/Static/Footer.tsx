
import React from 'react'
import { styled } from 'styled-components';
const Footer = () =>{
    return(
        <div>
          <Container>
          <Wrapper>2023 HashIT App Ltd. Allrights reserved.</Wrapper>
          </Container>
        </div>
    )
}

export default Footer;


const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
padding: 50px 50px;
`

const Container = styled.div`
width: 100%;
height: 100%;
background-color: #EEEEEE;
display: flex;
justify-content: center;
align-items: center;

`