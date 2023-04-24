import axios from 'axios';
import { POST_EDIT_USER_DATA_SUCCESS,
    POST_EDIT_USER_DATA_ERROR}  from '../../actionType/actionType';

 export const putEditUserData = (id, data) => async (dispatch) => {
        try {
          const res = await axios.put( `http://localhost:4000/edit/${id}`,data);
          dispatch({
            type: POST_EDIT_USER_DATA_SUCCESS,
            payload: { data: res.data },
          });
        } catch (error) {
          dispatch({
            type: POST_EDIT_USER_DATA_ERROR,
            payload: { data: error },
          });
        }
    };