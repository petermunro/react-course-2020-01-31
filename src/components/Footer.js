import React from "react";
// import './styles/Footer.css';

const Footer = props => (
  <>
    <div className="container">
      &copy; Acme Industries Inc, {new Date().getFullYear()}
      {props.children}
    </div>
  </>
);

export default Footer;
