// import GET_POKEMON_LIST from "../constants/index"
import axios from "axios"
export const loadPokemon = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOAD_POKEMONLIST_START' })
        axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
            // console.log(typeof(response.data.results[0]),response.data.results.length)

            // console.log(response.data.results.map((val,index)=>({...val,index:index+1})))
            if (response?.data?.results?.length > 1)
                dispatch({ type: 'LOAD_POKEMONLIST_SUCCESS', payload: response.data.results })
            else
                dispatch({ type: 'LOAD_POKEMONLIST_FAILURE', payload: "Not the expected datatype" })
        }).catch((err) => {
            // console.log("err at cta", err.message, err)
            dispatch({ type: 'LOAD_POKEMONLIST_FAILURE', payload: err.message })
        })
    }
}

export const loadPokemonData = (apidata) => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOAD_POKEMONDATA_START' })
        axios.get(apidata).then((response) => {
            // console.log("POKEMON DATA",response.data)
            if (response.data)
                dispatch({ type: 'LOAD_POKEMONDATA_SUCCESS', payload: response.data })
            else
                dispatch({ type: 'LOAD_POKEMONLIST_FAILURE', payload: "Data Unavailable" })
        }).catch((err) => {
            console.log(err)
            dispatch({ type: 'LOAD_POKEMONDATA_FAILURE', payload: err.message })
        })
    }
}
