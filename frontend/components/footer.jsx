import React from 'react';

const Footer = (props) => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-container">
            <div className="social">
                <a href="https://github.com/alfredosumosav" target="_blank"><i className="fab fa-github icon"></i></a>
                <a href="https://angel.co/alfredo-david-sumosa" target="_blank"><i className="fab fa-angellist icon"></i></a>
                <a href="https://www.linkedin.com/in/asumosa" target="_blank"><i className="fab fa-linkedin icon"></i></a>
                <a href="mailto:asumosa1993@gmail.com" target="_blank"><i className="far fa-envelope icon"></i></a>
            </div>
            <div className="note">
                <p>&nbsp;©&nbsp;Copyright&nbsp;{year}.&nbsp;All&nbsp;rights&nbsp;reserved.</p>
            </div>
        </div>
    );
}

export default Footer;