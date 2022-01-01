import { createSlice } from "@reduxjs/toolkit";
const initialState={
   recommened:null,
   newInDisney:null,
   originals:null,
   trindingInDisney:null
}
const movieSlice= createSlice({
   name:'movie',
   initialState,
   reducers:{
      setMovies: (state,action)=>{
         state.recommened=action.payload.recommened
         state.newInDisney=action.payload.newInDisney
         state.trindingInDisney=action.payload.trindingInDisney
         state.originals=action.payload.originals
      }
   }
})
export const {setMovies}=movieSlice.actions
export const selectRecommend=state=>state.movie.recommened
export const selectTrinding=state=>state.movie.trindingInDisney
export const selectNewInDisney=state=>state.movie.newInDisney
export const selectOriginals=state=>state.movie.originals
export default movieSlice.reducer