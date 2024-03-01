import './footer.scss'
import logo from '../../assets/images/logo.png';
import vk from '../../assets/images/vk.png';
import fb from '../../assets/images/fb.png';
import linkedin from '../../assets/images/linkedin.png';

function Footer() {
  return (
    <div>
      <footer>
        <div className='container'>
          <div className='footers'>
            <div className='logo__foot'>
              <img src={logo} alt="" />
              <div className='brend__foot'>
                <img src={vk} alt="" />
                <img className='imgs' src={fb} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
            <hr />
            <div className='footer__text'>
              <div className='foot1'>
                <h3>Продукция</h3>
                <p>Ламинатные тубы</p>
                <p>Экструзионные тубы</p>
                <p>Другая упаковка</p>
              </div>
              <div className='foot1'>
                <h3>Компания</h3>
                <p>О нас</p>
                <p>Наша команда</p>
                <p>Сертификаты</p>
              </div>
              <div className='foot1'>
                <h3>Разделы</h3>
                <p>Контакты</p>
                <p>Новости</p>
                <p>Вакансии</p>
              </div>
              <div className='foot2'>
                <span>
                  <h4>Беларусь</h4>
                <p>+375 (17) 270 53 77</p>
                <p>+375 (17) 270 53 78</p>
                </span>
                <span>
                  <h4>Москва</h4>
                <p>+375 (17) 270 53 78</p>
                <p>+7 (495) 280 73 44</p>
                </span>
              </div>
              <div className='foot2'>
                <span>
                  <h4>Европа</h4>
                <p>+48 73 1111 044</p>
                </span>
                <span>
                  <h4>Екатеринбург</h4>
                <p>+7 (343) 346 82 06</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer