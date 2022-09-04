import Head from 'next/head'
import Footer from "../components/footer/Footer"
import Hero from "../components/Heropage/Hero"
import NavBar from "../components/navBar/NavBar"

export default function Home() {
  return (
  
    <>
   
     <NavBar/>
      <Hero/>
      <Footer/>
    </>
  )
}
