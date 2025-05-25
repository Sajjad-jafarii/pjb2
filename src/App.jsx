import { useState } from 'react'
import HeaderMain from './components/HeaderMain'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './styles/style.css';
import './styles/mobile.css';
import './styles/animate.css';
import './styles/super-classes.css';
import './styles/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<HeaderMain/>
<Services/>
<About/>
<Portfolio/>
<Testimonials/>
<Blog/>
<Contact/>
<Footer/>

    </>
  )
}

export default App
