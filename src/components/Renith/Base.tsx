import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Base = () => {
    return (
        <div className='h-full w-full overflow-x-hidden'>
            <Header />
            <hr className='w-[92%] mr-auto text-slate-600 bg-slate-700' />
            <Hero />
            {/* <Body /> */}
        </div>
    )
}

export default Base