import React from 'react'
import award from '../assets/images/award.jpg'
import location from '../assets/images/location3.png'


const Areacountingtiles = ({villageName,noOfStudent}) => {
  return (
    <section className='list'>
        <div className='image_container'>
            <img src={location} alt="demko"/>
            <span>{noOfStudent}</span>
        </div>
        <span>{villageName}</span>                        
    </section>
  )
}

export default Areacountingtiles