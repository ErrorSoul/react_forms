import React from 'react'
import useForm from './useForm'
import { InputCell } from './FormGroup'

const Form = () => {
  const submit = () => {
    console.log('success')
  }

  const { handleChange, handleSubmit, values } = useForm(submit)



  return (
    <form onSubmit={handleSubmit} noValidate>
      <Example
          type={"email"}
          name={"email"}
          defaultValue={values.email}
          placeholder={"Email"}
          onChange={handleChange}
          errors={errors.login}
          isValid={validations.login.valid}
          isDirty={validations.login.dirty}
        />
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name='email'
          value={values.email}
          onChange={handleChange}
          aria-describedby="emailHelp"/>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          id="exampleInputPassword1"/>
      </div>


      <div className="form-group form-check">
        <input
          value={values.password}
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"/>
        <label className="form-check-label">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}


export default Form;
