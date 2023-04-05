import React from 'react'

const Teammember = (props) => {
    const {name,middlename,surname,resident,position,contact} = props;
  return (
    <div className='card'>
        <div className='image_container'>
          <div className='card_image'>
            <img src="https://anilkapse1.github.io/kapsecode/assets/user-eaef6175.png" alt="username"/>
          </div>
        </div>
        <div className='card_details'>
        <h4>{name} {surname} - {position}</h4>
        <h5>{resident}</h5>
        <h6>{contact}</h6>
        </div>
    </div>  
)
}

export default Teammember