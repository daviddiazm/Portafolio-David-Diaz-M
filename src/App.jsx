import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import ListaDeTecnologias from '../public/jsons/ListaDeTecnologias.json';
import ProjectsCarousel from './components/ProjectsCarousel/ProjectsCarousel';
import { useState } from 'react';

function App() {

  const [position, setPosition] = useState(0)
  const [count, setCount] = useState(0)

  const cosas = [
    {
      projectName: "Pokedex App",
      projecImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem!",
    },
    {
      projectName: "Rick And MorTy App",
      projecImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshIlTW5LsRTn6fR4dMogCRemo8J6N27-NmuN8KAk80TCKiScM4cxiNzZ6G0I9I7-pt1Y&usqp=CAU",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem!",
    },
    {
      projectName: "Weather App",
      projecImg: "https://1.bp.blogspot.com/-RgtZb2h1f9Y/XIElskgH8sI/AAAAAAAAIbw/NlnGAhGWwpU2iOc0ZGiZjia3O0gFvQlNACLcBGAs/s1600/weather.png",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem!",
    },
  ]

  const nextPosition = () => {
    if (position < cosas.length - 1) setPosition(position + 1)
    if (position === cosas.length - 1) setPosition(0)
  }

  const lastPosition = () => {
    if (position <= cosas.length - 1 && position !== 0) setPosition(position - 1)
    if (position === 0) setPosition(cosas.length - 1)
  }


  return (
    <>
      <Header />
      <section className="cards">
        <div className="cards__container">
          {ListaDeTecnologias.map((e) => {
            return <Card icon={e.icon} textOfTec={e.text} key={e.icon} />
          })}
        </div>
      </section>

      <section className='landing'>
        <ProjectsCarousel nameProject={cosas[position].projectName} projectDescription={cosas[position].projectDescription} projectImg={cosas[position].projecImg} />
        <div className='landing__btns'>
          <button onClick={lastPosition}> {"<-"} </button>
          <button onClick={nextPosition}> {"->"} </button>
        </div>
      </section>

    </>
  )
}

export default App
