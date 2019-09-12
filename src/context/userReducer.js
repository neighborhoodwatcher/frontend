export default (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        case "SET_COORDS":
            return {
                ...state,
                coordinates: action.payload
            }
        default:
            return state
    }
}