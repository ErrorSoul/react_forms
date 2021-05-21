import React from "react";
import useForm from "./useForm";
import { InputCell } from "./FormGroup";

const Form = () => {
  const submit = () => {

    console.log("success")
    return {answer: 'error', data: {email: 'la la la la'}}
  };
  const newCallback = () => {
    console.log('callback');
  }

  const { handleChange, handleSubmit, values, errors, validations, formValid } =
    useForm(["email", "password"], submit, newCallback);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Email address</label>
        <InputCell
          type={"email"}
          name={"email"}
          defaultValue={values.email}
          placeholder={"Email"}
          onChange={handleChange}
          errors={errors.email}
          isValid={validations.email.valid}
          isDirty={validations.email.dirty}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <InputCell
          type={"password"}
          name={"password"}
          defaultValue={values.password}
          placeholder={"Password"}
          onChange={handleChange}
          errors={errors.password}
          isValid={validations.password.valid}
          isDirty={validations.password.dirty}
        />
      </div>

      <button disabled={!formValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
