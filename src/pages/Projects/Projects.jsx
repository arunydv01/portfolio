import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { GrProjects } from "react-icons/gr";
import ImageOne from "../../images/multicast.jpg";
import ImageTwo from "../../images/quicksell.png";
import ImageThree from "../../images/portfolio.png";
import ImageFour from "../../images/booksearch.png";
import "./projects.css";


const Projects = () => {
  const [hoverValue, setHoverValue] = useState(null);
  const projectsData = [
    {
      id: 1,
      name: "Multicast Streaming App",
      image: ImageOne,
      link: 'https://github.com/arunydv01/Multicast-Streaming-Application'
    },
    {
      id: 2,
      name: "KanBan Board",
      image: ImageTwo,
      link: 'https://github.com/arunydv01/quicksell-frontend'
    },
    {
      id: 3,
      name: "Portfolio",
      image: ImageThree,
      link: 'https://github.com/arunydv01/portfolio'
    },
    {
      id: 4,
      name: "FindMyBook",
      image: ImageFour,
      link: 'https://github.com/arunydv01/booksearch-app'
    }
  ]
  function handleHover(index){
    setHoverValue(index);
  }
  
  
  return (
    <section id='projects' className='projects'>
      <PageHeader
      headerText = "Projects"
      icon = {<GrProjects size={30}/>}
      />
      <div className="projects-cards">
        {
          projectsData.map((item, index) => (
            <div 
              className = "projects-cards-item" 
              key = {item.id}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              >
              <div className='projects-cards-item-img'>
                <a>
                  <img src={item.image} alt="dummy-data" />
                </a>
              </div>
              <div className='overlay'>
                {index === hoverValue &&(
                    <div>
                      <p>{item.name}</p>
                      <button>
                        <a href={item.link}>Github</a>
                      </button>
                    </div>
                )}
              </div>
            </div>
          ))
        }
      </div>
      
    </section>
  )
}

export default Projects