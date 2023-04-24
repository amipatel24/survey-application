import axios from "axios";

import {
    DELETE_USER_DATA_SUCCESS,
    DELETE_USER_DATA_ERROR
  } from "../../actionType/actionType";


  export const deleteUserAction = (id, data) => async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:4000/delete/${id}`, data);
      dispatch({
        type: DELETE_USER_DATA_SUCCESS,
        payload: { data: res.data },
      });
    } catch (error) {
      dispatch({
        type: DELETE_USER_DATA_ERROR,
        payload: { data: error },
      });
    }  };