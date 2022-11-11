import React from 'react'
import styled from 'styled-components'

const Skewc = () => {
  const Skew1 = styled.section`
  width:100%;
 height:100px;
 position:absolute;
 left:0px;
 bottom:101px;
 right:0px;
 background: linear-gradient(to left top, #e1e1e1  49%, #f8f8f8 50%);
 
 `;
 const Skew2 = styled.section`
 width:100%;
height:100px;
position:absolute;
left:0px;
bottom:0px;
right:0px;
background: linear-gradient(to left bottom, #5a1466  49%, white 50%);

`;
return (
    <>
        <Skew1></Skew1>
        <Skew2></Skew2>
    </>
  )
}

export default Skewc


