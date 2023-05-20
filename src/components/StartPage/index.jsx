import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (
        <main>
            <header>
                <img className="header__img" src="./login.png" alt="login_img" />
                <div className="header__title">Авторизация</div>
            </header>
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
            <footer>
                <div className="footer__left"></div>
                <div className="footer__right">
                    <h4>О нас</h4>
                    <h4>Политика конфидициальности</h4>
                    <h4>Документация API</h4>
                </div>
            </footer>
        </main>
    );
};

export default StartPage;
