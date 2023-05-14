import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from './Input.module.scss';
import cx from 'classnames';

const Input = (props) => {
  const [field, meta, helpers] = useField(props.name);
  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });
  return (
    <>
      <label className={styles.container}>
        <input
          {...field}
          className={classNames}
          {...props}
          placeholder={field.name}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className={styles.error}
        />
      </label>
    </>
  );
};

export default Input;
