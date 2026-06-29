import './home.css'
import Me from '../../assets/ww.png'
import CV from '../../assets/C.v..pdf'
import HomeSocials from './HomeSocials'
function Home() {
  return (
    <div className="home">
    
        <div className="container home_container">
                
        <h4>Hello I'm </h4>
        <h1>Marwan Ayman</h1>
        <h4 className="text-light">Frontend Developer</h4>

          <div className="btns">
            <a href={CV} download className="btn">
              Download Cv
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>

          <div className="me">
            <img src={Me} alt="me" />

        </div>

        <a href="#about" className="scroll_down">Scroll Down</a>

        <HomeSocials />
    </div>
    </div>
  )
}

export default Home
