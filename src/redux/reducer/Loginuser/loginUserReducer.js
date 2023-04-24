import { LOGIN_USER_ERROR , LOGIN_USER_REQUEST , LOGIN_USER_SUCCESS } from "../../actionType/actionType";

//login
export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return { ...action.payload };
      case LOGIN_USER_SUCCESS:
        return { ...action.payload };
      case LOGIN_USER_ERROR:
        return { ...action.payload };
      default:
        return state;
    }
  };