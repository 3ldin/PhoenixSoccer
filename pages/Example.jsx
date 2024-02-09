import React from 'react'
import SawyerWidget from '@/components/SawyerWidget'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const Example = () => {
  return (
    <div>
      <Navbar />
      <SawyerWidget />
      <div className='mx-auto text-center'>
        <h1 className='mb-4 pt-14 text-6xl font-bold text-white drop-shadow-xl'>Procedures and Policy</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Example