import './about.css'
import ImageMe from '../../assets/me-about.jpg'
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
              <small>B.Tech Graduate</small>
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

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ad voluptatum, non enim quo quos ipsum sequi voluptate voluptas, 
             itaque neque aliquid magni dolor eos. Voluptas.</p>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
   
  )
}

export default About
