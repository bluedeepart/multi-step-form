import { useContext, useState } from 'react';
import { Form, useActionData } from 'react-router-dom';
import { validators } from './actions';
import FormContent from '../context/FormContent';

function PersonalInfo() {
  const ctx = useContext(FormContent);
  const { formData, updateForm } = ctx;
  const actionData = useActionData() || {};
  const { errors: actionErrors } = actionData;
  const [userErrors, setUserErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validators[name]?.(value);

    setUserErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }

      return newErrors;
    });

    // remove action error for this field
    if (actionErrors?.[name]) {
      actionErrors[name] = undefined;
    }
  };

  const errors = { ...(actionErrors ?? {}), ...userErrors };

  return (
    <>
      <article className='heading'>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </article>

      <Form method='post'>
        <article className='middle-content'>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              onBlur={handleBlur}
              placeholder='e.g. Stephen King'
              value={formData.name}
              onChange={(event) => updateForm(event.target.name, event.target.value)}
              className={errors?.name ? 'invalid-input' : ''}
              required
            />
            {errors?.name && <span className='error-msg'>{errors?.name}</span>}
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              onBlur={handleBlur}
              placeholder='e.g. stephenking@loren.com'
              value={formData.email}
              onChange={(event) => updateForm(event.target.name, event.target.value)}
              className={errors?.email ? 'invalid-input' : ''}
              required
            />
            {errors?.email && <span className='error-msg'>{errors?.email}</span>}
          </div>
          <div className='input-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              onBlur={handleBlur}
              placeholder='e.g. +1 234 567 890'
              value={formData.phone}
              onChange={(event) => updateForm(event.target.name, event.target.value)}
              className={errors?.phone ? 'invalid-input' : ''}
              required
            />
            {errors?.phone && <span className='error-msg'>{errors?.phone}</span>}
          </div>
        </article>

        <article className='action'>
          <span>&nbsp;</span>
          <button
            type='submit'
            className='btn btn-primary'>
            Next Step
          </button>
        </article>
      </Form>
    </>
  );
}

export default PersonalInfo;
