import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putEditUserData } from "../../redux/action/AdminUser/putEditDataAction";

const EditUseForm = (EditUserValidate, img, uploadedImage, setShowEdit) => {

  const dispatch = useDispatch();

  const editData = useSelector((state) => state?.editDataReducer);
  // console.log(editData);
  const [values, setValues] = useState(editData);
  const [errors, setErrors] = useState({});
  const [validateData, setValidatedata] = useState(null);
  let validImage = img || editData.image_src;

  const allUserData = useSelector((state) => state?.getRegistrationDataReducer?.users);
  let validEmailData = allUserData.filter((e) => e.email == values.email);
  let validEmail = validEmailData?.length;
  //console.log(validEmail);

  useEffect(() => {
    if (validateData) {
      setErrors(EditUserValidate(values))
    }
  }, [values])

  const handleSubmit = (event) => {
    const formData = new FormData();
    setValidatedata(true);
    if (event) event.preventDefault();
    setErrors(EditUserValidate(values, setValues, uploadedImage, setShowEdit, validEmail));
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("role_id", values.role_id);
    formData.append("password", values.password);
    formData.append("phone", values.phone);
    formData.append("reporting_person_id", values.reporting_person_id);
    formData.append("confirmPassword", values.confirmPassword);
    formData.append("image_src", validImage);
    formData.append("last_name", values.last_name);

    dispatch(putEditUserData(editData.id, formData));

    // if(validEmail == 1){
    //   toast.error("Email is taken");
    // }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    // if (validateData) {
    //  setErrors(EditValidate(values))
    // }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default EditUseForm;
