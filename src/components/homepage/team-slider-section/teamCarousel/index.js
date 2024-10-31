import Image from 'next/image'
import React from 'react'


const TeamCarousel = ({ imgName, heading, description }) => {
    return <div className='TeamCarousel'>
        <Image src={imgName} alt='image not found' />
        <div className='TeamCarousel_textContent'>
            <h5>{heading}</h5>
            <p>{description}</p>
        </div>
    </div>
}

export default TeamCarousel