export default (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
        isLoggedIn: false
      };
    case "SET_ROUTE":
      return {
        ...state,
        route: action.payload
      };
    case "SET_COORDS":
      return {
        ...state,
        coordinates: action.payload
      };
    case "SET_TOPIC":
      return {
        ...state,
        topic: action.payload
      };
    case "SET_POSTID":
      return {
        ...state,
        postID: action.payload
      };
    default:
      return state;
  }
};
