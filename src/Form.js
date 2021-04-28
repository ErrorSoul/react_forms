import React, { useState } from 'react'

const Form = () => {

  const [values, setValues] = useState({ email: 'sdsd', password: '' })

  const handleChange = event => {

    const { name, value } = event.target
    console.log("name : ", name);
    console.log("value : ", value);
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('success')
  }



  return (
    <form onSubmit={handleSubmit} noValidate>
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
