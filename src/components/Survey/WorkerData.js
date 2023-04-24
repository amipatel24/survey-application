import React, { useState, useEffect } from "react";
import WorkerFooter from "./SurveyFooter/WorkerFooter";
import Header from "./SurveytHeader/SurveyHeader";
import "./surveyApp.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkerDataAction, postWorkerDataAction } from "../../redux/action/SurveyActions/workerSurveyAction";
import { useParams } from "react-router-dom";
import { getRegistrationDataAction } from '../../redux/action/RegistrationUser/getRegistrationDataAction';
import WorkerSurvey from "./WorkerSurvey";

const WorkerDetails = () => {
  const dispatch = useDispatch();
  const [tabActive, setTabActive] = useState(0);
  const { workeruuid } = useParams();
  const wuuid = workeruuid;
  //console.log(workeruuid);

  const data = useSelector((state) => state?.fetchWorkerDataReducer);
  //  console.log("fetch reducer=========",data);
  const allRegisterUserData = useSelector((state) => state?.getRegistrationDataReducer?.users);
  //console.log(allRegisterUserData);
  let workerName = allRegisterUserData && allRegisterUserData?.find((e) => e.uuid == workeruuid);
  // console.log(workerName);

  useEffect(() => {
    dispatch(fetchWorkerDataAction());
    dispatch(getRegistrationDataAction());
  }, []);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d = new Date();
  var monthName = months[d.getMonth()];

  const setTab = (tabId) => {
    setTabActive(tabId + 1);
  };
  let surveydata;
  const setServeyAnswers = (surveyInfo) => {
    // console.log("setServeyAnswers.......", surveyInfo);

    let mySurveyIndex = data?.surveyData?.surveydata.findIndex(
      (survey) => survey.survey_id === surveyInfo.survey_id
    );
    let survey = data?.surveyData?.surveydata[mySurveyIndex];
    survey.comment = surveyInfo.comment;
    surveyInfo.question.map((question) => {
      let questionIndex = survey.question.findIndex(
        (sQuestion) => sQuestion.qid === question.qid
      );
      survey.question[questionIndex].ans = question.ans;
    });
    surveydata = data?.surveyData?.surveydata
  };

  let uuid = localStorage.getItem("UUID");

  const submitSurvey = () => {
    dispatch(
      postWorkerDataAction({
        uuid,
        wuuid,
        surveydata
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="date">
          <h2>
            {monthName} {new Date().getFullYear()}
          </h2>
        </div>
        <h4>Worker Name: {workerName?.name}</h4>

        {data &&
          data.surveyData &&
          data.surveyData.surveydata &&
          data.surveyData.surveydata.map((surveyData, id) => {
            //  console.log("all data=======" , surveyData.question[id].ans);
            return (
              <div key={id} className="survey-wrapper">
                <WorkerSurvey
                  tabId={id}
                  title={surveyData.title}
                  questions={surveyData.question}
                  setTab={(id) => setTab(id)}
                  isActive={tabActive === id}
                  setAnswers={(surveyInfo) => setServeyAnswers(surveyInfo)}
                  submitSurvey={() => submitSurvey()}
                  newcomments={surveyData.comment}
                />
              </div>
            );
          })}
      </div>
      <WorkerFooter surveydata={data?.surveyData?.surveydata} />
    </div>
  );
};
export default WorkerDetails;
