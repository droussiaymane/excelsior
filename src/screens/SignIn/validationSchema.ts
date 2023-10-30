import * as yup from 'yup';

export const schema = yup.object().shape({
  accountNumber: yup
    .string()
    .required('Account Number is required.')
    .min(9)
    .max(9),
});
