import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "../actionType/actionType";

const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
        case SIGNUP_SUCCESS: 
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  