import React from 'react';
import styles from './SignIn.module.css';
import { useFormik } from 'formik';


const initialValues = {
  name: '',
  password: ''
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validate = values => {
  let errors = {}

  if(!values.name) {
    errors.name = 'Please Input Full Name'
  } 


  // if (!values.email) {
  //   errors.email = 'Please Input your email'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email format'
  // }



  if (!values.password) {
    errors.password = 'Please Input Password'
  }

  return errors
}

const SignIn = () => {


  const formik = useFormik({
    initialValues,
    onSubmit,
    validate 
  })


  console.log('Visited fields', formik.touched)


  return (
    <div className={styles.bodyContainer}>
      <div  className={styles.left}>
        <div className="text-container">
          <h1>TEMIBMC</h1>
          <p>
            Your business tool used to visualize all the building blocks when you want to start a business, including customers, route to market, value proposition and finance.
          </p>
        </div>
      </div>
      <div  className={styles.right}>
        <div className={styles.rightContainer}>
          <div  className={styles.formText}>
            <h2>Sign In</h2>
            <button type='button' className='signIn-button'>Sign in with google</button>
            <p>-------- Or --------</p>
          </div>
          <div className={styles.form}>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="full-name"> Enter Full Name or Email <br />
                <input 
                  type="text" 
                  id="name" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </label> <br />
              {formik.touched.name && formik.errors.name ? (
                <p  className={styles.error}>{formik.errors.name}</p>
              ) : null}

              <br />

              <label htmlFor="full-name"> Enter Password <br />
                <input 
                  type="text" 
                  id="password" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </label>
              <br />
              {formik.touched.password && formik.errors.password ? (
                <p  className={styles.error}>{formik.errors.password}</p>
              ) : null}


              <div  className={styles.checkboxes}>            
                <label for="passwordCharacters"> Password must have at least 8 characters 
                  <input type="checkbox" name="" id="passwordCharacters" />
                </label>
                <br />
                <label for="passwordDigits"> Password must have at least 1 digit 
                  <input type="checkbox" name="" id="passwordDigits" />
                </label>
                <br />
                <label for="passwordCasing"> Password must have Uppercase character 
                  <input type="checkbox" name="" id="passwordCasing" />
                </label>
              </div>
              <button type='submit'>Create an account</button>
            </form>
          </div>
          <footer> Don’t have an account? <span>Sign up</span> </footer>
        </div>
      </div>
    </div>
  )
}

export default SignIn
