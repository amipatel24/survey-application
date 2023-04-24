import React from 'react';
import { logo, user } from '../../../assets/Img/Img';
import './SurveyHeader.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  let loginUserName = localStorage.getItem("USERNAME");
  const image = localStorage.getItem('USERIMAGE');

  const logout = () => {
    navigate("/");
    localStorage.clear();
  }

  return (
    <div className='survey-header-container'>
      <div className='survey-header-wrapper'>
        <img className='survey-header-image' src={logo} alt="Hello" />
        <h1 >Survey</h1>
      </div>
      <div className='header-img'>
        <p className='header-user-name'>Hello,{loginUserName} </p>
        {
          image === 'null' ?
            (<img className="header-user-image" src={user} alt="" />) :
            (<img className="header-user-image" src={"http://localhost:4000/" + image} alt="" />)
        }
      </div>
      <button onClickCapture={logout} className="logout-button">
        Logout <FontAwesomeIcon icon={faRightToBracket} />
      </button>
    </div>
  )
}

export default Header;