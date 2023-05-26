import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-menu-icon" onClick={toggleMenu}>
                <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447716 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0Z"
                        fill="white"
                    />
                    <path
                        d="M1 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H1C0.447716 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7Z"
                        fill="white"
                    />
                    <path
                        d="M1 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H1C0.447716 16 0 15.5523 0 15C0 14.4477 0.447715 14 1 14Z"
                        fill="white"
                    />
                </svg>
            </div>
            <Link to="/">
                <svg
                    className="logo-navbar"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 7.45764V15.0544L0.461763 16L0.923526 16.9457V19.562V22.1783L0.461763 23.1239L0 24.0696V28.1044V32.1392H7.88075H15.7615L16.5804 31.7231L17.3931 31.307L18.2119 31.7231L19.0246 32.1392H25.2738H31.523V25.7402V19.3413L31.1167 18.5029L30.7103 17.6707L31.1167 16.8322L31.523 16V7.93047V-0.139097H29.5528H27.5826L26.7822 0.270685L25.9819 0.680468L25.1815 0.270685L24.3811 -0.139097H20.5331H16.685L15.7615 0.333729L14.838 0.806555H12.2829H9.72781L8.80428 0.333729L7.88075 -0.139097H3.94038H0V7.45764ZM16.5804 12.602C21.6351 16.4918 25.8156 19.7196 25.871 19.7763C25.9695 19.8709 25.9449 20.0789 25.5139 23.1555C25.2677 24.9522 25.0583 26.4337 25.0583 26.4463C25.0583 26.4589 24.221 26.4589 23.199 26.4526L21.3396 26.4337L20.1575 25.0152L18.9692 23.5968L18.7291 22.5692C18.5937 22.0018 18.4767 21.5352 18.4644 21.5226C18.452 21.51 18.0211 21.3209 17.5039 21.1002L16.5681 20.6968L11.0454 14.052L5.52884 7.40721L6.44005 6.47416C6.94491 5.95721 7.36358 5.53482 7.37589 5.53482C7.38205 5.53482 11.5256 8.71851 16.5804 12.602ZM24.615 6.94069L25.9819 8.34025L25.9695 11.1646L25.9511 13.9826L21.826 9.75873L17.7009 5.53482H20.4715H23.2421L24.615 6.94069ZM11.1008 26.4526L8.34252 26.4653L6.94491 25.0342L5.54115 23.5968V20.7598V17.9292L9.69702 22.1783L13.8529 26.4337L11.1008 26.4526Z"
                        fill="#BBDD00"
                    />
                </svg>
            </Link>
            <div className="navbar-menu-title">
                <Link to="/">
                    <svg
                        width="149"
                        height="27"
                        viewBox="0 0 149 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.1443 23.3626C7.48405 23.3626 6.01306 23.0075 4.73108 22.2974C3.47016 21.5657 2.48248 20.5544 1.76792 19.2633C1.07441 17.9506 0.727661 16.4335 0.727661 14.712V8.90193C0.727661 7.18047 1.07441 5.67411 1.76792 4.38298C2.48248 3.07032 3.47016 2.05894 4.73108 1.34882C6.01306 0.617174 7.48405 0.251358 9.1443 0.251358H12.4857C14.146 0.251358 15.6065 0.617174 16.8674 1.34882C18.1494 2.05894 19.1371 3.07032 19.8306 4.38298C20.5452 5.67411 20.9024 7.18047 20.9024 8.90193V14.712C20.9024 16.4335 20.5452 17.9506 19.8306 19.2633C19.1371 20.5544 18.1494 21.5657 16.8674 22.2974C15.6065 23.0075 14.146 23.3626 12.4857 23.3626H9.1443ZM12.4857 19.4246C13.7047 19.4246 14.6819 18.9727 15.4174 18.069C16.1739 17.1652 16.5522 15.9816 16.5522 14.5184V9.0956C16.5522 7.63236 16.1739 6.44878 15.4174 5.54499C14.6819 4.6412 13.7047 4.18931 12.4857 4.18931H9.1443C7.92537 4.18931 6.93769 4.6412 6.18114 5.54499C5.44564 6.44878 5.07783 7.63236 5.07783 9.0956V14.5184C5.07783 15.9816 5.44564 17.1652 6.18114 18.069C6.93769 18.9727 7.92537 19.4246 9.1443 19.4246H12.4857ZM24.0431 6.99751H28.015V8.74054C28.4563 8.13797 29.0133 7.6538 29.6857 7.28802C30.3792 6.92224 31.0517 6.73929 31.7032 6.73929H33.6891C34.9501 6.73929 36.0638 7.00823 37.0306 7.54625C37.9973 8.0627 38.7433 8.79438 39.2687 9.74117C39.7941 10.688 40.0568 11.7747 40.0568 13.0013V16.6164C40.0568 17.9506 39.7941 19.1341 39.2687 20.167C38.7433 21.1784 38.0078 21.9639 37.0621 22.5234C36.1164 23.0828 35.0236 23.3626 33.7837 23.3626H31.7347C31.1462 23.3626 30.5368 23.2228 29.9064 22.943C29.297 22.6632 28.7716 22.2867 28.3302 21.8132V29.56H24.0431V6.99751ZM33.2163 19.586C33.9939 19.586 34.6138 19.2848 35.0762 18.6822C35.5385 18.0797 35.7697 17.2836 35.7697 16.2937V13.3241C35.7697 12.4848 35.5279 11.807 35.0446 11.2905C34.5823 10.7741 33.9624 10.5158 33.1848 10.5158H31.2619C30.6525 10.5158 30.0745 10.7741 29.5281 11.2905C28.9818 11.7854 28.5824 12.431 28.3302 13.2272V16.4228C28.4353 17.3696 28.7505 18.1335 29.2759 18.7145C29.8223 19.2955 30.4843 19.586 31.2619 19.586H33.2163ZM49.1832 23.3626C47.8592 23.3626 46.6824 23.1151 45.6526 22.6202C44.6439 22.1037 43.8558 21.3936 43.2884 20.4898C42.721 19.5645 42.4373 18.5101 42.4373 17.3266V13.1627C42.4373 11.8931 42.721 10.7741 43.2884 9.80572C43.8558 8.83738 44.6439 8.08426 45.6526 7.54625C46.6824 7.00823 47.8592 6.73929 49.1832 6.73929H51.705C53.7225 6.73929 55.3406 7.3203 56.5596 8.48232C57.7785 9.64433 58.3879 11.1937 58.3879 13.1304V16.5519H46.7244V17.3266C46.7244 18.0367 46.9451 18.607 47.3864 19.0373C47.8277 19.4676 48.4266 19.6829 49.1832 19.6829H51.642C52.3775 19.6829 52.9659 19.5215 53.4073 19.1987C53.8696 18.8544 54.1008 18.4133 54.1008 17.8753H58.3249C58.3249 18.9512 58.0412 19.9088 57.4737 20.7481C56.9063 21.5873 56.1078 22.2329 55.078 22.6848C54.0692 23.1366 52.9029 23.3626 51.5789 23.3626H49.1832ZM54.1638 13.3886V13.1304C54.1638 12.2912 53.9432 11.624 53.5018 11.1291C53.0605 10.6127 52.472 10.3545 51.7365 10.3545H49.1832C48.4266 10.3545 47.8172 10.6234 47.3549 11.1614C46.8925 11.6994 46.6613 12.4095 46.6613 13.2918V13.3886H54.1638ZM61.292 6.99751H65.2639V8.93421C65.7262 8.26708 66.3252 7.73992 67.0607 7.35258C67.7962 6.94368 68.5318 6.73929 69.2673 6.73929H71.1587C72.8398 6.73929 74.1849 7.2773 75.1936 8.3532C76.2234 9.4291 76.7382 10.8493 76.7382 12.6139V23.1044H72.4511V12.7753C72.4511 12.1082 72.2724 11.5703 71.9152 11.1614C71.5789 10.7525 71.1376 10.5481 70.5912 10.5481H68.6999C67.9644 10.5481 67.3024 10.8279 66.7139 11.3874C66.1465 11.9254 65.7682 12.6355 65.5791 13.5177V23.1044H61.292V6.99751ZM83.3768 23.1044C82.4736 23.1044 81.7381 22.8246 81.1707 22.2651C80.6032 21.7057 80.3195 20.974 80.3195 20.0702V0.509585H90.8487C92.5295 0.509585 94.001 0.832367 95.2619 1.47793C96.5438 2.1235 97.5313 3.03804 98.2246 4.22158C98.9388 5.40516 99.2959 6.77157 99.2959 8.32092V14.6475C99.2959 17.4234 98.5928 19.5322 97.1841 20.974C95.7766 22.3942 93.7067 23.1044 90.9743 23.1044H83.3768ZM90.8487 19.1664C92.1934 19.1664 93.2129 18.7684 93.9062 17.9721C94.5994 17.1759 94.9467 16.0031 94.9467 14.4538V8.51459C94.9467 7.28802 94.5576 6.30895 93.7794 5.57727C93.0024 4.82415 91.9828 4.44753 90.7219 4.44753H84.6697V19.1664H90.8487ZM108.412 23.3626C107.087 23.3626 105.911 23.1044 104.88 22.5879C103.872 22.0499 103.084 21.2968 102.516 20.3284C101.97 19.3601 101.697 18.2411 101.697 16.9715V13.1949C101.697 11.9254 101.98 10.8063 102.548 9.838C103.116 8.84809 103.904 8.08426 104.912 7.54625C105.942 7.00823 107.119 6.73929 108.442 6.73929H111.28C112.603 6.73929 113.771 7.00823 114.779 7.54625C115.809 8.08426 116.608 8.84809 117.174 9.838C117.742 10.8063 118.026 11.9254 118.026 13.1949V16.9715C118.026 18.2411 117.742 19.3601 117.174 20.3284C116.608 21.2968 115.809 22.0499 114.779 22.5879C113.771 23.1044 112.593 23.3626 111.249 23.3626H108.412ZM111.185 19.586C111.963 19.586 112.582 19.3171 113.045 18.7791C113.507 18.2196 113.739 17.4987 113.739 16.6164V13.4854C113.739 12.6032 113.507 11.8931 113.045 11.3551C112.582 10.7956 111.973 10.5158 111.217 10.5158H108.505C107.749 10.5158 107.14 10.7956 106.678 11.3551C106.215 11.8931 105.983 12.6032 105.983 13.4854V16.6164C105.983 17.4987 106.215 18.2196 106.678 18.7791C107.14 19.3171 107.738 19.586 108.475 19.586H111.185ZM127.732 23.1044C125.882 23.1044 124.527 22.674 123.665 21.8132C122.803 20.9524 122.373 19.6183 122.373 17.8107V10.7418H119.599V6.99751H122.499V2.1235H126.659V6.99751H130.757V10.7418H126.659V17.6171C126.659 18.2196 126.765 18.6607 126.975 18.9405C127.206 19.2203 127.563 19.3601 128.047 19.3601H130.757V23.1044H127.732ZM138.4 23.3626C136.76 23.3626 135.437 22.943 134.428 22.1037C133.42 21.2645 132.915 20.1563 132.915 18.7791V17.5848C132.915 16.2291 133.44 15.1424 134.491 14.3247C135.542 13.4854 136.929 13.0658 138.652 13.0658H140.575C141.122 13.0658 141.71 13.1411 142.341 13.2918C142.971 13.4424 143.549 13.6468 144.075 13.9051V12.2266C144.075 11.6886 143.896 11.2582 143.538 10.9355C143.202 10.5911 142.75 10.419 142.183 10.419H139.472C138.883 10.419 138.41 10.5588 138.053 10.8386C137.696 11.1184 137.518 11.4949 137.518 11.9684H133.357C133.357 10.3974 133.913 9.1386 135.026 8.19181C136.162 7.22346 137.643 6.73929 139.472 6.73929H142.183C144.031 6.73929 145.524 7.24502 146.659 8.25637C147.793 9.24628 148.361 10.5697 148.361 12.2266V23.1044H144.39V21.1677C143.885 21.8348 143.266 22.3727 142.529 22.7816C141.794 23.1689 141.069 23.3626 140.355 23.3626H138.4ZM140.67 20.0057C141.447 20.0057 142.14 19.8013 142.75 19.3924C143.359 18.9835 143.801 18.4347 144.075 17.7462V17.1974C143.738 16.9392 143.266 16.7348 142.656 16.5842C142.067 16.4335 141.437 16.3582 140.765 16.3582H138.778C138.274 16.3582 137.864 16.4873 137.548 16.7456C137.233 17.0038 137.075 17.3481 137.075 17.7785V18.6177C137.075 19.0266 137.244 19.3601 137.58 19.6183C137.937 19.8765 138.4 20.0057 138.967 20.0057H140.67Z"
                            fill="white"
                        />
                    </svg>
                </Link>
            </div>

            {menuOpen && (
                <div className={`navbar-menu-items ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/matches">Список матчей</Link>
                        </li>
                        <li>
                            <Link to="/teams">Список команд</Link>
                        </li>
                        <li>
                            <Link to="/compare">Сравнение команд</Link>
                        </li>
                    </ul>
                    <button className="navbar-login-button">Вход</button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
