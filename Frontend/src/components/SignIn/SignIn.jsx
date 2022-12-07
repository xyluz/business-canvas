import React, { useState } from 'react';
import styles from './SignIn.module.css';
import images from '../../constants/images'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  name: '',
  password: ''
}

const onSubmit = values => console.log('Forms data', values)

const validationSchema = Yup.object({
  name: Yup.string().required('Please Input Full Name or Email.'),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
})

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);
  
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >

              <Form className='form'>
                <div>
                  <label htmlFor="name"> Enter Full Name or Email </label>
                    <Field 
                      type="text" 
                      id="name" 
                      name='name' 
                      className={styles.input}
                    />
                  <ErrorMessage name='name' render={msg => <div className={styles.error}>{msg}</div>} />
                </div>

                <br />

                <div>
                  <label htmlFor="password"> Enter Password </label>
                    <Field 
                      type={ showPassword ? 'text' : 'password'}
                      id="password" 
                      name='password'
                      className={styles.input} 
                    />
                    <img src={images.show} alt="a picture of an images" className={styles.show} onClick={() => setShowPassword(prev => !prev)} />
                </div>
                <ErrorMessage name='password' render={msg => <div className={styles.error}>{msg}</div>} />

                <div  className={styles.check}>
                  <div>               
                    <Field type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <label htmlFor="checkbox">Remember me</label>
                  </div>
                  <p>Forgot Password?</p>
                </div>
                
                <button type='submit'>Create an account</button>
              </Form>
            </Formik>
          </div>
          <footer> Don’t have an account? <span>Sign up</span> </footer>
        </div>
      </div>
    </div>
  )
}

export default SignIn
