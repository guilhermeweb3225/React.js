import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"element={ <Home/> }></Route>
        <Route path="/About"element={ <About/> }></Route>
        <Route path="/Projects"element={ <Projects/> }></Route>
        <Route path="/Contact"element={ <Contact/> }></Route>
      </Routes>
    </Router>
  )
}

export default App
