import React from 'react'
import { Formik, useFormik } from 'formik'
import { SignInSchema } from '../schemas';
import "./style.css"

const Form = () => {

  const initialValues = {
    name: "" ,
    phone: "" , 
    address: "" , 
    email: "" 
  };

    let {values , errors , handleChange , touched , handleSubmit , handleBlur} = useFormik({
      initialValues: initialValues,
      validationSchema: SignInSchema ,
      onSubmit : (values , action) => {
        console.log(values)
        action.resetForm();        
      } 
      
    })
    
    console.log("Errors are => " , errors.name)
    
    
    return (
     <form onSubmit={handleSubmit} >

        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
        {
          errors.name && touched.name ?
          <p className = "errors-para" >{errors.name}</p> : null
        }
        <br />

        <label htmlFor="phone">Phone:</label>
        <input id="phone" name="phone" type="text" placeholder="Enter your phone number" value={values.phone} onChange={handleChange} onBlur={handleBlur}  />
        { errors.phone && touched.phone ? 
          <p className = "errors-para" >{errors.phone}</p> : null
        }
        <br />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {
        errors.email && touched.email ?           
        <p className = "errors-para" >
          {errors.email}
        </p> : null
        }
        <br />

        <label htmlFor="address">Address:</label>
        <input id="address" name="address" type="text" placeholder="Enter your address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
        {
          errors.address && touched.address ? 
          <p className = "errors-para" >
            {errors.address}
          </p> : ""
        }
        <br />

        <button type="submit">Submit</button>
    </form>
  )
}

export default Form