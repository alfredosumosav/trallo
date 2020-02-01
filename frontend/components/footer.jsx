import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="social">
        <a href="https://github.com/alfredosumosav" target="_blank">
          <i className="fab fa-github icon"></i>
        </a>
        <a href="https://angel.co/alfredosumosa" target="_blank">
          <i className="fab fa-angellist icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/alfredosumosa" target="_blank">
          <i className="fab fa-linkedin icon"></i>
        </a>
        <a href="mailto:asumosa1993@gmail.com" target="_blank">
          <i className="far fa-envelope icon"></i>
        </a>
      </div>
      <div className="note">
        <p>
          Alfredo&nbsp;Sumosa&nbsp;©&nbsp;Copyright&nbsp;{year}
          .&nbsp;All&nbsp;rights&nbsp;reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
