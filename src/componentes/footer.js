// Footer.js
import React from 'react';
import '../style/footer.css'; // Asegúrate de tener un archivo CSS para el footer
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importa los iconos de react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="names-list">
          <li>Callisaya Diaz Gabriel</li>
          <li>Tupac Uma Mollo Solares</li>
          <li>José Marcelo Poma Calahumani</li>
          <li>Lopez Leon Ignacio Victor</li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

