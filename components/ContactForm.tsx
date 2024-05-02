import React from 'react';
import InputField from './InputField';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <form className=' flex flex-col gap-6'>
      <InputField type='text' label='Name' placeholder='Enter your full name' />
      <InputField type='email' label='Email' placeholder='Enter your email' />
      <InputField type='text' label='Subject' placeholder='Enter the subject' />
      <InputField
        type='textarea'
        label='Message'
        placeholder='Enter your message'
      />
      <Button>Submit</Button>
    </form>
  );
};

export default ContactForm;
