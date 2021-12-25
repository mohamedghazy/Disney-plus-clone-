import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import styled from "styled-components";

const ImageSlider=(props)=>{
   let sliderSettings={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true
   }
   return (
      <Carousel {...sliderSettings}>
         <Wrap>
            <a>
               <img src="/images/slider-badging.jpg" alt="diseny plus nwe movies"/>
            </a>
         </Wrap>
         <Wrap>
            <a>
               <img src="/images/slider-scale.jpg" alt="diseny plus nwe movies"/>
            </a>
         </Wrap>
         <Wrap>
            <a>
               <img src="/images/slider-badag.jpg" alt="diseny plus nwe movies"/>
            </a>
         </Wrap>
         <Wrap>
            <a>
               <img src="/images/slider-scales.jpg" alt="diseny plus nwe movies"/>
            </a>
         </Wrap>
      </Carousel>
   )
}
const Carousel=styled(Slider)`
   margin-top:20px;
   
   & > button{
      opacity:0;
      height:100%;
      width:5vw;
      z-index:1;

      &:hover{
         opacity:1;
         transition : opacity 1s ;
      }
   }
   ul li button {
      &:before{
         font-size:10px;
         color:rgb(150,158,171);
      }
   }
   li.slick-active button:before{
      color :white;
   }
   .slick-list{
      overflow:initial;
      margin:50px;
   }
`
const Wrap=styled.div`
   border-radius: 4px;
   cursor:pointer;
   position: relative;
   margin-bottom: 10px ;
   a{
      cursor:pointer;
      position : relative;
      display: block;
      padding: 10px;
      box-shadow: rgb(0 0 0/96%) 0px 26px 30px -10px ,rgb(0 0 0/73%) 0px 16px 10px -10px;
      img{
         width:100%;
         height: 100%;
         border-radius:8px;
      }
      &:hover{
         border-radius:10px;
         padding:0px;
         border: 4px solid white;
         transition-duration:300ms;
         }
   }

   
`
export default ImageSlider