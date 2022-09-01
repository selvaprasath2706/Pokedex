import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonList = createAsyncThunk("pokemon/productList", async (api) => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    return data.data
})

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemonList: [],
        error: null,
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [getPokemonList.pending]: (state, action) => {
            state.isLoading = true
        },
        [getPokemonList.fulfilled]: (state, action) => {
            // console.log(action.payload)
            if (action?.payload?.results?.length > 1)
                state.pokemonList = action.payload.results
            // state.pokemonList.push(action.payload.results)
            else
                state.error = "Received a differrent data type"
            state.isLoading = false
        },
        [getPokemonList.rejected]: (state, action) => {
            // console.log("else",action)
            state.isLoading = false
            state.error = action.payload.message
        }
    }
})

export default pokemonSlice.reducer