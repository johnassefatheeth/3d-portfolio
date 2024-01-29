import React from 'react'
import { Link } from 'react-router-dom'

export const CTA = () => {
  return (
    <section>
        <p className='cta-text'>
            have aproject in mind? <br className='sm:block hidden' />
        let's build it
        </p>
        <Link to="/contact" className='btn'>contact</Link>
    </section>
  )
}
