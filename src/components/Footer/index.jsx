import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer__left">2022© OpenDota</div>
            <div className="footer__right">
                <h4 className="footer__right-first">О нас</h4>
                <h4 className="footer__right-two">Политика конфидициальности</h4>
                <h4 className="footer__right-third">Документация API</h4>
            </div>
        </footer>
    );
};

export default Footer;
