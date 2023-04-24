import React from "react";
import SurveyPage from '../components/Survey/surveyApp';
import SurveyHeader from '../components/Survey/SurveytHeader/SurveyHeader';
//import SurveyFooter from '../components/allSurvey/SurveyFooter/SurveyFooter';

function Home(){
    return(
        <div>
            <SurveyHeader />
            <SurveyPage />
         
        </div>
    )
}

export default Home;