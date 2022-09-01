import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonData = createAsyncThunk("pokemonData/productListData", async (api) => {
    const data = await axios.get(api);
    return data.data
})

const pokemonDataSlice = createSlice({
    name: "pokemonData",
    initialState: {
        pokemonData: {},
        error: null,
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [getPokemonData.pending]: (state, action) => {
            state.isLoading = true
        },
        [getPokemonData.fulfilled]: (state, action) => {
            state.pokemonData = action.payload
            state.isLoading = false
        },
        [getPokemonData.rejected]: (state, action) => {
            console.log("err", action.payload)
            state.isLoading = false
            state.error = action.payload.message
        }
    }
})

export default pokemonDataSlice.reducer