import { styled } from "styled-components";
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
// import {FaSquareThreads} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Upload = () =>{
    return(
        <div>
          <Container>
            <Wrapper>
                <Head>
                    <h1>Join the waitlist for<br></br> <span>HashIT!</span></h1>
                </Head>
                <InputHolde>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email address"/>
        <Div>Get notified when HashIT is live</Div>
        <Icons>
            <BiLogoFacebookCircle/>
            <AiFillInstagram/>

            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
        </Icons>
            </InputHolde>

            </Wrapper>
          
          </Container>
        </div>
    )
}

export default Upload;


const Icons = styled.div`
display: flex;justify-content: center;
align-items: center;
gap: 10px;
color: black;
font-size: 20px;
`
const Div = styled.div`
 width: 400px;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media screen and  (max-width: 320px){
        width: 200px;
    height: 50px;
    font-size: 15px;
    }
    @media screen and  (max-width: 375px){
        width: 170px;
    height: 40px;
    font-size: 11px;
    }
    @media screen and  (max-width: 425px){
        width: 150px;
    height: 35px;
    font-size: 9px;
    }

`
const Head = styled.div`
width: 100%;
height: 20%;
h1{
                font-size: 45px;
        font-weight: 700;
    }
span{
        color: #EC5A24;
    }
    @media screen and (max-width: 320px){
        width: 100%;
    }
    @media screen and (max-width: 375px){
        width: 100%;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const InputHolde = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
gap: 20px;
input{
    width: 400px;
    height: 50px;
    background-color: transparent;
    outline-color: #EC5A24;
    border: 1px solid gray;
    border-radius: 10px;
}::placeholder{
    margin-left: 20px;
}
@media screen and (max-width: 320px){
        width: 100%;
        input{
    width: 190px;
    height: 40px;
    background-color: transparent;
    outline-color: #EC5A24;
    border: 1px solid gray;
    border-radius: 10px;
}
    }
@media screen and (max-width: 375px){
        width: 100%;
        input{
    width: 190px;
    height: 40px;
    background-color: transparent;
    outline-color: #EC5A24;
    border: 1px solid gray;
    border-radius: 10px;
}
    }
@media screen and (max-width: 425px){
        width: 100%;
        input{
    width: 200px;
    height: 40px;
    background-color: transparent;
    outline-color: #EC5A24;
    border: 1px solid gray;
    border-radius: 10px;
}
    }
`
const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
flex-wrap: wrap;
@media screen and (max-width: 320px){
    display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
width: 100%;
}
`
const Container = styled.div`
width: 100%;
height:100%;
/* background-color: #EEEEEE; */
display: flex;
justify-content: center;
align-items: center;
`