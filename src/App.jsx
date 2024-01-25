import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Lastbar from './components/Lastbar'
import MyFooter from './components/MyFooter'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/services'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Lastbar/>
      <MyFooter/>
    </>
  )
}

export default App
