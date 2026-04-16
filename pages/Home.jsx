import React from 'react'
import Header from '../components/Header'
import Aboutas from '../components/Aboutas'
import ServiceH from '../components/ServiceH'
import PriceH from '../components/priceH'
import Gellary from './Gellary'
import Team from './Team'
import Testimonial from './testimonial'

import Footer from '../components/Footer'
import OnlineH from '../components/OnlineH'

export default function Home() {
  return (
    <div>
      <Header/>
      <Aboutas/>
      <ServiceH/>
      <OnlineH/>
      <PriceH/>
      <Gellary/>
      <Team/>
      <Testimonial/>
      
      <Footer/>
    </div>
  )
}
