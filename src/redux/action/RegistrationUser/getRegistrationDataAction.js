import axios from 'axios';
import {
    GET_REGISTRATION_DATA_SUCCESS,
    GET_REGISTRATION_DATA_ERROR
    }  from '../../actionType/actionType';
  
//Registration get data
export const getRegistrationDataAction = () => async(dispatch) => {
    try {
      const res = await axios.get(`http://localhost:4000/users`);
      dispatch({
        type: GET_REGISTRATION_DATA_SUCCESS,
        payload: { data: res.data },
      });
     // console.log(res.data);
    } catch (error) {
      dispatch({
        type: GET_REGISTRATION_DATA_ERROR,
        payload: { data: error },
      });
    }
  };