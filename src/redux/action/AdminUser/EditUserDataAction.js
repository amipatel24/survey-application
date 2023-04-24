import { Edit_USER_DATA}  from '../../actionType/actionType';

export const editUserData = (data)=>{
    return {
        type : Edit_USER_DATA,
        payload : data
    }
  }