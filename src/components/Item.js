import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import boy from '../assets/images/male.png'
import girl from '../assets/images/female.png'
import toper from '../assets/images/topper.png'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const Item = ({data}) => {
  console.log(data);

  const {id,name,middle_name,surname,gender,area,stream,std,topper,university,achievement_details,achievement_image,college_name,profile_image} = data;
  let first_letter=name.substr(0,1);
  return (
     <section>
        <span className='topper'>
          {topper && <img src={toper} alt="demo"/>}
        </span>  
        
          <div className='front'>
            <h1>{first_letter}</h1>
            <div className='front_data'>
                <p>Hi, I'm {name} {middle_name} {surname} from {area}, pursuing {std} {stream} from {college_name} from {university} university.</p>
            </div>
        </div>
        <div className='back'>
            <div className='profile_image'>
                {gender==="boy"?<img src={boy} alt="student image"/>:<img src={girl} alt="girl student profile pic"/>}
            </div>
            <div className='profile_data'>
            <span>{name} {surname}</span><span>{stream}</span><span>{area}</span>
            </div>
        </div>
    </section>

  )
}

export default Item