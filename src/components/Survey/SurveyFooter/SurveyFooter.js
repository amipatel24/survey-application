import React from "react";
import "./SurveyFooter.css";
import { useDispatch } from "react-redux";
import { postSurveyDataAction } from "../../../redux/action/SurveyActions/surveyAction";
import "../../../assets/global.css";
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { surveydata } = props;
  const uuid = localStorage.getItem("UUID");

  let disableButton = false;
  let disableButtonData = surveydata?.map((e) => e.comment);
  disableButtonData?.map((item) => (item.length > 0 ? " " : disableButton = true));

  const Submit = () => {    
     dispatch(postSurveyDataAction({ uuid, surveydata }));
     alert("Survey Data is Submitted Successfully");
     localStorage.clear();
     navigate("/");
  };

  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-btn-wrapper">
          <button
            className="footer-btn" onClick={Submit} disabled={disableButton}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;