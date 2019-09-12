export default (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: {},
                isLoggedIn: false
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