import styled from "styled-components";
// import src from '../../public/images/cta-logo-one.svg'
const Login=(props)=>{
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
                  Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subucription .As of 03/26/2021,the price of Disney+ and the Disney Bundle Will increase by 1$
               </Description>
               <CTALogonTwo src='/images/cta-logo-two.png' alt='this is the atc logo'/>
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
const CTALogonTwo=styled.img`
   max-width:100%;
   margin-bottom:20px;
   display:inline-block;
   vertical-align:bottom;
   width:100%;
`
export default Login