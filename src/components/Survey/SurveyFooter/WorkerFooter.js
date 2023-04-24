import React from "react";
import "./SurveyFooter.css";
import { useDispatch } from "react-redux";
import { postWorkerDataAction } from "../../../redux/action/SurveyActions/workerSurveyAction";
import "../../../assets/global.css";
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { surveydata } = props;

  const uuid = localStorage.getItem('UUID');
  const wuuid = localStorage.getItem("workerUUID");

  let s1 = false;
  let s2 = surveydata?.map((e) => e.comment);
  s2?.map((item) => (item.length > 0 ? " " : s1 = true));

  const Submit = () => {    
     dispatch(postWorkerDataAction({ uuid, wuuid, surveydata }));
     alert("Survey Data is Submitted Successfully");
     navigate("/");
  };

  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-btn-wrapper">
          <button
            className="footer-btn" onClick={Submit} disabled={s1}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;