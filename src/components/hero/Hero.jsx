import './hero.scss'
import play from '../../assets/images/video__play.png'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import control from '../../assets/images/controls.png'
import ser1 from '../../assets/images/1.png'
import ser2 from '../../assets/images/2.png'
import ser3 from '../../assets/images/3.png'
import ser4 from '../../assets/images/4.png'
import ser5 from '../../assets/images/5.png'
import pro6 from '../../assets/images/6.png'
import pro7 from '../../assets/images/7.png'
import pro8 from '../../assets/images/8.png'
import pro9 from '../../assets/images/9.png'
import pro10 from '../../assets/images/10.png'
import people from '../../assets/images/people.png'
import phone from '../../assets/images/phone.png'




function Hero() {
  
  return (
    <>
      <section>
        <div className='container'>
          <h1>О компании <big>LEANGROUP</big> </h1>
          <div className='compania'>
            <div className='compania__videos'>
              <div className='compania__video'>
                <img src={play} alt="" />
              </div>
            </div>
            <div className='compania__text'>
              <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб. <br /> <br />

Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции. <br /> <br />

С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Качество продукции подтверждают <big>сертификаты</big></h1>
          <div className='sertifikatlar'>
            <div className='ser-left'> <img src={left} alt="" /></div>
            <div className='sertifikat'>
              <div className='setifikat__img'>
                <img src={ser1} alt="" />
              <img src={ser2} alt="" />
              <img src={ser3} alt="" />
              <img src={ser4} alt="" />
              <img src={ser5} alt="" />
              </div>
              <div className='control'>
                <img src={control} alt="" />
              </div>
            </div>
            <div className='ser-right'><img src={right} alt="" /></div>
          </div>
          
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Наша <big>продукция</big></h1>
          <div className='products'>
            <div className='products__btns'>
              <button className='btns'>Ламинатные тубы</button>
              <button className='btns'>Экструзионные тубы</button>
              <button className='btns'>Другая упаковка</button>

            </div>
            <div className='product__img'>
              <img src={pro6} alt="" />
              <img src={pro7} alt="" />
              <img src={pro8} alt="" />
              <img src={pro9} alt="" />
              <img src={pro10} alt="" />
            </div>
            <div className='product__btn'>
              <button className='btn'>Перейти в каталог</button>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className='informatsiya'>
            <div className='informatsiya__form'>
              <h1>Получить подробную информацию</h1>
              <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
              <form action="#">
                <div>
                  <div><img src={people} alt="" /> <input type="text" /></div>
                  <div><img src={phone} alt="" /> <input type="phone" name="" id="" /></div>
                </div>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Hero