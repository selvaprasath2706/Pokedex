
let initialState={
    pokemonList: [],
    isLoading: false,
    error: null
}

export default pokemonReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOAD_POKEMONLIST_START':
            return Object.assign({}, state, { isLoading: true })
        case 'LOAD_POKEMONLIST_SUCCESS':
            return Object.assign({},state,{pokemonList:action.payload,isLoading:false})
        case 'LOAD_POKEMONLIST_FAILURE':
            console.log(action.payload)
            return Object.assign({},state,{error:action.payload,isLoading:false})
            default:
            return state
        }

}



// export default pokemonReducer


// export default pokemonReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case 'LOAD_POKEMONLIST_START':
//             return Object.assign({}, state, { isLoading: true })
//         case 'LOAD_POKEMONLIST_SUCCESS':
//             return Object.assign({},state,{pokemonList:action.payload,isLoading:false})
//         case 'LOAD_POKEMONLIST_FAILURE':
//             return Object.assign({},state,{error:action.payload,isLoading:false})
//             default:
//             return state
//         }

// }