import React, { useContext } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TodoContext } from '../../context/TodoContext';
import styles from './todoInput.module.scss';
import { TODO_VALIDATION_SCHEMA } from '../../utils';
import cx from 'classnames';

export const TodoInput = () => {
  const [list, setList] = useContext(TodoContext);
  const initialValues = {
    id: Date.now(),
    text: '',
    isSelected: false,
    createdAt: new Date(),
  };

  const handlerSubmit = (values, { resetForm }) => {
    setList([...list, values]);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlerSubmit}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      {(formProps) => (
        <Form>
          <label className={styles.errorInput}>
            <Field
              name="text"
              className={styles.inputField}
              type="text"
              placeholder="Write todo"
            ></Field>
            <ErrorMessage name="text"></ErrorMessage>
          </label>
          <Field
            className={
              formProps.isValid ? styles.buttonAdd : styles.invalidForm
            }
            disabled={!formProps.isValid}
            type="submit"
            value=" Add new+"
          />
        </Form>
      )}
    </Formik>
  );
};
