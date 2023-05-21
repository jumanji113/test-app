import React, { useState } from 'react';
import closeIcon from './close-icon.png';
import checkIcon from './check-icon.png';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsRegistered(false);
        setIsPasswordReset(false);
    };

    const handleLogin = () => {
        // Handle login logic here
    };

    const handleRegister = () => {
        setIsRegistered(true);
    };

    const handlePasswordReset = () => {
        setIsPasswordReset(true);
    };

    return (
        <>
            <button onClick={handleOpen}>Вход</button>
            {isOpen && (
                <div className="modal" style={{ width: '536px', height: '542px' }}>
                    <img src={closeIcon} alt="Close" onClick={handleClose} />
                    <h1>Авторизация</h1>
                    <div className="form-group">
                        <label htmlFor="email">Логин/email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ borderBottom: '1px solid #ccc' }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderBottom: '1px solid #ccc' }}
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        style={{ width: '48px', height: '19px', backgroundColor: '#7540F0' }}>
                        Вход
                    </button>
                    {!isRegistered && (
                        <div className="register">
                            Нет учетной записи?{' '}
                            <a href="#" onClick={handleRegister}>
                                Регистрация
                            </a>{' '}
                            <img src={checkIcon} alt="Check" />
                        </div>
                    )}
                    {isRegistered && (
                        <div className="register-form">
                            <h2>Регистрация</h2>
                            {/* Registration form here */}
                        </div>
                    )}
                    {!isPasswordReset && (
                        <div className="forgot-password">
                            Забыли пароль?{' '}
                            <a href="#" onClick={handlePasswordReset}>
                                Восстановить пароль
                            </a>{' '}
                            <img src={checkIcon} alt="Check" />
                        </div>
                    )}
                    {isPasswordReset && (
                        <div className="forgot-password-form">
                            <h2>Восстановление пароля</h2>
                            {/* Password reset form here */}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Modal;
