import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Recursos from '../public/jsons/Recursos.json';

function App() {

  return (
    <>
      <Header />
      <section className="cards">
        <div className="cards__container">
          {Recursos.map((e)=> {
            return <Card icon={e.icon} textOfTec={e.text}/>
          })}
        </div>
        
      </section>
    </>
  )
}

export default App
