import './about.css'
import ImageMe from '../../assets/marwan.png'
import {VscFolderLibrary} from "react-icons/vsc"
import { FaGraduationCap } from "react-icons/fa6";
import { GoStack } from "react-icons/go";
function About() {
  return (
    <section className='about' id='about'>
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <div className="about_card">
              <FaGraduationCap className='about_icon'/>
              <h5>Education</h5>
              <small>Borg El Arab Technology University </small>
            
            </div>

            <div className="about_card">
              <GoStack className='about_icon'/>
              <h5>Tech Stack</h5>
              <small>React . Javascript</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>6 completed</small>
            </div>

          </div>

          <p>Hi, I'm Marwan ,  a graduate of Borg El Arab Technology University with a degree in Information Technology.
             I'm a passionate Front-End Developer who enjoys building modern, responsive, and user-friendly web applications.
              I specialize in HTML, CSS, JavaScript, Bootstrap, and React.js, and I'm always eager to learn new technologies and improve my skills by working on real-world projects.
              My goal is to create clean, efficient, and engaging user experiences.</p>
        </div>
      </div>
    </section>
   
  )
}

export default About
