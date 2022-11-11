import React from 'react'
import user from '../assets/images/user.png'

const Item = () => {

  return (
    <section>
          <div className='front'>
            <h1>A</h1>
            <div className='front_data'>
                <p>Hi, I'm Anil Kapse, as a front-end developer, my job is essentially to turn designs into reality via code and enable user to interact with a data in a safe and user-friendly way.</p>
            </div>
        </div>
        <div className='back'>
            <div className='profile_image'>
                <img src={user} alt="demo"/>
            </div>
        </div>
    </section>
  )
}

export default Item