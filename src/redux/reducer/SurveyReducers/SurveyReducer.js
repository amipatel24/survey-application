import {
  GET_SURVEY_DATA_ERROR,
  GET_SURVEY_DATA_REQUEST,
  GET_SURVEY_DATA_SUCCESS,
  POST_SURVEY_DATA_REQUEST,
  POST_SURVEY_DATA_ERROR,
  POST_SURVEY_DATA_SUCCESS,
  FETCH_SURVEY_DATA_REQUEST,
  FETCH_SURVEY_DATA,
  FETCH_SURVEY_DATA_ERROR,
} from "../../actionType/actionType";

//SurveyData
export const getSurveyDataReducer = (state = {}, action) => {
  //   console.log("state data", state);
  switch (action.type) {
    case GET_SURVEY_DATA_REQUEST:
      return { ...action.payload };
    case GET_SURVEY_DATA_SUCCESS:
      return { ...action.payload };
    case GET_SURVEY_DATA_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

//SurveyDataPost
export const postSurveyDataReducer = (state = {}, action) => {
  // console.log(action);
  switch (action.type) {
    case POST_SURVEY_DATA_REQUEST:
      return { ...action.payload };
    case POST_SURVEY_DATA_SUCCESS:
      return { ...action.payload };
    case POST_SURVEY_DATA_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

export const fetchSurveyDataReducer = (state = {}, action) => {
  // console.log("action data", action);
  //  console.log("state data", state);
  switch (action.type) {
    case FETCH_SURVEY_DATA_REQUEST:
      return { ...action.payload };
    case FETCH_SURVEY_DATA:
      return { ...action.payload };
    case FETCH_SURVEY_DATA_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};


