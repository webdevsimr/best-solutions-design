import React from 'react'
import HeroSection from './hero-section'
import CustomersWorkflows from './customers-workflows'
import GoodCompany from './good-company'
import ProductSolutions from './product-solutions'
import SliderSection from './team-slider-section'
import Feedback from './feedback'
import StayLoop from './stayLoop'

const Homepage = () => {
  return <>
    <HeroSection/>
    <CustomersWorkflows/>
    <GoodCompany/>
    <ProductSolutions/>
    <SliderSection/>
    <Feedback/>
    <StayLoop/>
  </>
}

export default Homepage