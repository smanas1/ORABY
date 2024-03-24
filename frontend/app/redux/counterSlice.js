import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0,
    },
    reducers:{
        incriment:(state)=> {
            state.count = state.count + 1
        },
        decriment:(state)=> {
            state.count = state.count -1
        },
    }
})

export const {incriment,decriment} = counterSlice.actions
export default counterSlice.reducer