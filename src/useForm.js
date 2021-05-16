import { useState, useEffect } from "react";

const useForm = (names, callback) => {
  const preErrorData = Object.fromEntries(names.map((name) => [name, ""]));
  const [values, setValues] = useState(preErrorData);
  const [errors, setErrors] = useState(preErrorData);
  const [formValid, setFormValid] = useState(false);

  // const pre_validations = {
  //   email: {
  //     dirty: false,
  //     valid: false,
  //   },

  //   password: {
  //     dirty: false,
  //     valid: false,
  //   },
  // };
  const preValidationData = names.reduce(
    (acc, target) => ({ ...acc, [target]: { dirty: false, valid: false } }),
    {}
  );

  const [validations, setValidations] = useState(preValidationData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateForm = () => {
    setFormValid(Object.keys(values).every((elem) => validations[elem].valid));
  };

  const validateField = (fieldName, value) => {
    //console.log('fieldName : ', fieldName);
    let errorsFields = errors;
    let loginValid = validations.email.valid;
    let passwordValid = validations.password.valid;
    let validationFields = validations;
    //console.log('validations', validationFields)

    validationFields[fieldName].dirty = true;
    switch (fieldName) {
      case "email":
        let emailValid = value.length > 0;
        errorsFields.email = emailValid ? "" : "Неправильный формат email";
        validationFields[fieldName].valid = emailValid;
        break;

      case "password":
        let passwordValid = value.length >= 6;
        errorsFields.password = passwordValid ? "" : "Пароль слишком короткий";
        validationFields[fieldName].valid = passwordValid;
        break;

      default:
        break;
    }
    //console.log('errors', errorsFields)
    setErrors(errorsFields);
    setValidations(validationFields);
    validateForm();
  };

  useEffect(() => {
    console.log("use Effect is started");
  }, [values]);

  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
    setErrors(preErrorData);
    setValidations(preValidationData);
    setFormValid(false);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    validations,
    formValid,
  };
};

export default useForm;
