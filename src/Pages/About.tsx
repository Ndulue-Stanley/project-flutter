import { styled } from "styled-components";
import pix from '../Assets/img12.png'
import pic from '../Assets/wifi-a041367d.svg'
import pic1 from '../Assets/flight-96b8092f.svg'

const About = () =>{
    return(
        <div>
           <Container>
            <Wrapper>
                <Head>
                    <h1>
                       
                        Supercharge Your <br></br>Mobile Life with <span>HasshIT</span>
                        
                    </h1>
                    
                </Head>
                <ImageHolde>
                    <Hold>
                    <Img src = {pix}/>
                    </Hold>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut officia quaerat quos temporibus est nostrum nihil incidunt sapiente explicabo placeat provident fugiat porro, molestiae deserunt ullam exercitationem, natus earum ab.</p>
                </ImageHolde>
            </Wrapper>
           </Container>
        </div>
    )
}

export default About;

const Hold = styled.div`
width: 90%;
height: 80%;
`
const Img2 = styled.img``
const Img = styled.img`
width: 100%;
height: 100%;
@media screen and (max-width: 320px){
width: 100%;
p{
    font-size: 5px;
    font-weight: 300;
}}
@media screen and (max-width: 375px){
width: 100%;
p{
    font-size: 5px;
    font-weight: 300;
}
}
`
const ImageHolde = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
p{
    font-size: 20px;
    font-weight: 500;
}
@media screen and (max-width: 320px){
width: 100%;
p{
    font-size: 15px;
    font-weight: 350;
}
}
@media screen and (max-width: 375px){
width: 100%;
p{
    font-size: 15px;
    font-weight: 350;
}
}
`

const Head = styled.div`
    width: 100%;
    flex-wrap: wrap;
    h1{
                font-size: 45px;
        font-weight: 700;
    }span{
        color: #EC5A24;
    }
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
flex-wrap: wrap;
@media screen and (max-width: 320px){
width: 100%;
}
@media screen and (max-width: 375px){
width: 100%;
}
`
const Container = styled.div`
width: 100%;
height:100%;
background-color: #EEEEEE;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 320px){
width: 100%;
}
@media screen and (max-width: 375px){
width: 100%;
}
`