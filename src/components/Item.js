import React from 'react'
import user from '../assets/images/user.png'

const Item = ({data}) => {
  console.log('from item components');
  const {id,name,middle_name,surname,area,stream,std,topper,university,achievement_details,achievement_image,college_name,profile_image} = data;
  let first_letter=name.substr(0,1);
  return (
    <section>
          <div className='front'>
            <h1>{first_letter}</h1>
            <div className='front_data'>
                <p>Hi, I'm {name} {middle_name} {surname} from {area}, pursuing {std} {stream} from {college_name} from {university}.</p>
            </div>
        </div>
        <div className='back'>
            <div className='profile_image'>
                <img src={profile_image} alt="student image"/>
            </div>
            <div className='profile_data'>
              <span>{std}</span><span>{stream}</span><span>{area}</span>
            </div>
        </div>
    </section>
  )
}

export default Item