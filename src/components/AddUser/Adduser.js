import React, { useState, useEffect } from "react";
import "./Adduser.css";
import AddUseForm from "./AddUseForm";
import AddUserValidate from "./AddUserFormValidation";
import { useSelector, useDispatch } from "react-redux";
import { getRegistrationDataAction } from '../../redux/action/RegistrationUser/getRegistrationDataAction';

function AddUser({ setShow }) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [reviews, setReviews] = useState(false);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

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
      setReviews(true);
      setReviews("Please select image.");
      return false;
    }
  }

  const { values, errors, handleChange, handleSubmit } = AddUseForm(AddUserValidate, image, uploadedImage, setImage);

  const registrationData = useSelector((state) => state?.getRegistrationDataReducer);
  // console.log(registrationData);
  
  useEffect(() => {
    dispatch(getRegistrationDataAction());
  }, []);

  return (
    <div className="Adduser">
      <div className="Adduser-container ">
        <div className="Adduser-details-container">
          <h4 className="Adduser-heading"><b>Add new user</b></h4>
          <hr />
          <div className="Add-user-form-wrapper">
            <form id="contact-form" method="post" className="Adduser-form-group">

              <div className="Adduer-half-field-container">

                <div className="Adduer-half-input-field">
                  <label className="Adduser-label-title">First Name</label>
                  <br />
                  <input
                    autoComplete="off"
                    className={`Adduser-input-field ${errors.name && "Adduser-danger"}`}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name || ""}
                    required
                  />
                  {errors.name && <b className="Adduser-error">{errors.name}</b>}
                </div>

                <div className="Adduer-half-input-field">
                  <label className="Adduser-label-title">Last Name</label>
                  <br />
                  <input
                    autoComplete="off"
                    className={`Adduser-input-field-small ${errors.last_name && "Adduser-danger"}`}
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    value={values.last_name || ""}
                    required
                  />
                  {errors.last_name && (<b className="Adduser-error">{errors.last_name}</b>)}
                </div>
              </div>

              <label className="Adduser-label-title">Email Address</label>
              <br />
              <input
                autoComplete="off"
                className={`Adduser-input-field-large ${errors.email && "Adduser-danger"}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
              {errors.email && <b className="Adduser-error">{errors.email}</b>}

              <label className="Adduser-label-title">Phone Number</label>
              <br />
              <input
                autoComplete="off"
                className={`Adduser-input-field-large ${errors.phone && "Adduser-danger"}`}
                type="text"
                name="phone"
                onChange={handleChange}
                value={values.phone || ""}
                required
              />
              {errors.phone && <b className="Adduser-error">{errors.phone}</b>}

              <label className="Adduser-label-title">Designation</label>
              <br />
              <div>
                <select
                  className={`Adduser-select ${errors.role_id && "Adduser-danger"}`}
                  onChange={handleChange}
                  value={values.role_id || ""}
                  name="role_id"
                >
                  <option>Select from dropdown</option>
                  <option value={3} >Worker</option>
                  <option value={2}>Supervisor</option>
                </select>
                {errors.role_id && <b className="Adduser-error">{errors.role_id}</b>}
              </div>

              <label className="Adduser-label-title">Reporting to</label>
              <br />
              <div className="select_option">
                <select
                  className={`Adduser-select ${errors.reporting_person_id && "Adduser-danger"}`}
                  onChange={handleChange}
                  value={values.reporting_person_id || ""}
                  name="reporting_person_id"
                  disabled={values.role_id == 2 || !values.role_id }
                >
                  <option>Select from dropdown</option>
                  {
                    registrationData &&
                    registrationData?.users &&
                    registrationData?.users?.map((register, id) => {
                      //   console.log(register);
                      // console.log(values.role_id);
                      //   console.log(register.role_id);
                      if (register.role_id == 2 && values.role_id == 3) {
                        return (
                          <>
                            <option value={register.id} key={id} >{register.name}</option>
                          </>
                        );
                      }
                    })
                  }
                </select>
                {errors.reporting_person_id && <b className="Adduser-error">{errors.reporting_person_id}</b>}

              </div>

              <div className="Adduer-half-field-container ">
                <div className="Adduer-half-input-field">
                  <label className="Adduser-label-title">Password</label>
                  <br />
                  <input
                    className={`Adduser-input-field ${errors.password && "Adduser-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <br />
                  {errors.password && (<b className="Adduser-error">{errors.password}</b>)}
                </div>

                <div className="Adduser-half-input-field">
                  <label className="Adduser-label-title">Confirm Password</label>
                  <br />
                  <input
                    className={`Adduser-input-field-small ${errors.confirmPassword && "Adduser-danger"}`}
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword || ""}
                    required
                  />
                  <br />
                  {errors.confirmPassword && (<b className="Adduser-error">{errors.confirmPassword}</b>)}
                </div>
              </div>

            </form>
          </div>
        </div>

        <div className="Adduser-image">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{ display: "none", }}
            className={`Adduser-input-field ${reviews && "Adduser-danger"}`}
          />

          <div
            className="Adduser-image-in"
            onClick={() => imageUploader.current.click()}
          >
            <img
              ref={uploadedImage}
              value
              style={{
                width: "100%",
                height: "100%",
                position: "absoulte",
              }}
            />
            {reviews && <b className="Adduser-error">{reviews}</b>}
          </div>

          <div className="Adduser-image-info">
            <p className="Adduser-image-title">Select display images to show</p>
            <p className="Adduser-image-text">
              Image should be of following formats only,
              .jpeg, .png, .pdf.<br />
              Maximum allowed image size is 300kb
            </p>
          </div>
        </div>
        <br />

        <div className="Adduser-button">
          <button id="cancelBtn" className="Adduser-cancel-button" onClick={() => setShow(false)}> Cancel</button>
          <button type="submit" onClick={() => { handleSubmit(); imageHandler(); }} className="Adduser-Create-button">Create</button>
        </div>

      </div>
    </div>
  );
}

export default AddUser;