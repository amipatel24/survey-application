import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "./Registration.css";
import RegistrationUseForm from "./RegistrationUseForm";
import RegistratioValidate from "./RegistrationFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationDataAction } from '../../redux/action/RegistrationUser/getRegistrationDataAction';

function Registration() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [reviews, setReviews] = useState(false);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const allRegisterUserData = useSelector((state) => state?.getRegistrationDataReducer?.users);
 // console.log(allRegisterUserData);

  useEffect(() => {
    dispatch(getRegistrationDataAction());
  }, []);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    setImage(file);

    if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
      setReviews("Select valid image type.");
      return false;
    }
    if (file.size > 307200) {
      setReviews("Select valid size of image.");
      return false;
    }
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setReviews(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageHandler = () => {
    if (!image) {
      setReviews("Please Select image.");
    }
  };

  const { values, errors, handleChange, handleSubmit } = RegistrationUseForm(RegistratioValidate, image, uploadedImage, setImage);

  return (
    <div>

      <ToastContainer autoClose={2000} />
      <div className="Registration-container">

        <div className="Register-subcontainer">
          <h4 className="Registration-container-heading">Registration</h4>
          <div className="Registration-form-wrapper">
            <form id="contact-form" method="post" className="Registration-form-group">

              <label className="Registration-form-label">First Name</label>
              <input
                autoComplete="off"
                className={`Registration-input-field ${errors.name && "Registration-danger-field"}`}
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name || ""}
                required
              />
              {errors.name && (<b className="Registration-danger">{errors.name}</b>)}

              <label className="Registration-form-label">Last Name</label>
              <input
                autoComplete="off"
                className={`Registration-input-field ${errors.last_name && "Registration-danger-field"}`}
                type="text"
                name="last_name"
                onChange={handleChange}
                value={values.last_name || ""}
                required
              />
              {errors.last_name && (<b className="Registration-danger">{errors.last_name}</b>)}

              <label className="Registration-form-label">Email Address</label>
              <input
                autoComplete="off"
                className={`Registration-input-field ${errors.email && "Registration-danger-field"}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
              {errors.email && <b className="Registration-danger">{errors.email}</b>}

              <label className="Registration-form-label">Phone Number</label>
              <input
                autoComplete="off"
                className={`Registration-input-field ${errors.phone && "Registration-danger-field"}`}
                type="text"
                name="phone"
                onChange={handleChange}
                value={values.phone || ""}
                required
              />
              {errors.phone && <b className="Registration-danger">{errors.phone}</b>}

              <label className="Registration-form-label">Designation</label>
              <select
                className={`Registration-select-input-field ${errors.role_id && "Registration-danger-field"}`}
                onChange={handleChange}
                value={values.role_id || ""}
                name='role_id'
              >
                <option>Select from dropdown</option>
                <option value={3} >Worker</option>
                <option value={2}>Supervisor</option>
              </select>
              {errors.role_id && <b className="Registration-danger">{errors.role_id}</b>}

              <label className="Registration-form-label">Reporting to</label>
              <select
                className={`Registration-select-input-field ${errors.reporting_person_id && "Registration-danger-field"}`}
                onChange={handleChange}
                value={values.reporting_person_id || ""}
                name='reporting_person_id'
                disabled={values.role_id == 2 || !values.role_id }
              >
                <option>Select from dropdown</option>
                {
                  allRegisterUserData && allRegisterUserData?.length && allRegisterUserData?.map((register, id) => {
                    if (register.role_id == 2 && values.role_id == 3) {
                      return (
                        <>
                          <option value={register.id} key={id}  >{register.name}</option>
                        </>
                      );
                    }
                  })
                }
              </select>
              {errors.reporting_person_id && <b className="Registration-danger">{errors.reporting_person_id}</b>}

              <label className="Registration-form-label">Password</label>
              <input
                className={`Registration-input-field ${errors.password && "Registration-danger-field"}`}
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password || ""}
                required
              />
              {errors.password && (<b className="Registration-danger">{errors.password}</b>)}

              <label className="Registration-form-label">Confirm Password</label>
              <input
                className={`Registration-input-field ${errors.confirmPassword && "Registration-danger-field"}`}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword || ""}
                required
              />
              {errors.confirmPassword && (<b className="Registration-danger">{errors.confirmPassword}</b>)}

            </form>
          </div>

          <div className="Registration-image-container">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => { handleImageUpload(e); }}
              ref={imageUploader}
              style={{ display: "none" }}
              className={`Registration-input-field ${reviews && "Registration-danger-field"}`}
              value={values.file || ""}
            />

            <div className="Registration-image-wrapper" onClick={() => imageUploader.current.click()} >
              <img
                ref={uploadedImage}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absoulte",
                }}
              />
              {reviews && <b className="Registration-danger-image">{reviews}</b>}
            </div>

            <div className="Registration-image-info">
              <p className="Registration-image-info-title">Select display images to show</p>
              <p className="Registration-image-info-text">
                Image should be of following formats only, .jpeg, .png, .pdf. <br />
                Maximum allowed image size is 300kb
              </p>
            </div>
          </div>

          <div className="Registration-signup-button">
            <button type="submit" onClick={() => { handleSubmit(); imageHandler(); }} className="Registration-button" >  SignUp </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
