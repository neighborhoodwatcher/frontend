export default (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        default:
            return state
    }
}