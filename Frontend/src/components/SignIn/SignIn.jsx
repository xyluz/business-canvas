import React from 'react';
import images from '../../constants/images';
import styles from './SignIn.module.css';

const SignIn = () => {
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
          <div className='form'>
            <form action="">
              <label htmlFor="full-name"> Enter Full Name or Email <br />
                <input type="text" name="full-name" id="text" />
              </label> <br />
              <label htmlFor="full-name"> Enter Password <br />
                <input type="text" name="full-name" id="text" />
              </label>
              <div  className='checkboxes'>            
                <input type="checkbox" name="" id="" />Password must have at least 8 characters <br />
                <input type="checkbox" name="" id="" />Password must have at least 1 digit <br />
                <input type="checkbox" name="" id="" />Password must have Uppercase character  <br />
              </div>
              <button>Create an account</button>
            </form>
          </div>
          <footer>
            <p>Don’t have an account? <span>Sign up</span></p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default SignIn
