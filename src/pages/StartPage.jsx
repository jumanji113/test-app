import React, { useState } from 'react';
import './StartPage.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const StartPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`start-page ${isOpen ? 'start-page--modal-open' : ''}`}>
            <div className="start-page_auth" onClick={toggleModal}>
                {isOpen && <Modal onClose={toggleModal} />}

                <div className="login">
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.8414 16.138L15.074 13.5799C14.473 11.5764 12.4033 10.3992 10.3741 10.9065C8.81537 11.2962 7.18469 11.2962 5.62596 10.9065C3.59672 10.3992 1.5271 11.5764 0.926055 13.5799L0.15864 16.138C-0.418811 18.0628 1.02253 20 3.03212 20H12.9679C14.9775 20 16.4189 18.0628 15.8414 16.138ZM2.84171 14.1546L2.07429 16.7127C1.88181 17.3543 2.36226 18 3.03212 18H12.9679C13.6378 18 14.1182 17.3543 13.9258 16.7127L13.1583 14.1546C12.8643 13.1745 11.8519 12.5986 10.8592 12.8468C8.98196 13.3161 7.01809 13.3161 5.14089 12.8468C4.14819 12.5986 3.13574 13.1745 2.84171 14.1546Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 5C13 7.76142 10.7614 10 8.00003 10C5.2386 10 3.00003 7.76142 3.00003 5C3.00003 2.23858 5.2386 0 8.00003 0C10.7614 0 13 2.23858 13 5ZM8.00003 8C9.65688 8 11 6.65685 11 5C11 3.34315 9.65688 2 8.00003 2C6.34317 2 5.00003 3.34315 5.00003 5C5.00003 6.65685 6.34317 8 8.00003 8Z"
                            fill="white"
                        />
                    </svg>
                    <h2 className="header__title">Авторизация</h2>
                </div>
            </div>
            <div className="main__logo">
                <svg
                    width="103"
                    height="104"
                    viewBox="0 0 103 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 24.2373V48.9268L1.50681 52.0001L3.01361 55.0735V63.5765V72.0795L1.50681 75.1528L0 78.2262V91.3392V104.452H25.7161H51.4323L54.1044 103.1L56.7563 101.748L59.4284 103.1L62.0804 104.452H82.4725H102.865V83.6558V62.8594L101.539 60.1343L100.213 57.4297L101.539 54.7047L102.865 52.0001V25.774V-0.452057H96.4355H90.0065L87.3947 0.879737L84.7829 2.21153L82.1711 0.879737L79.5593 -0.452057H67.0026H54.4459L51.4323 1.08463L48.4187 2.62131H40.081H31.7434L28.7298 1.08463L25.7161 -0.452057H12.8581H0V24.2373ZM54.1044 40.9565C70.5988 53.5983 84.2405 64.0887 84.4213 64.2731C84.7427 64.5804 84.6624 65.2566 83.256 75.2553C82.4524 81.0947 81.7693 85.9096 81.7693 85.9506C81.7693 85.9916 79.037 85.9916 75.7019 85.9711L69.6345 85.9096L65.7771 81.2996L61.8996 76.6895L61.116 73.3498C60.674 71.5058 60.2923 69.9896 60.2521 69.9486C60.2119 69.9076 58.8056 69.2929 57.118 68.5758L54.0642 67.2645L36.0428 45.669L18.0415 24.0734L21.0149 21.041C22.6623 19.3609 24.0285 17.9882 24.0687 17.9882C24.0888 17.9882 37.6099 28.3352 54.1044 40.9565ZM80.3228 22.5572L84.7829 27.1058L84.7427 36.285L84.6825 45.4436L71.2217 31.7159L57.7609 17.9882H66.8017H75.8425L80.3228 22.5572ZM36.2236 85.9711L27.2229 86.0121L22.6624 81.361L18.0817 76.6895V67.4694V58.2698L31.6429 72.0795L45.2042 85.9096L36.2236 85.9711Z"
                        fill="#BBDD00"
                    />
                </svg>
                <img src="img/Vector.svg" alt="logo" />
            </div>
            <input placeholder="Поиск по сайту..." type="text" />
            <div className="main-buttons">
                <Link to="/matches">
                    <button className="main-buttons__matches">Список матчей</button>
                </Link>
                <Link to="/teams">
                    <button className="main-buttons__teams">Список команд</button>
                </Link>
            </div>
            <div className="main__description">
                <div className="main__description-block1">
                    <img src="img/descr1.svg" alt="" />
                    <h2>Открытый источик</h2>
                    <h3>Вся информация и данные для сайта берутся из OpenSource данных.</h3>
                </div>
                <div className="main__description-block2">
                    <img src="img/descr2.svg" alt="" />
                    <h2>Подробные данные</h2>
                    <h3>Анализ файлов повторов предоставляет очень подробные данные о матче.</h3>
                </div>
                <div className="main__description-block3">
                    <img src="img/descr3.svg" alt="" />
                    <h2>Бесплатно</h2>
                    <h3>
                        Серверы финансируются спонсорами, а код поддерживают волонтеры, поэтому
                        услуга предоставляется бесплатно.
                    </h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StartPage;
