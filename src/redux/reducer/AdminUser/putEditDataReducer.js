import { POST_EDIT_USER_DATA_SUCCESS,
    POST_EDIT_USER_DATA_REQUEST,
    POST_EDIT_USER_DATA_ERROR}  from '../../actionType/actionType';
    
export const putUserEditDataReducer = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
      case POST_EDIT_USER_DATA_REQUEST:
        return { ...action.payload };
      case POST_EDIT_USER_DATA_SUCCESS:
        return { ...action.payload };
      case POST_EDIT_USER_DATA_ERROR:
        return { ...action.payload };
      default:
        return state;
    }
  };