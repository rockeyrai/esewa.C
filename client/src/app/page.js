

import PopularService from '@/components/content1/page'
import Contents from '@/components/content1/page'
import NewService from '@/components/content2/page'
import VotingEvents from '@/components/content3/page'
import Insurance from '@/components/content4/page'
import AntiVirus from '@/components/content5/page'
import Ecommerce from '@/components/content6/page'
import Hero from '@/components/hero/page'
import React from 'react'

const Main = () => {
  return (
    <div className='bg-[#f5f7fd] h-[auto]'>
      <Hero/>
      <PopularService/>
      <NewService/>
      <VotingEvents/>
      <Insurance/>
      <AntiVirus/>
      <Ecommerce/>
    </div>
  )
}

export default Main
