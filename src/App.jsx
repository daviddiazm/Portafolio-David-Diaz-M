import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import ListaDeTecnologias from '../public/jsons/ListaDeTecnologias.json';
import { useState } from 'react';
import Button from './components/Button/Button';
import Projects from '../public/jsons/ProjectsList.json'
import CertificationCard from './components/CertificationCarousel/CertificationCard';
import Certifications from '../public/jsons/CertificationsList.json'
import CardProject from './components/CardProject.jsx/CardProject';

function App() {

  const [position, setPosition] = useState(0)
  const [count, setCount] = useState(0)


  const lenguages = ["Angular", "React", "Vue"]

  const nextPosition = () => {
    if (position < Certifications.length - 1) setPosition(position + 1)
    if (position === Certifications.length - 1) setPosition(0)
  }

  const lastPosition = () => {
    if (position <= Certifications.length - 1 && position !== 0) setPosition(position - 1)
    if (position === 0) setPosition(Certifications.length - 1)
  }


  return (
    <div className='app'>

    <img src="/imgs/png_img/Group 80.png" alt="" class="shape__1" />
    <img src="/imgs/png_img/Frame 3529.png" alt="" class="shape__2" />
    <img src="/imgs/png_img/Ellipse.png" alt="" class="shape__3" />
    <img src="/imgs/png_img/Ellipse.png" alt="" class="shape__4" />
    <img src="/imgs/png_img/Ellipse.png" alt="" class="shape__5" />
    <img src="/imgs/png_img/Frame 3529.png" alt="" class="shape__6" />

      <Header />
      <section className="cards">
        <div className="cards__container">
          {ListaDeTecnologias.map((e) => {
            return <Card icon={e.icon} textOfTec={e.text} key={e.icon} />
          })}
        </div>
      </section>


      {/* certificados */}
      <section className='landing'>
        <div className='certifications'>
          <CertificationCard
            certification={Certifications[position]}
            moveNext={nextPosition}
            movePrev={lastPosition}
          />
          <div className="btn-certifications">
            <button className='btn-certification' onClick={() => { lastPosition() }} > {"<"} </button>
            <button className='btn-certification' onClick={() => { nextPosition() }} > {">"} </button>
          </div>
        </div>
      </section>

      <section className='Projects__section'>
        {/* filto para lengujes */}
        {/* <select name="" id="">
          <option value="">All</option>
          {lenguages.map((lenguage, index) => {
            return <option key={index} value={index}>{lenguage}</option>
          })}
        </select> */}

        <div className="Projects__container">
          {Projects.map((project, index) => (
            <CardProject project={project} key={index} />
          ))}
        </div>
      </section>


      {/* contact */}
      <section className="contact">
        <div className="contact__box">
          <div className="box">
            <h2>Contact me!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, et ipsum dolorem inventore veritatis
              porro.</p>
            <Button text={"Click here"} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
