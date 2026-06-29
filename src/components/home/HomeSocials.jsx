import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import './home.css'


function HomeSocials() {
  return (
    <div className="home_socials">
      <a href="https://www.facebook.com/share/1G8nbLrfft/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
      <a href="https://www.instagram.com/marwann_ayman10?igsh=MW51a2lvcDV3eXJsMA==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/Marwanayman10" target="_blank" rel="noopener noreferrer">
        <FaGithub /> 
      </a>
    </div>
  )
}

export default HomeSocials;


