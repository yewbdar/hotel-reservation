import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link } from 'react-router-dom'
function Error() {
    return (
        <Hero >
         <Banner title='404' subtitle='Page not found'>
         <Link to='/' className='btn-primary'>Return home</Link>
         
         </Banner>
        </Hero>
    )
}

export default Error
