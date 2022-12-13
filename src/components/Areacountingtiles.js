import React from 'react'
import award from '../assets/images/award.jpg'
import award1 from '../assets/images/award1.png'
import award2 from '../assets/images/award2.png'
import award3 from '../assets/images/award3.png'


const Areacountingtiles = ({villageName,noOfStudent}) => {
  return (
    <section className='list'>
        <div className='image_container'>
            <img src={award} alt="demko"/>
            <span>{noOfStudent}</span>
        </div>
        <span>{villageName}</span>                        
    </section>
  )
}

export default Areacountingtiles