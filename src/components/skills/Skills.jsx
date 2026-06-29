import './skills.css'
import CSS from "../../assets/css3.svg"
import HTML from "../../assets/html.svg"
import JS from "../../assets/javascript.svg"
import Tailwind from "../../assets/tailwindcss.svg"
import Bootstrap from "../../assets/bootstrap.svg"
import React from "../../assets/react.svg"


const SkillsData = [
  { id: 1, name: "HTML", icon: HTML, desc: "Structure content"},
  { id: 2, name: "CSS", icon: CSS , desc: "Visual styling"},
  { id: 3, name: "JavaScript", icon: JS , desc:"Dynamic interaction"},
  { id: 4, name: "React", icon: React , desc:"UI components" },
  { id: 5, name: "Tailwind CSS", icon: Tailwind , desc:"Repaid styling"},
  { id: 6, name: "Bootstrap", icon: Bootstrap, desc: "Responsive design" }
];


function Skills() {
  return (
    <section id='skills'>
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, name, icon, desc }) => (
          <article className='card_skill' key={id}>
            <div className="icon">
              <img src={icon} alt={name} />
            </div>
            <div className="content">
              <h4>{name}</h4>
              <p className='text_light'>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
