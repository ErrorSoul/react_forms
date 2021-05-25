import React from "react";
import useForm from "./useForm";
import {
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import { InputCell } from "./FormGroup"


const Form = () => {
  const submit = () => {
    console.log("success");
  };

  const callback = () => {
    console.log("success");
  };

  const { handleChange, handleSubmit, values, errors, validations, formValid } =
    useForm(["login", "password"], submit, callback);

    return (
      <form onSubmit={handleSubmit} noValidate>
      
        <InputGroupCell
	  type={"text"}
	  name={"login"}
	  value={values.login}
	  placeholder={ "Login" }
	  onChange={handleChange}
	  errors={errors.login}
	  isValid={validations.login.valid}
	  isDirty={validations.login.dirty}
	/>
       
        <InputGroupCell
	  type={"password"}
	  name={"password"}
	  value={values.password}
	  placeholder={ "Password" }
	  onChange={handleChange}
	  errors={errors.password}
	  isValid={validations.password.valid}
	  isDirty={validations.password.dirty}
	/>
       
       <button disabled={!formValid} type="submit" className="btn btn-primary">
         Submit
       </button>
      </form>
      );
    };
export default Form;
