import React from 'react';
import { SignInForm } from '../../components/forms/SignIn';
import { Header } from '../../components/Header';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Header isSignIn={true}></Header>
      <div className={styles.wrapper}>
        <h1>Login to Your Account</h1>
        <SignInForm onSubmit={onSubmit}/>
      </div>
    </>
  );
};
