import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SCHEMA } from '../../../utils';

const SignInForm = () => {
  const initialValues = { email: '', password: '' };
  const onSubmit = (values, formikBag) => {
    console.log(formikBag);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA}
    >
      {(formProps) => (
        <Form>
          <div>Email</div>
          <Field name="email" />
          <ErrorMessage component="span" name="email" />
          <div>Password</div>
          <Field type="password" name="password" />
          <ErrorMessage component="span" name="password" />
          <Field type="submit" value="Submit" disabled={!formProps.isValid} />
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
