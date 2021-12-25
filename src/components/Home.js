import styled from "styled-components"
import ImageSlider from "./imageSlider"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Recommends from "./Recomands"
import Tranding from "./Tranding"
import Viwer from "./Viwers"

const Home =(props)=>(
    <Container>
       <ImageSlider/>
       <Viwer/>
       <Recommends/>
       <NewDisney/>
       <Originals/>
       <Tranding/>
    </Container>
)

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