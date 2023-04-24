import { REGISTRATION_USER_REQUEST ,
  REGISTRATION_USER_SUCCESS , 
  REGISTRATION_USER_ERROR }  from '../../actionType/actionType';

export const RegistrationUserReducer = (state = {}, action) => {
    switch (action.type) {
      case REGISTRATION_USER_REQUEST:
        return { ...action.payload };
      case REGISTRATION_USER_SUCCESS:
        return { ...action.payload };
      case REGISTRATION_USER_ERROR:
        return { ...action.payload };
      default:
        return state;
    }
  };