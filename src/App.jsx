
import './App.css'
import Footer from './Components/Footer'
import GetStarted from './Components/GetStarted'
import Navbar from './Components/Navbar'
import Questions from './Components/Questions'
import SectionFour from './Components/SectionFour'
import SectionOne from './Components/SectionOne'
import SectionThree from './Components/SectionThree'
import SectionTwo from './Components/SectionTwo'
import Testimonial from './Components/Testimonial'

function App() {
 

  return (
    <div className='bg-white w-5/6 h-full mx-auto font-inter scroll-smooth'>
     <Navbar/>
      <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
     <Testimonial/>
     <Questions/>
     <GetStarted/>
     <Footer/>
    </div>
  )
}

export default App
