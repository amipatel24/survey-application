import React, { useEffect } from 'react';
import { logo } from '../../../assets/Img/Img';
import './AdminHeader.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const RegisterData = useSelector((state) => state?.RegistrationUserReducer?.data);
  const editData = useSelector((state) => state?.putUserEditDataReducer?.data);

  useEffect(() => {
    if (RegisterData?.status === "success") {
      toast.success('User Add Successfully');
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }, [RegisterData])

  useEffect(() => {
    if (editData?.status === "success") {
      toast.success('User Edited Successfully');
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }, [editData])

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className='admin-header-container'>
      <div className='admin-header-main-wrapper'>
        <img className='admin-header-image' src={logo} alt="Hello" />
        <h1>Survey</h1>
      </div>
      <button onClickCapture={logout} className="admin-logout-button">
        Logout <FontAwesomeIcon icon={faRightToBracket} />
      </button>
    </div>
  )
}
export default Header;
