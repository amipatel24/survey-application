
import {
    DELETE_USER_DATA_REQUEST , 
    DELETE_USER_DATA_SUCCESS,
    DELETE_USER_DATA_ERROR
  } from "../../actionType/actionType";

export const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_USER_DATA_REQUEST:
        return { ...action.payload };
      case DELETE_USER_DATA_SUCCESS:
        return { ...action.payload };
      case DELETE_USER_DATA_ERROR:
        return { ...action.payload };
      default:
        return state;
    }
  };