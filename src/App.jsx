
import './App.css'
import Carousel from './sections/Carousel/Carousel'
import Faq from './sections/FAQ/Faq'
import CardSection from './sections/carSection/CardSection'
import Footer from './sections/footer/Footer'
import Navbar from './sections/navbar/Navbar'
import NumberCard from './sections/numberCard/NumberCard'
import SubFooter from './sections/subFooter/SubFooter'
import Subscribe from './sections/subscribe/Subscribe'


function App() {

  return (
    <>
    <Navbar />
    <Carousel />
    <CardSection />
    <NumberCard />
    <Faq />
    <Subscribe />
    <Footer />
    <SubFooter />
    </>
  )
}

export default App
