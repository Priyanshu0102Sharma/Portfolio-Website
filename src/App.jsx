import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Aos from "aos"
import "aos/dist/aos.css"
import { ScrollToTop } from 'react-simple-scroll-up';
// import { ScrollToTop } from 'react-simple-scroll-up';



function App() {




  return (
    <>
    {/* <ScrollToTop {}/> */}
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
