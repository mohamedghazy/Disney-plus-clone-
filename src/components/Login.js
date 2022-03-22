import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faFacebook,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'
const Login=()=>{
   return (
      <Container>
         <Content>
           <BgImage/> 
            <CTA>
               <CTALogonone src='/images/cta-logo-one.svg' alt='this is the atc logo'/>
               <SignUp>
                  Get It All There
               </SignUp>
               <Description>
                  Get Access to the full Application to be able to see the app features By login with your google email , And you can follow me 
                  on social media from links below Thanks . 
               </Description>
               <SocialMedia>
                  <a href="https://www.linkedin.com/in/mohamed-ahmedghazy/" target='_blank'>
                     <FontAwesomeIcon icon={faLinkedinIn}/>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100005751916164" target='_blank'>
                     <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                  <a href="https://www.instagram.com/developer.ghazy/" target='_blank'>
                  <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                  <a href="https://github.com/mohamedghazy" target='_blank'>
                  <FontAwesomeIcon icon={faGithub}/>
                  </a>
               </SocialMedia>
            </CTA>
         </Content>
      </Container>
   )
}
const Container=styled.section`
   overflow:hidden;
   display:flex;
   flex-direction:column;
   text-align:center;
   height:100vh
`
const Content=styled.div`
   margin-bottom:10vw;
   box-sizing:border-box;
   width:100%;
   min-height:100vh;
   position:relative;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   padding:80px 40px;
   height:100%;
`
const BgImage=styled.div`
   height:100%;
   background-position :top;
   background-size:cover;
   background-repeat:no-repeat;
   background-image:url('/images/login-background.jpg');
   position:absolute;
   top:0;
   right:0;
   left:0;
   z-index:-99999898;
`
const CTA=styled.div`
   margin-bottom:2em;
   margin-top:0;
   margin-left:auto;
   margin-right:auto;
   max-width:650px;
   flex-wrap:wrap;
   display:flex;
   flex-direction:column;
   justify-content:center;
   text-align:center;
   align-items:center;
   transition:opacity 0.2s ease-out:
   width:100%;
   
`
const CTALogonone=styled.img`
   margin-bottom:15px;
   max-width:600px;
   display:block;
   width:100%
`
const SignUp=styled.a`
   font-weight:bold;
   color:#f9f9f9;
   background-color:#0063e5;
   margin-bottom:12px;
   width:100%;
   letter-spacing:1.5px;
   font-size:18px;
   padding:16.5px 0;
   border:1px solid transparent;
   border-radius:4px;
   cursor:pointer;

   &:hover {
      background-color:#0483ee;
   }
`
const Description=styled.p`
   color:hsla(0,0%,95.3%,1);
   font-size:14px;
   margin:0 0 24px;
   line-height:1.5;
   letter-spacing:1.5px;
`
const SocialMedia=styled.div`
   display:flex;
   max-width:100%;
   vertical-align:bottom;
   width:100%;
   justify-content: center;
   font-size: 30px;

   a{
      color: white;
      margin-right: 25px;

   }
`

export default Login