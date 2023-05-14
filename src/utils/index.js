import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[a-zA-Z0-9]{3,15}$/, 'Enter a valid name')
  .required();

export const EMAIL_SHEMA = yup
  .string()
  .email('Email must be a valid email')
  .required();

export const PASSWORD_SHEMA = yup
  .string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,32}$/,
    'Password must contain one big letter and so on....'
  )
  .required();

export const SIGN_IN_SCHEMA = yup.object({
  email: EMAIL_SHEMA,
  password: PASSWORD_SHEMA,
});

export const SIGN_UP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  name: NAME_SCHEMA,
  email: EMAIL_SHEMA,
  password: PASSWORD_SHEMA,
  picked: yup.string().required(),
  confirmPassword: yup
    .string()
    .label('confirm password')
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const TODO_VALIDATION_SCHEMA = yup.object({
  text: yup
    .string()
    .matches(/^[a-zA-Z0-9]{3,15}$/, 'Enter a valid text')
    .required(),
});
