import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Testinomials from '../LandingPage/Testinomials'
import Subscribe from '../LandingPage/Subscribe'
import Footer from '../Footer/Footer'

export default function HomePage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
      <Header></Header>
      <DreamJob></DreamJob>
      <Companies></Companies>
      <JobCategory></JobCategory>
      <Working></Working>
      <Testinomials></Testinomials>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  )
}
