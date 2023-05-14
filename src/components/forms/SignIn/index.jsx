import React from 'react';
import { Field, Form, Formik } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils';
import PropTypes from 'prop-types';
import Input from '../Input';
import styles from './SignIn.module.scss';

export const SignInForm = (props) => {
  const initialValues = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      <Form>
        <div className={styles.form}>
          <div className={styles.label}>Email address</div>
          <Input name="email" />
          <div className={styles.label}>Password</div>
          <Input name="password" type="password" />
        </div>
        <Field type="submit" value="Log In" className={styles.button} />
      </Form>
    </Formik>
  );
};

SignInForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
