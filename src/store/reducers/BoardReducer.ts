import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from './../../models/ClassBoard';


const initialState = {
    board: new Board(),
}

export const boardSlice = createSlice(
{
    name: 'board',
    initialState,
    reducers: {
        setBoard(state, action) {
            state.board = action.payload;
        }
        }
    
    },)
    
export default boardSlice.reducer;