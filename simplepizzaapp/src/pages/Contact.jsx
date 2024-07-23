import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="p-5">
      <h5 className="text-lg font-bold mb-4">Hello Contact Sagoo</h5>
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="3x" />
        <FontAwesomeIcon icon={faTwitter} size="4x" className="text-red-500" />
      </div>
    </div>
  );
}

export default Contact;
