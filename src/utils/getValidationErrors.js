import { ValidationError } from 'yup';

export default function getValidationErrors(error: ValidationError) {
  const validationErrors = {};

  error.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
