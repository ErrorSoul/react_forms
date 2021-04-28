import { useState } from 'react'



const useForm = () => {
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



  return {
    handleChange,
    handleSubmit,
    values
  }

}
