import axios from "axios";
import {LOGIN_USER_SUCCESS ,LOGIN_USER_ERROR } from '../../actionType/actionType';

//login
export const loginUserAction = (details) => async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:4000/login", details);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { data: res.data },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { data: error },
      });
    }
  };