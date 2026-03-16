import { redirect } from 'react-router-dom';

export const validators = {
  name: (value) => {
    if (!value.trim()) return "This field is required";
  },

  email: (value) => {
    if (!value.trim()) return "This field is required";
    if (!/^\S+@\S+\.\S+$/.test(value)) return "Enter a valid email";
  },

  phone: (value) => {
    if (!value.trim()) return "This field is required";
  }
};

export function validateForm(values, validators) {
  const errors = {};

  for (const field in validators) {
    const error = validators[field]?.(values[field]);
    if (error) errors[field] = error;
  }

  return errors;
}

export async function personalInfoAction({ request }) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const errors = validateForm(values, validators);

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return redirect('/select-plan');
}
