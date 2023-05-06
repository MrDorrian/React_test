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
      {(formProps) => (
        <Form>
          <div className={styles.form}>
            <div className={styles.label}>Email address</div>
            <Field name="email">
              {(fieldProps) => <Input {...fieldProps} />}
            </Field>
            <div className={styles.label}>Password</div>
            <Field name="password">
              {(fieldProps) => <Input {...fieldProps} type='password'/>}
            </Field>
          </div>
          <Field
            type="submit"
            value="Log In"
            disabled={!formProps.isValid}
            className={styles.button}
          />
        </Form>
      )}
    </Formik>
  );
};

SignInForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
