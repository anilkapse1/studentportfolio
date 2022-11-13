import React from 'react'
import user from '../assets/images/user.png'

const Item = () => {

  return (
    <section>
          <div className='front'>
            <h1>A</h1>
            <div className='front_data'>
                <p>Hi, I'm Anil R Kapse, pursuing 11th commeerce from J G Sarvajnik high school from Mumbai university.</p>
            </div>
        </div>
        <div className='back'>
            <div className='profile_image'>
                <img src='https://kapsecode.com/wp-content/uploads/2020/12/69381782.jpg' alt="demo"/>
            </div>
            <div className='profile_data'>
              <span>11</span><span>science</span><span>khattalawada</span>
            </div>
        </div>
    </section>
  )
}

export default Item