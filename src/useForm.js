import { useState } from 'react'



const useForm = (callback) => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [validations, setValidations] = useState({ email: '', password: '' })

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
    callback();
  }



  return {
    handleChange,
    handleSubmit,
    values
  }

}

export default useForm;
