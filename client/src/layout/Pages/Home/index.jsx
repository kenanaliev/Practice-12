import React from 'react'
import Navbar from '../../Navbar'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import Education from '../../../components/Education'
import Popular from '../../../components/Popular'
import RegisterSection from '../../../components/RegisterSection'
import OurServices from '../../../components/OurServices'
import Upcoming from '../../../components/Upcoming'
import Footer from '../../Footer'

const Home = () => {
  return (
    <>
    <Helmet><title>Home</title></Helmet>
    <Navbar></Navbar>
    <main>
     <Education></Education>
     <Popular></Popular>
     <RegisterSection></RegisterSection>
     <OurServices></OurServices>
     <Upcoming></Upcoming>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Home