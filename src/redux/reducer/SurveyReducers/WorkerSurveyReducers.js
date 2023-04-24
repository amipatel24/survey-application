import {
  GET_WORKER_DATA_ERROR,
  GET_WORKER_DATA_REQUEST,
  GET_WORKER_DATA_SUCCESS,
  POST_WORKER_DATA_REQUEST,
  POST_WORKER_DATA_ERROR,
  POST_WORKER_DATA_SUCCESS,
  FETCH_WORKER_DATA_REQUEST,
  FETCH_WORKER_DATA,
  FETCH_WORKER_DATA_ERROR,
} from "../../actionType/actionType";

//WORKERData
export const getWorkerDataReducer = (state = {}, action) => {
  //   console.log("state data", state);
  switch (action.type) {
    case GET_WORKER_DATA_REQUEST:
      return { ...action.payload };
    case GET_WORKER_DATA_SUCCESS:
      return { ...action.payload };
    case GET_WORKER_DATA_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

//WORKERDataPost
export const postWorkerDataReducer = (state = {}, action) => {
  // console.log(action);
  switch (action.type) {
    case POST_WORKER_DATA_REQUEST:
      return { ...action.payload };
    case POST_WORKER_DATA_SUCCESS:
      return { ...action.payload };
    case POST_WORKER_DATA_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

export const fetchWorkerDataReducer = (state = {}, action) => {
  // console.log("action data", action);
  //  console.log("state data", state);
  switch (action.type) {
    case FETCH_WORKER_DATA_REQUEST:
      return { ...action.payload };
    case FETCH_WORKER_DATA:
      return { ...action.payload };
    case FETCH_WORKER_DATA_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};


