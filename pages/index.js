import Head from 'next/head'
// import Image from 'next/image'

import Footer from "../components/footer/Footer"
import Hero from "../components/Heropage/Hero"
import NavBar from "../components/navBar/NavBar"

// import styles from '../styles/Home.module.css'
export default function Home() {
  return (
  
    <>
   
     <NavBar/>
      <Hero/>
      <Footer/>
    </>
  )
}
