import {
  GET_REGISTRATION_DATA_ERROR,
  GET_REGISTRATION_DATA_REQUEST,
  GET_REGISTRATION_DATA_SUCCESS
} from '../../actionType/actionType';

const instate = {
  toggle: false,
  users: [],
  error: false,
}

export const getRegistrationDataReducer = (state = instate, action) => {
  //console.log("<<action get data>>", action);
  // console.log("<<state get data>>", state);
  switch (action.type) {
    case GET_REGISTRATION_DATA_REQUEST:
      return {
        toggle: true
      };
    case GET_REGISTRATION_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload.data
      };
    case GET_REGISTRATION_DATA_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
