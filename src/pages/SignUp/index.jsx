import React from 'react';
import { Header } from '../../components/Header';
import styles from '../SignIn/SignIn.module.scss';
import { SignUpForm } from '../../components/forms/SignUp';

export const SignUp = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Header isSignIn={false}></Header>
      <div className={styles.wrapper}>
        <h1>Create an Account</h1>
        <p>We always keep your name and email private</p>
        <SignUpForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
