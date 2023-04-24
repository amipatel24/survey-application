import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegistrationUserAction } from "../../redux/action/RegistrationUser/RegisterUserAction";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const RegistrationUseForm = (RegistratioValidate, image_src, uploadedImage, setImage) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validateData, setValidatedata] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = new FormData();
  const RegisterData = useSelector((state) => state?.RegistrationUserReducer?.data);
  const allUserData = useSelector((state) => state?.getRegistrationDataReducer?.users);

  let emailValidate = allUserData && allUserData.filter((e) => e.email == values.email);
  let validEmail = emailValidate?.length;
  //  console.log(emailValidate);

  useEffect(() => {
    if (RegisterData?.status === "success") {
      navigate("/");
    }
  }, [RegisterData])

  useEffect(() => {
    if (validateData) {
      setErrors(RegistratioValidate(values))
    }
  }, [values])

  const handleSubmit = (event) => {
    setValidatedata(true);

    if (event) event.preventDefault();
    setErrors(RegistratioValidate(values, setValues, uploadedImage, setImage , validEmail));
    let reporting_person_id = values.reporting_person_id || "0";
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("role_id", values.role_id);
    formData.append("password", values.password);
    formData.append("phone", values.phone);
    formData.append("reporting_person_id", reporting_person_id);
    formData.append("confirmPassword", values.confirmPassword);
    formData.append("image_src", image_src);
    formData.append("last_name", values.last_name);
    dispatch(RegistrationUserAction(formData));
    if (validEmail == 1) {
      toast.error("Email is taken");
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }
    ));
    if (validateData) {
      setErrors(RegistratioValidate(values))
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default RegistrationUseForm;
