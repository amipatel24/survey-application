import {
  GET_SURVEY_DATA_ERROR,
  GET_SURVEY_DATA_SUCCESS,
  POST_SURVEY_DATA_SUCCESS,
  POST_SURVEY_DATA_ERROR,
  FETCH_SURVEY_DATA,
  FETCH_SURVEY_DATA_ERROR,
} from "../../actionType/actionType";
import axios from "axios";

export const fetchSurveyDataAction = () => async(dispatch) => {
  try {
    let UUID = localStorage.getItem('UUID')
    const res = await axios.get(`http://localhost:4000/survey/data/${UUID}`);
    dispatch({
      type: FETCH_SURVEY_DATA,
      payload: { surveyData: res.data },
    });
  } catch (error) {
    dispatch({
      type: FETCH_SURVEY_DATA_ERROR,
      payload: { surveyData: error },
    });
  }
};

//SurveyData
export const getSurveyDataAction = (id) => async (dispatch) => {
  try {
    let UUID = localStorage.getItem('UUID')
    const res = await axios.get(`http://localhost:4000/survey/data/${UUID}`);
    dispatch({
      type: GET_SURVEY_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: GET_SURVEY_DATA_ERROR,
      payload: { data: error },
    });
  }
};


//SurveyDataPost
export const postSurveyDataAction = (data) => async(dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/survey/submission/`,
      data
      );
    dispatch({
      type: POST_SURVEY_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_SURVEY_DATA_ERROR,
      payload: { data: error },
    });
  }
};
