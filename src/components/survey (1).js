import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurveyDataAction } from "../../redux/action/SurveyActions/surveyAction";
import "./survey.css";
import "../../assets/global.css";
import { answers, SurveyData } from "./surveydata";

const Survey = (props) => {
  const { title, questions, setTab, tabId, isActive, setAnswers, submitSurvey, newcomments } = props;
  const [ansData, setAnsData] = useState([]);
  const [changeBtnAndBgColor, setChangeBtnAndBgColor] = useState(false);
  const [surveyId1, setSurveyId1] = useState(tabId + 1);
  const [comment, setComment] = useState();
  const dispatch = useDispatch();
  const login = useSelector((state) => state?.loginUserReducer?.data);
  const data = useSelector((state) => state?.fetchSurveyDataReducer);
  //console.log("api data=========", data);
  // console.log(questions);
  //console.log(SurveyData);

  const surveyData = {
    survey_id: surveyId1,
    question: ansData,
    comment: comment,
  };

  useEffect(() => {
    dispatch(getSurveyDataAction(login?.uuid));
  }, [login]);

  const handleChangeText = (e) => {
    setComment(e.target.value);
  };

  const saveButton = () => {
    setChangeBtnAndBgColor(!changeBtnAndBgColor);
    setSurveyId1(surveyId1);
    setTab(tabId);
    setAnswers(surveyData);
    submitSurvey();
  };

  const setAnsId = (qId, qAns) => {
    let existingAns = ansData.filter((ans) => ans.qid === qId);
    if (existingAns.length > 0) {
      existingAns.forEach((f) => {
        let ansDataInd = ansData.findIndex((e) => e.qid === f.qid);
        ansData[ansDataInd].ans = qAns + 1;
      });
      setAnsData([...ansData]);
    } else {
      ansData.length === 0
        ? setAnsData([{ qid: qId, ans: qAns + 1 }])
        : setAnsData((ansData) => [...ansData, { qid: qId, ans: qAns + 1 }]);
    }
  };

  return (
    <div>

      <div className="survey-main">
        <div>
          <div
            className="survey-container"
            style={
              changeBtnAndBgColor
                ? { backgroundColor: "#11963E" }
                : { backgroundColor: "#1A1A1A" }
            }
          >
            <div className="survey-container-title">
              <p className="survey-title1">
                <span>✔</span>
              </p>
              <p className="survey-title2">{title}</p>
            </div>
            <div className="survey-button-main">
              {changeBtnAndBgColor ? (
                <button
                  className="survey-button-save_saved"
                  onClick={() => saveButton()}
                  disabled
                >
                  {" "}
                  <b>Saved</b>{" "}
                </button>
              ) : (
                <button
                  className="survey-button-save_saved"
                  disabled={ansData.length < 5 || !comment}
                  onClick={() => {
                    saveButton();
                  }}
                >
                  {" "}
                  <b>Save</b>{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isActive ? (

        <div className="radio-main">
          <div className="radio-question">
            {
              data && data.surveyData && data.surveyData.surveydata && data.surveyData.surveydata.map((apidata) => {
                // console.log('my api response',apidata.question);
                return (
                  apidata.question && apidata.question.map((getAns) => {
                    //   console.log(getAns.ans);
                  })
                )
              })
            }
            
            {questions.map((question, ansId) => {
              //console.log("ansdata", question);
              let isActive = ansData.filter((qa) => qa.qid === question.qid);
              // console.log("ansId======",isActive);
              //   console.log("question ans======",question);
              let btnActive;
              if (isActive.length > 0) {
                btnActive = ansId + 1 <= isActive[0].ans ? "active" : "";
              }

              return (
                <div key={ansId}>
                  <p className="s-questions">
                    {question.qid}. {question.question}
                  </p>

                  <div className="radio-border">
                    {answers.map((e, ansId) => {
                      //  console.log(ansId);
                      let isActive = ansData.filter(
                        (qa) => qa.qid === question.qid
                      );
                      let btnActive;
                      if (isActive.length > 0) {
                        btnActive =
                          ansId + 1 <= isActive[0].ans && "active";
                      }
                      else {
                        btnActive = ansId + 1 <= question.ans && "active";
                      }
                      return (
                        <div
                          key={ansId}
                          className={`radio ${ansId + 1 <= 4
                            ? `red`
                            : ansId + 1 > 4 && ansId + 1 <= 7
                              ? `orange`
                              : "green"
                            } ${btnActive}`}
                          name={question.qid}
                          onClick={() => setAnsId(question.qid, ansId)}
                          htmlFor="radio1"
                        >
                          <input
                            className="input"
                            id="radio1"
                            type="radio"
                            name={question.qid}
                            value={question.ans}
                          />
                          <b className="radio-text">{e.value}</b>
                        </div>

                      );
                    })}
                  </div>
                </div>
              );

            })}


          </div>
          <p className="s-questions">Your Review</p>
          <textarea onChange={handleChangeText} type="textarea" name="review" defaultValue={newcomments} />
        </div>
      ) : null}

    </div>
  );
};
export default Survey;