import "./projects.css";
import proj1 from "../../assets/project1.png";
import proj2 from "../../assets/project2.png";
import proj3 from "../../assets/project3.png";

const portfolioData = [


  {
    id: 2,
    image: proj2,
    title: "M-Online Courses",
    github: "https://github.com/Marwanayman10/M-online-courses.git",
    demo: "https://m-online-courses-cyan.vercel.app",
  },

  {
    id: 3,
    image: proj3,
    title: "Foodera Restaurant",
    github: "https://github.com/Marwanayman10/Ecommerce.git",
    demo: "https://ecommerce-three-omega-74.vercel.app",
  },

    {
    id: 1,
    image: proj1,
    title: "Meditro",
    github: "https://github.com/Marwanayman10/Meditro.git",
    demo: "https://meditro-mu.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="top_section">
        <h5>What I Have Built</h5>
        <h2>My Projects</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>

            <div className="portfolio_item_btns">
              <a href={github} target="blank" className="btn">
                GitHub
              </a>
              <a href={demo} target="blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
