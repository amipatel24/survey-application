import { combineReducers } from "redux";
import { getSurveyDataReducer, postSurveyDataReducer, fetchSurveyDataReducer, } from "../reducer/SurveyReducers/SurveyReducer";
import { fetchWorkerDataReducer, postWorkerDataReducer, getWorkerDataReducer } from '../reducer/SurveyReducers/WorkerSurveyReducers'
import { putUserEditDataReducer } from "../reducer/AdminUser/putEditDataReducer";
import { editDataReducer } from "../reducer/AdminUser/EditUserDataReducer";
import { getRegistrationDataReducer } from "../reducer/RegistrationUser/getRegistrationDataReducer";
import { RegistrationUserReducer } from "../reducer/RegistrationUser/RegisterUserReducer";
import { loginUserReducer } from "../reducer/Loginuser/loginUserReducer";
import { deleteUserReducer } from "../reducer/AdminUser/deleteUserReducer";

const RootReducers = combineReducers({
    //login 
    loginUserReducer: loginUserReducer,
    //registration
    RegistrationUserReducer: RegistrationUserReducer,
    getRegistrationDataReducer: getRegistrationDataReducer,
    //survey
    getSurveyDataReducer: getSurveyDataReducer,
    postSurveyDataReducer: postSurveyDataReducer,
    fetchSurveyDataReducer: fetchSurveyDataReducer,
    // worker survey
    fetchWorkerDataReducer: fetchWorkerDataReducer,
    getWorkerDataReducer: getWorkerDataReducer,
    postWorkerDataReducer: postWorkerDataReducer,
    //admin
    editDataReducer: editDataReducer,
    putUserEditDataReducer: putUserEditDataReducer,
    deleteUserReducer: deleteUserReducer
});
export default RootReducers;
