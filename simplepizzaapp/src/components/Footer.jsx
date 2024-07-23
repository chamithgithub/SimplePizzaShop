import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faYoutube, faFacebook, faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="Logo" className="w-32 mx-auto md:mx-0" />
            <p className="mt-4">"Stay motivated, stay dedicated!"</p>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Connect with us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2x" className="hover:text-gray-400" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:text-gray-400" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-gray-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" className="hover:text-gray-400" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="hover:text-gray-400" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-2">Contact us: <a href="mailto:contact@example.com" className="hover:text-gray-400">A.C.Dilshan@gmail.com</a></p>
            <p>Made by A.C.Dilshan</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

