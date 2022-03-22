import styled from "styled-components";
import { useEffect,useState } from "react";
import db from '../firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faFolderOpen} from '@fortawesome/free-solid-svg-icons'

const Wishlist=()=>{
   const userId= useSelector(state=>state.user.userId)
   const [movieData,setMovieData]= useState([])

   useEffect(()=>{
      db.collection('wishlists').doc(userId).onSnapshot((snapshot)=>{
         setMovieData(Object.values(snapshot.data()))
      })
   },[userId])
   const handelDelete=(movieName)=>{
      // e.stopPropagation()
      db.collection('wishlists').doc(userId).update({
         [movieName] : firebase.firestore.FieldValue.delete()
      })
      console.log('hi');
   }
   return (
      <Container>
         {movieData.length !==0 ?
         <>
          <h2>Your Wishlist</h2>
         <Content>
            {movieData.map(movie=>(
               <Movie key={movie.moveId}>
                  <Link to={'/detail/' + movie.moveId}>
                  <img src={movie.image} />
                  </Link>
                  <Cancele onClick={()=>handelDelete(movie.name)}>
                     <span>
                     <FontAwesomeIcon icon={faTrash} />
                     </span>
                  </Cancele>
               </Movie>
            ))}
         </Content>
         </> :
               <EmptyWishlist>
                  <h2>Your Wishlist is empty</h2>
                  <span>
                  <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
                  </span>
               </EmptyWishlist>
         }
         
      </Container>
   )
}

const Container=styled.div`
   padding:100px 26px 26px ;
`
const Content=styled.div`
   margin-top:30px;
   display:grid;
   grid-gap:25px;
   gap:25px;
   grid-template-columns:repeat(4,minmax(0,1fr));

   @media (max-width:768px) {
   grid-template-columns:repeat(2,minmax(0,1fr));

   }
`
const Movie=styled.div`
   padding-top:56.25%;
   border-radius:10px;
   box-shadow: rgb(0 0 0/96%) 0px 26px 30px -10px ,rgb(0 0 0/73%) 0px 16px 10px -10px;
   cursor:pointer;
   overflow:hidden;
   position:relative;
   transition: all 250ms cubic-bezier(0.25, 0.46 ,0.45, 0.94);
   border:3px solid rgba(249,249,249,0.1);

   img{
      inset:0px;
      display:block;
      object-fit:cover;
      height:100%;
      width:100%;
      opacity:1;
      position:absolute;
      top:0;
      z-index:1;
      transition: opacity 500ms ease-in-out 0s;
   }
   &:hover{
         box-shadow: rgb(0 0 0/96%) 0px 26px 30px -10px ,rgb(0 0 0/73%) 0px 16px 10px -10px;
         transform:scale(1.05);
         border-color: rgba(249,249,249,0.8);

         }
`
const Cancele =styled.div`
   bwidth: 27px;
   height: 30px;
   position: absolute;
   z-index: 2;
   top: 5px;
   right: 10px;
   display: flex;
   flex-direction: column;

   span{
      position: absolute;
      right: 10px;
      top:10px;
   }
`
const EmptyWishlist= styled.div `
   text-align:center;
   color: gray;
   transform: translate(10px, 170%);
   span{
      font-size: 50px;
      color: #5c5b5b;
   }
`
export default Wishlist