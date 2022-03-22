import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { auth, providor } from "../firebase";
import {selectUserEmail,selectUserName, selectUserphoto,setUserLoginDetails,setSignOut} from '../feature/user/userSlice'
import { useEffect } from "react";
const Header =(props)=>{
   const dispatsh=useDispatch()
   const history= useHistory()
   const userName= useSelector(selectUserName)
   const userPhoto= useSelector(selectUserphoto)
   const userEmail= useSelector(selectUserEmail)
   useEffect(()=>{
      auth.onAuthStateChanged(async (user)=>{
         // console.log(user)
         if(user) {
            setUser(user);
            history.push('/home')
         }
      })

   },[userName])
   // create a function to make authantcation with google 
   const handleAuth =()=>{ 
      if(!userName){
            auth.signInWithPopup(providor)
         .then(resulte=>{
            setUser(resulte.user)
            console.log('hjk',resulte.user.uid);
         })
         .catch(
            error=> alert(error.message)
            )
      }else if (userName){
         auth.signOut().then(()=>{
            dispatsh(setSignOut())
            history.push('/')
         }).catch((err)=>alert(err.message))
      }}
      
   const setUser= (user)=>{
      dispatsh(setUserLoginDetails({
         name:user.displayName,
         email:user.email,
         photo:user.photoURL,
         userId:user.uid
      }))
   }


   return (<Nav>
      <Logo>
         <Link to="/home">
         <img src='/images/logo.svg' alt='Disney logo'/>
         </Link>
      </Logo>
      {!userName ?<Login onClick={handleAuth}>LogIn</Login> :
      <>
         <NavMenu>
            <Link to='/home'>
            <img src='/images/home-icon.svg' alt='home'/>
               <span>Home</span>
            </Link>
            <a>
            <img src='/images/search-icon.svg' alt='home'/>
               <span>Search</span>
            </a>
            <Link to="/wishlist">
               <img src='/images/watchlist-icon.svg' alt='home'/>
               <span>WatchList</span>
            </Link>
            <a>
            <img src='/images/movie-icon.svg' alt='home'/>
               <span>Movies</span>
            </a>
            <a>
            <img src='/images/series-icon.svg' alt='home'/>
               <span>series</span>
            </a>
         </NavMenu>
         <SignOut>
            <UserImage src={userPhoto} alt={userName}/>
            <DropMenu>
               <snap onClick={handleAuth}>Sign Out</snap>
            </DropMenu>
         </SignOut>
      </>
      }
   </Nav>

   )
}
const Nav=styled.nav`
   position:fixed;
   top:0;
   left:0;
   right:0;
   height:70px;
   background-color:#090b13;
   display:flex;
   justify-content: space-between;
   align-items:center;
   padding:0 36px;
   z-index:3;
`
const Logo=styled.a`
   padding:0;
   width:80px;
   margin-top:4px;
   max-height:70px;
   font-size:0;
   display :inline-block;
   cursor:pointer;
   img{
      display:block;
      width:100%;
   }

`
const NavMenu=styled.div`
   color:hsla(0,0%,95.3%,1);
   display:flex;
   flex-flow:row nowrap;
   align-items:center;
   height:100%;
   justify-content:flex-end;
   margin:0;
   padding:0;
   position:relative;
   margin-right:auto;
   margin-left:50px;

   a{
      display:flex;
      align-items:center;
      padding:0;
      margin-right:25px;
      cursor:pointer;

      img{
         height:20px;
         min-width:20px;
         width:20px;
         z-index:auto;
      
      }
      span{
         color:rgb(249,249,249);
         font-size:13px;
         letter-spacing:1.42px;
         padding:2px;
         white-space:nowrap;
         position:relative;


         &:before{
            background-color:rgb(249,249,249);
            border-radius:0px 0px 4px 4px;
            bottom:-6px;
            content:'';
            height:2px;
            left:0px;
            opacity:0;
            position:absolute;
            right:0px;
            transform-origin: left center;
            transform:scaleX(0);
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility:hidden;
            width:auto;
         }
      }
      &:hover{
         span:before{
            transform:scaleX(1);
            visibility:visible;
            opacity:1 !important;
         }
      }
   }

   @media (max-width:768px){
      display:none;
   }
`
const Login=styled.a`
   background-color:rgba(0,0,0,0.6);
   padding:8px 16px;
   text-transform:uppercase;
   letter-spacing:1.8px;
   border:1px solid #f9f9f9;
   border-radius:4px;
   transition:all 0.2s ease 0s;
   cursor:pointer;

   &:hover{
      background-color:#f9f9f9;
      color:#000;
   }
`

const DropMenu=styled.div `
   position:absolute;
   top:70px;
   right:30px;
   background: rgb(19,19,19);
   border:1px solid rgba(151,151,151,0.34);
   border-radius:4px;
   padding:10px;
   font-size:16px;
   letter-spacing:3px;
   width:110px;
   opacity:0;
   transition: opacity 1s ;
`
const SignOut= styled.div`
   position:reltive;
   height:48px ;
   width:48px;
   display:flex;
   cursor:pointer;
   align-items:center;
   justify-content:center;

   &:hover{
      ${DropMenu}{
         opacity:1;
      }
   }
`
const UserImage=styled.img`
   height:100%;
   width:100%;
   border-radius:50%;
`
export default Header