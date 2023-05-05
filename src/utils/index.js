import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[a-zA-Z0-9]{3,15}$/, 'Enter a valid name')
  .required();

export const SCHEMA = yup.object({
  email: yup.string().email('Email must be a valid').required(),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Password must contain .....'
    )
    .required(),
});
