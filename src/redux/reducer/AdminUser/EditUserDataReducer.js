import { Edit_USER_DATA}  from '../../actionType/actionType';

export const editDataReducer = (state = {}, action) => {
    switch (action.type) {
      case Edit_USER_DATA:
        return {...action.payload};
      default:
        return state;
    }
  };