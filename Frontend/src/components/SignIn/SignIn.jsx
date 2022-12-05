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
          <div className={styles.form}>
            <form action="">
              <label htmlFor="full-name"> Enter Full Name or Email <br />
                <input type="text" name="full-name" id="text" />
              </label> <br />
              <br />
              <label htmlFor="full-name"> Enter Password <br />
                <input type="text" name="full-name" id="text" />
              </label>
              <br />
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
              <button>Create an account</button>
            </form>
          </div>
          <footer> Don’t have an account? <span>Sign up</span> </footer>
        </div>
      </div>
    </div>
  )
}

export default SignIn
