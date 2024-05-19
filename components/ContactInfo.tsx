import React from 'react';
import Title from './Title';

const ContactInfo: React.FC = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Title className='text-xl'>Contact Information</Title>
      <div>
        <div>
          <strong>Address:</strong> 123 Main St, City, Country
        </div>
        <div>
          <strong>Phone:</strong> +1234567890
        </div>
        <div>
          <strong>Email:</strong> example@email.com
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
