import React from 'react'
import useForm from './useForm'
import { InputCell } from './FormGroup'
const Form = () => {
  const submit = () => {
    console.log('success')
    return { answer: 'err', data: { email: 'la la la la' } }
  }

  const callback = () => {
    console.log('success')
  }

  const { handleChange, handleSubmit, values, errors, validations, formValid } =
    useForm(['login', 'password'], submit, callback)

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Login</label>
        <InputCell
          type={'text'}
          name={'login'}
          value={values.login}
          placeholder={'Login'}
          onChange={handleChange}
          errors={errors.login}
          isValid={validations.login.valid}
          isDirty={validations.login.dirty}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <InputCell
          type={'password'}
          name={'password'}
          value={values.password}
          placeholder={'Password'}
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
  )
}
export default Form
