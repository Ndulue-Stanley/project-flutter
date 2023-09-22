import React from 'react'
import { styled } from 'styled-components';
import pix from '../Assets/logo-black-12822108.svg'
import pic from '../Assets/light-mode-btn-8c3556bd.svg'
 
const Header = () =>{
    return(
        <div>
           <Container>
                <Wrapper>
                    <Logo>
                        <Img src = {pix}/>
                    </Logo>
                    <NavHolder>
                        <Img2 src = {pic}/>
                    </NavHolder>
                </Wrapper>
           </Container>
        </div>
    )
}

export default Header;

const Img2 = styled.img``
const Img = styled.img``
const NavHolder = styled.div``
const Logo = styled.div``
const Wrapper = styled.div`
width: 90%;
height: 100%;
/* background-color: darkgray; */
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 320px){
margin: 10px;
width: 100%;
}
`
const Container = styled.div`
width: 100%;
height: 80px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`