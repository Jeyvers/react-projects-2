import React from 'react';
import FormSignup from './FormSignup';

const Form = () => {
  return (
    <div className='form-content-right'>
      <form className='form'>
        <h1>
          Get started with us today! Create your account by filling out the
          information below
        </h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
