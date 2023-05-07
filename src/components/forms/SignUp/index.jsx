import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from '../SignIn/SignIn.module.scss';
import Input from '../Input';
import { SIGN_UP_SCHEMA } from '../../../utils';

export const SignUpForm = (props) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    picked: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(formProps) => (
        <Form>
          <div className={styles.form}>
            <div className={styles.inline}>
              <div>
                <div className={styles.label}>First name</div>
                <Field name="firstName">
                  {(fieldProps) => <Input {...fieldProps} />}
                </Field>
              </div>
              <div>
                <div className={styles.label}>Last name</div>
                <Field name="lastName">
                  {(fieldProps) => <Input {...fieldProps} />}
                </Field>
              </div>
            </div>
            <div className={styles.label}>Display name</div>
            <Field name="name">
              {(fieldProps) => <Input {...fieldProps} />}
            </Field>
            <div className={styles.label}>Email address</div>
            <Field name="email">
              {(fieldProps) => <Input {...fieldProps} />}
            </Field>
            <div className={styles.label}>Password</div>
            <Field name="password">
              {(fieldProps) => <Input {...fieldProps} type="password" />}
            </Field>
            <div className={styles.label}>Confirm Password</div>
            <Field name="confirmPassword">
              {(fieldProps) => <Input {...fieldProps} type="password" />}
            </Field>
            <p className={styles.checkboxName}>
              Select a situation that best describe you
            </p>
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className={styles.radioWrapper}
            >
              <label>
                <Field type="radio" name="picked" value="One" checked={true} />
                <div className={styles.contextBox}>
                  <h5>Join as a buyer</h5>
                  <span>
                    I am looking for a name, logo or tagline for my business,
                    brand or product.
                  </span>
                </div>
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                <div className={styles.contextBox}>
                  <h5>Join as a creative or market place seller</h5>
                  <span>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplaces
                  </span>
                </div>
              </label>
            </div>
            <ErrorMessage
              component="div"
              name="picked"
              className={styles.error}
            />
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
