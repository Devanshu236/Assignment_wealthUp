import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero'
import Slider from './components/slider'
import Footer from './components/footer'
import Todo from './components/todo'

export default function Home() {
  return (
    <main >
      <div className="containerr">
        <Hero></Hero>
        <Slider></Slider>
        <Footer></Footer>
        <Todo></Todo>

      </div>
      

    
    </main>
  )
}
