let initialState = {
    pokemonData: {},
    isLoading: false,
    error: null
}
export default pokemonDataReduder = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_POKEMONDATA_START':
            return Object.assign({}, state, { isLoading: true })
        case 'LOAD_POKEMONDATA_SUCCESS':
            return Object.assign({}, state, { pokemonData: action.payload, isLoading: false })
        case 'LOAD_POKEMONDATA_FAILURE':
            return Object.assign({}, state, { error: action.payload, isLoading: false })
        default:
            return state
    }

}