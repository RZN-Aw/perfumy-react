import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import Search from './Search.jsx'
import Product from './product.jsx'
import About from './About.jsx'
import Footer from './footer.jsx'
function App() {

return(
  <>
  <Navbar/>
  <Search/>
  <Product/>
  <About/>
  <Footer/>
  </>
)
  }

export default App
