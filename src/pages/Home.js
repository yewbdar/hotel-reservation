import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link}  from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRooms from '../component/FeaturedRooms'
function Home() {
    return (
        <>
        <Hero >
            <Banner title='Luxurious room' 
            subtitle='delux room start at $299'>
                <Link to='/rooms' className='btn-primary'>
                our room
            </Link>
            </Banner>
            
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

export default Home

