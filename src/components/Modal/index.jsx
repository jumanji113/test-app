import React from 'react';
import './modal.scss';

const Modal = ({ onClose }) => {
    return (
        <>
            <div className="modal__overlay" onClick={onClose} />
            <div className="modal">
                <img
                    src={process.env.PUBLIC_URL + '/img/close-icon.png'}
                    alt="Close"
                    className="modal__close-icon"
                    onClick={onClose}
                />
                <h1 className="modal__title">Авторизация</h1>
                <h2 className="modal__subtitle">Логин / E-mail</h2>
                <hr className="modal__divider" />
                <h2 className="modal__subtitle">Пароль</h2>
                <hr className="modal__divider" />
                <button className="modal__button">Войти</button>
                <div className="modal__links">
                    <div>
                        Нет учетной записи? <a href="#">Регистрация</a>
                    </div>
                    <div>
                        Забыли пароль? <a href="#">Восстановить пароль</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
