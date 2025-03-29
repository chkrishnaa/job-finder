import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'

export default function HomePage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
      <Header></Header>
      <DreamJob></DreamJob>
      <Companies></Companies>
      <JobCategory></JobCategory>
      <Working></Working>
    </div>
  )
}
