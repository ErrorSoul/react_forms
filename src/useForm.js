import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const pre_validations = {
    email: {
      dirty: false,
      valid: false,
    },

    password: {
      dirty: false,
      valid: false,
    },
  };

  const [validations, setValidations] = useState(pre_validations);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name : ", name);
    console.log("value : ", value);
    setValues({
      ...values,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    console.log('fieldName : ', fieldName);
    let errors = {};
    let loginValid = validations.email.valid;
    let passwordValid = validations.password.valid;
    let validationFields = validations;
    console.log('validations', validationFields)

    validationFields[fieldName].dirty = true;
    switch (fieldName) {
      case "email":
        let emailValid = value.length > 0;
        errors.email = emailValid ? "" : "Неправильный формат email";
        validationFields[fieldName].valid = emailValid;
        break;

      case "password":
        let passwordValid = value.length >= 6;
        errors.password = passwordValid ? "" : "Пароль слишком короткий";
        validationFields[fieldName].valid = passwordValid;
        break;

      default:
        break;
    }
    setErrors(errors);
    setValidations(validationFields);
  };

  useEffect(() => {
    console.log("use Effect is started");
  }, [values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    validations,
  };
};

export default useForm;
