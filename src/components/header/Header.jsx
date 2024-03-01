import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import dark_light from '../../assets/images/dark-light.png';
import control from '../../assets/images/controls.png';
import vk from '../../assets/images/vk.png';
import fb from '../../assets/images/fb.png';
import linkedin from '../../assets/images/linkedin.png';
import backtop from '../../assets/images/backtop.png';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevDropdownOpen => !prevDropdownOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const scrollThreshold = 300;
    setShowBackToTop(scrollPosition > scrollThreshold);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <header>
        <div className={`container ${darkMode ? 'dark' : ''}`}>
          <div className={`container ${darkMode ? 'dark' : ''}`}>
          <nav className={`navbars ${darkMode ? 'dark' : ''}`}>
            <div className='logos'>
              <img src={logo} alt='' />
            </div>
            <div className='navbar__menu'>
              <ul className='nav__menu'>
                <li className={`dropdown ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                  Продукция
                  {dropdownOpen && (
                    <ul className='dropdown__content'>
                      <li>Ламинатные тубы</li>
                      <li>Экструзионные тубы</li>
                      <li>Другая упаковка</li>
                    </ul>
                  )}
                </li> 
                <li><hr /></li>
                <li>Сертификаты</li>
                <li><hr /></li>
                <li>Наша команда</li>
                <li><hr /></li>                
                <li>О нас</li>
                <li><hr /></li>
                <li>Новости</li>
                <li><hr /></li>
                <li>Вакансии</li>
                <li><hr /></li>
                <li>Контакты</li>
              </ul>
              <div className='nav__mobile'>
                <img src={menu} alt='' />
              </div>
            </div>
            <div className={`dark__mode ${darkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
              <img src={dark_light} alt='' />
            </div>
          </nav>
        </div>
        </div>
      </header>
      <section>
        <div className={`container ${darkMode ? 'dark' : ''}`}>
          <div className={`container ${darkMode ? 'dark' : ''}`}>
          <div className='katalog'>
            <div className='katalog__text'>
              <h4>LEANGROUP - тубы и этикетки</h4>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className={`btn katalog__btn ${darkMode ? 'dark' : ''}`}>Каталог</button>
              <div className='control'>
                <img src={control} alt='' />
              </div>
            </div>
            <div className='katalog__brend'>
              <img src={vk} alt='' />
              <img src={fb} alt='' />
              <img src={linkedin} alt='' />
            </div>
          </div>
        </div>
        </div>

      </section>
              <div className='top'>
                {showBackToTop && (
        <div className="back-to-top" onClick={handleBackToTop}>
          <img src={backtop} alt="Yuqoriga qaytish" />
        </div>
      )}
              </div>
      
    </>
  );
}

export default Header;