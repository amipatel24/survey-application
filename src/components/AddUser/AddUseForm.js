import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RegistrationUserAction } from "../../redux/action/RegistrationUser/RegisterUserAction";

const AddUseForm = (AddUserValidate, image_src) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validateData, setValidatedata] = useState(null);
  const dispatch = useDispatch();

  const allUserData = useSelector((state) => state?.getRegistrationDataReducer?.users);
  // console.log(allUserData);
  let validEmailData = allUserData.filter((e) => e.email == values.email);
  let validEmail = validEmailData?.length;

  useEffect(() => {
    if (validateData) {
      setErrors(AddUserValidate(values))
    }
  }, [values])

  const handleSubmit = (event) => {

    setValidatedata(true);
    let reporting_person_id = values.reporting_person_id ? values.reporting_person_id : "0";
    const formAddUserData = new FormData();
    if (event) event.preventDefault();
    formAddUserData.append("name", values.name);
    formAddUserData.append("email", values.email);
    formAddUserData.append("role_id", values.role_id);
    formAddUserData.append("password", values.password);
    formAddUserData.append("phone", values.phone);
    formAddUserData.append("reporting_person_id", reporting_person_id);
    formAddUserData.append("confirmPassword", values.confirmPassword);
    formAddUserData.append("image_src", image_src);
    formAddUserData.append("last_name", values.last_name);
    dispatch(RegistrationUserAction(formAddUserData));

    if (validEmail == 1) {
      toast.error('Email is taken')
    }
    else {
      setErrors(AddUserValidate(values, setValues));
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    validEmail
  };
};

export default AddUseForm;
