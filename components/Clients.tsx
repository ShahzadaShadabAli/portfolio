import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials, companies } from '@/data'

const Clients = () => {
  return (
      <div className='py-20' id='testimonials'>
        <h1 className='heading text-neutral-200'>
          Kind words from {' '}
          <span className='text-purple'>satisfied clients</span>
        </h1>
        <div className="flex flex-col text-neutral-200 items-center">
          <div className="h-[50vh] gap-10 rounded-md flex flex-col md:h-[30rem] antialiased items-center relative overflow-hidden max-lg:mt-10 mt-5">
          <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
          />
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16'>
            {companies.map(({id, img, name, nameImg}) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className='w-5 md:w-10' />
                <img src={nameImg} alt={name} className='w-20 md:w-24' />
              </div>
            ))}
          </div>
          </div>
      </div>
      </div>
  )
}

export default Clients
