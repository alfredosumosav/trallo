import React from 'react';

const Footer = (props) => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-container">
            <div className="social">
                <a href="https://github.com/alfredosumosav" target="_blank"><i className="fab fa-github icon"></i></a>
                <a href="https://www.facebook.com/alfredo.d.sumosa" target="_blank"><i className="fab fa-facebook-square icon"></i></a>
                <a href="https://www.instagram.com/asumosa93/" target="_blank"><i className="fab fa-instagram icon"></i></a>
            </div>
            <div className="note">
                <p>&nbsp;©&nbsp;Copyright&nbsp;{year}.&nbsp;All&nbsp;rights&nbsp;reserved.</p>
            </div>
        </div>
    );
}

export default Footer;