import { useState, useEffect } from "react";

const useForm = (names, submit, callback) => {
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
    let errorsFields = errors;
    let validationFields = validations;
    let nameValidation = validationFields[fieldName];
    let nameValid = nameValidation.valid;

    nameValidation.dirty = true;
    //validationFields[fieldName].dirty = true

    switch (fieldName) {
      case "email":
        nameValid = value.length > 0;
        errorsFields.email = nameValid ? "" : "Неправильный формат email";
        nameValidation.valid = nameValid;
        break;

      case "login":
        nameValid = value.length >= 3;
        errorsFields.login = nameValid ? "" : "Неправильный формат login";
        nameValidation.valid = nameValid;
        break;

      case "password":
        nameValid = value.length >= 6;
        errorsFields.password = nameValid ? "" : "Пароль слишком короткий";
        nameValidation.valid = nameValid;
        break;

      default:
        break;
    }

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

  const setInit = () => {
    setErrors(preErrorData);
    setValidations(preValidationData);
    setValues(preErrorData);
  };

  const handleSubmit = async (e) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    setFormValid(false);

    let json;
    try {
      json = await submit(values);
    } catch (e) {
      const requestErrors = e.json.errors;
      for (let [key, value] of Object.entries(requestErrors)) {
        validations[key].valid = false;
      }
      setErrors(requestErrors);
      setValidations(validations);
      console.warn(e);
      return;
    }
    setInit();
    callback(json);
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
