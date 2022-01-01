import styled from "styled-components"
import ImageSlider from "./imageSlider"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Recommends from "./Recomands"
import Tranding from "./Tranding"
import Viwer from "./Viwers"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import db from '../firebase'
import {setMovies} from '../feature/movie/movieSlice'
import {selectUserName} from '../feature/user/userSlice'
const Home =(props)=>{
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommeneds=[];
    let originals=[]
    let newInDisney=[]
    let trindingInDisney=[]

   useEffect(()=>{
      db.collection('movies').onSnapshot((snapshot)=>{
         snapshot.docs.map(doc=>{
            switch (doc.data().type){
               case 'recommend':
                  recommeneds= [...recommeneds,{id:doc.id,...doc.data()}]
                  break;

               case 'new':
                  newInDisney= [...newInDisney,{id:doc.id,...doc.data()}]
                  break;

               case 'trending':
                  trindingInDisney= [...trindingInDisney,{id:doc.id,...doc.data()}]
                  break;
                  
               case 'original':
                  originals= [...originals,{id:doc.id,...doc.data()}]
                  break;      
            }
         })
         dispatch(setMovies({
            recommened:recommeneds,
            newInDisney:newInDisney,
            trindingInDisney:trindingInDisney,
            originals:originals
         }))
      })
   },[userName])
   return(
      <Container>
       <ImageSlider/>
       <Viwer/>
       <Recommends/>
       <NewDisney/>
       <Originals/>
       <Tranding/>
    </Container>
   )
}

const Container =styled.main`
   position:relative;
   background:url('/images/home-background.png');
   min-height: 100vh;
   padding: 0 calc(3.5vw+5px);
   overflow-x:hidden;
   top: 70px;
   background-repeat: no-repeat;
   background-size: cover;
`

export default Home