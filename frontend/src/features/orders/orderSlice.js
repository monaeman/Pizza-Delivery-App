import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        reset: (state) => initialState
    }
})

export const {reset} = orderSlice.actions
export default orderSlice.reducer