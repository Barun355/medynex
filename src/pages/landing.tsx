import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Vision from '../components/Vision'
import Teams from '../components/Teams'
import Roadmap from '../components/Roadmap'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Chatbot from '../components/ChatBot'
import { FloatButton } from 'antd'

const Landing: React.FC = () => {
  return (
    <div className='h-full w-full'>
        <Header />
        <Hero />
        <Services />
        <Vision />
        <Roadmap />
        <Teams />
        <Footer />
        <Chatbot />
        <FloatButton.BackTop className='h-12 w-12 bottom-28' />
    </div>
  )
}

export default Landing
