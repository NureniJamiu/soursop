import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  retypePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Retype password is required'),
});

export const businessSignUpValidationSchema = Yup.object().shape({
  businessName: Yup.string().required('Business name is required'),
  businessEmailAddress: Yup.string()
    .email('Invalid email address')
    .required('Business email is required'),
  businessPhoneNumber: Yup.string().required(
    'Business phone number is required',
  ),
  businessAddress: Yup.string().required('Business Address is required'),
});

export const forgotPassSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  retypePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Retype password is required'),
});
