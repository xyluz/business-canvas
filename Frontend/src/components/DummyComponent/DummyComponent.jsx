import React from 'react';
import styles from './DummyComponent.module.css';

const DummyComponent = () => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Welcome To BMC</h1>
      <p className={styles.text}>We are glad to have you</p>
    </div>
  )
}

export default DummyComponent
