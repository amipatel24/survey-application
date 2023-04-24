import React, { useState, useEffect } from "react";
import Survey from "./survey";
import Footer from "./SurveyFooter/SurveyFooter";
import "./surveyApp.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSurveyDataAction,
  postSurveyDataAction,
} from "../../redux/action/SurveyActions/surveyAction";
import { getRegistrationDataAction } from "../../redux/action/RegistrationUser/getRegistrationDataAction";
import { useNavigate } from "react-router-dom";
import { answers, SurveyData } from "./surveydata";

const SurveyApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let uuid = localStorage.getItem("UUID");

  const [tabActive, setTabActive] = useState(0);
  // const [values, setValues] = useState();

  console.log("static data", SurveyData);

  const data = useSelector((state) => state?.fetchSurveyDataReducer);
  console.log("api data=========", data);
  let LoginRoleid = localStorage.getItem("ROLLID");

  useEffect(() => {
    dispatch(fetchSurveyDataAction());
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
  // console.log(SurveyData);
  const setServeyAnswers = (surveyInfo) => {
    // console.log("setServeyAnswers.......", surveyInfo);

    let mySurveyIndex = SurveyData?.surveyData?.surveydata.findIndex(
      (survey) => survey.survey_id === surveyInfo.survey_id
    );
    // console.log("my index",mySurveyIndex);

    let survey = SurveyData?.surveyData?.surveydata[mySurveyIndex];
    // console.log('surveyindex data',surveyInfo.comment);
    survey.comment = surveyInfo.comment;
    surveyInfo.question.map((question) => {
      let questionIndex = survey.question.findIndex(
        (sQuestion) => sQuestion.qid === question.qid
      );

      // console.log("questionindex",questionIndex);
      // return(
      // data.surveyData && data.surveyData && data.surveyData.surveydata && data.surveyData.surveydata.map((apidata)=>{
      //   apidata.question && apidata.question.map((e)=>{
      //   //  console.log(e.ans);
      //     return(
      //     survey.question[questionIndex].ans = e.ans
      //     )
      //   })
      // })
      // )

      //  console.log(survey.question[questionIndex].ans);
      survey.question[questionIndex].ans = question.ans;
      // console.log(question.ans);
    });
    surveydata = SurveyData?.surveyData?.surveydata;
  };

  //  console.log("api survey data", surveydata);

  const submitSurvey = () => {
    dispatch(
      postSurveyDataAction({
        uuid,
        surveydata,
      })
    );
  };

  const handleChange = (event) => {
    let workeruuid = event.target.value;
    //  console.log(workerUuid);
    navigate(`/Survey${workeruuid}`);
    localStorage.setItem("workerUUID", workeruuid);
  };

  let users = JSON.parse(localStorage.getItem("WorkerData") || "[]");
  let userdata = users && users[0];

  // console.log("user",userdata);

  return (
    <div>
      <div className="container">
        <div className="survey-heading">
          <div className="survey-date">
            <h2>
              {monthName} {new Date().getFullYear()}
            </h2>
          </div>
          <div className="Dropdown">
            {LoginRoleid == 2 && (
              <select
                className="worker-select"
                onChange={handleChange}
                //  name="workerdata"
                //   value={values.uuid}
              >
                <option>Select from Worker</option>
                {userdata.map((e, id) => {
                  return (
                    <option value={e.id} key={id}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
        </div>
        {data &&
          data.surveyData &&
          data.surveyData.surveydata &&
          data.surveyData.surveydata.map((surveyData, id) => {
            // console.log("all data=======", surveyData);
            surveyData &&
              surveyData.question &&
              surveyData.question.map((e) => {
                // console.log(e.ans);
                let getanswer = e.ans;
              });
            // return (
            //   <div key={id} className="survey-wrapper">
            //     <Survey
            //       tabId={id}
            //       title={surveyData.title}
            //       questions={surveyData.question}
            //       setTab={(id) => setTab(id)}
            //       isActive={tabActive === id}
            //       setAnswers={(surveyInfo) => setServeyAnswers(surveyInfo)}
            //       submitSurvey={() => submitSurvey()}
            //       newcomments={surveyData.comment}
            //     />
            //   </div>
            // );
          })}
        {/* static data map */}

        {SurveyData &&
          SurveyData.surveyData &&
          SurveyData.surveyData.surveydata &&
          SurveyData.surveyData.surveydata.map((surveyData, id) => {
            // console.log("static data" ,surveyData );
            return (
              <div key={id} className="survey-wrapper">
                <Survey
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
      <Footer surveydata={SurveyData?.surveyData?.surveydata} />
    </div>
  );
};
export default SurveyApp;
