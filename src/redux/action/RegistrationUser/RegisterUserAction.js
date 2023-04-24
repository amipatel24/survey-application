import axios from "axios";
import { REGISTRATION_USER_SUCCESS, REGISTRATION_USER_ERROR } from "../../actionType/actionType";

//Registration post data
export const RegistrationUserAction = (details) => async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:4000/register", details);
      dispatch({
        type: REGISTRATION_USER_SUCCESS,
        payload: { data: res.data },
      });
    } catch (error) {
      dispatch({
        type: REGISTRATION_USER_ERROR,
        payload: { data: error },
      });
    }
  };
  