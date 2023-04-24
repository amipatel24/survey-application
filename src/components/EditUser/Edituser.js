import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationDataAction } from "../../redux/action/RegistrationUser/getRegistrationDataAction";
import EditUseForm from "./EditUseForm";
import EditUserValidate from "./EditUserValidation";
import "./Edituser.css";

function EditUser({ setShowEdit }) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [reviews, setReviews] = useState(false);
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state?.getRegistrationDataReducer);
  const editData = useSelector((state) => state?.editDataReducer);

  useEffect(() => {
    dispatch(getRegistrationDataAction());
  }, []);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    setImg(file);
    if (!file) {
      setReviews(true);
      setReviews("Please select image.");
      return false;
    }
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

  const { values, errors, handleChange, handleSubmit } = EditUseForm(EditUserValidate, img, uploadedImage, setShowEdit);

  return (
    <div className="Edituser">
      <div className="Edituser-container ">
        <div className="Edituser-details-container">
          <h4 className="Edituser-container-title">Edit user</h4>
          <hr />

          <div className="Edituser-image">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{ display: "none" }}
              className={`Edituser-input-field ${reviews && "Edituser-is-danger"}`}
            />
            <div
              className="Edituser-image-in"
              onClick={() => imageUploader.current.click()}
            >
              <img
                ref={uploadedImage}
                src={"http://localhost:4000/" + editData.image_src}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absoulte",
                }}
              />
              {reviews && <b className="Edituser-is-danger">{reviews}</b>}
            </div>
            <div className="Edituser-image-info">
              <p className="Edituser-image-title">Select display images to show</p>
              <p className="Edituser-image-text">
                Image should be of following formats only, .jpeg, .png, .pdf.<br />
                Maximum allowed image size is 300kb
              </p>
            </div>
          </div>

          <div className="Edituser-wrapper">
            <form id="contact-form" method="post" className="Edituser-form-group">

              <div className="Edituser-half-container">
                <div className="Edituser-half-field">
                  <label className="Edituser-label">First Name</label>
                  <br />
                  <input
                    autoComplete="off"
                    className={`Edituser-input-field ${errors.name && "Edituser-is-danger1"}`}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name || ""}
                    required
                  />
                  <br />
                  {errors.name && <b className="Edituser-is-danger">{errors.name}</b>}
                </div>

                <div className="Edituser-half-field">
                  <label className="Edituser-label">Last Name</label>
                  <br />
                  <input
                    autoComplete="off"
                    className={`Edituser-input-field-small ${errors.last_name && "Edituser-is-danger1"}`}
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    value={values.last_name || ""}
                    required
                  />
                  <br />
                  {errors.last_name && (<b className="Edituser-is-danger">{errors.last_name}</b>)}
                </div>
              </div>

              <label className="Edituser-label">Email Address</label>
              <br />
              <input
                autoComplete="off"
                className={`Edituser-input-field ${errors.email && "Edituser-is-danger1"}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
              {errors.email && <b className="Edituser-is-danger">{errors.email}</b>}

              <label className="Edituser-label">Phone Number</label>
              <br />
              <input
                autoComplete="off"
                className={`Edituser-input-field ${errors.phone && "Edituser-is-danger1"}`}
                type="text"
                name="phone"
                onChange={handleChange}
                value={values.phone || ""}
                required
              />
              {errors.phone && <b className="Edituser-is-danger">{errors.phone}</b>}

              <label className="Edituser-label">Designation</label>
              <br />
              <select
                className={`Edituser-select ${errors.role_id && "Edituser-is-danger1"}`}
                onChange={handleChange}
                value={values.role_id || ""}
                name="role_id"
              >
                <option value={3}>Worker</option>
                <option value={2}>Supervisor</option>
              </select>
              {errors.role_id && <b className="Edituser-is-danger">{errors.role_id}</b>}

              <label className="Edituser-label">Reporting to</label>
              <br />
              <select
                className={`Edituser-select ${errors.reporting_person_id && "Edituser-is-danger1"}`}
                onChange={handleChange}
                value={values.reporting_person_id || ""}
                name="reporting_person_id"
                disabled={values.role_id == 2 || !values.role_id}
              >
                {registrationData && registrationData?.users?.map((register, id) => {
                  if (register.role_id == 2 && values.role_id == 3) {
                    return (
                      <option value={register.id} key={id}>
                        {register.name}
                      </option>
                    );
                  }
                })}
              </select>
              {errors.reporting_person_id && <b className="Edituser-is-danger">{errors.reporting_person_id}</b>}

              <div className="Edituser-half-container">

                <div className="Edituser-half-field">
                  <label className="Edituser-label">Password</label><br />
                  <input
                    className={`Edituser-input-field ${errors.password && "Edituser-is-danger1"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  /><br />
                  {errors.password && (<b className="Edituser-is-danger">{errors.password}</b>)}
                </div>

                <div className="Edituser-half-field">
                  <label className="Edituser-label">Confirm Password</label><br />
                  <input
                    className={`Edituser-input-field-small ${errors.confirmPassword && "Edituser-is-danger1"
                      }`}
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword || ""}
                    required
                  /><br />
                  {errors.confirmPassword && (<b className="Edituser-is-danger">{errors.confirmPassword}</b>)}
                </div>

              </div>
            </form>
          </div>

          <br /><hr /><br />
          <div className="Edituser-button">
            <button id="cancelBtn" className="Edituser-cancel-btn" onClick={() => setShowEdit(false)}> Cancel </button>
            <button type="submit" onClick={() => { handleSubmit(); }} className="Edituser-create-btn"> Create </button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default EditUser;

