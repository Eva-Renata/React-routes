import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { Home } from './Components/Pages/Home/Home'
import { About } from './Components/Pages/About/About'
import { Gallery } from './Components/Gallery/Gallery';
import { Greetings } from './Components/Pages/Greetings/Greetings';
import { Counter } from './Components/Pages/Counting_click/Counting';
import { Formular } from './Components/Pages/Kontakt formular/KontaktFormular'

const arrImages = [
    
    { 
      id: 1,
      image: 'https://api.mediehuset.net/images/sdg/photos/1.jpg', 
      name: 'Afskaf fattigdom'
    },
    { 
      id: 2,
      image: 'https://api.mediehuset.net/images/sdg/photos/2.jpg', 
      name: 'Stop sult'
    },
    
    { 
      id: 3,
      image: 'ColorWheel.png', 
      name: 'Test'
    }
]

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/greetings" element={<Greetings />}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path="/formular" element={<Formular />}/>
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;