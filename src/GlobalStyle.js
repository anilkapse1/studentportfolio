import {createGlobalStyle} from 'styled-components';
import itembg from './assets/images/itembg.png'


export const GlobalStyle=createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none !important;
  text-transform: capitalize;
  transition: 0.2s linear;
}

html {
  font-size: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 8.5rem;
}
html::-webkit-scrollbar {
  width: .2rem;
}
html::-webkit-scrollbar-track {
  background-color: #fff;
}
html::-webkit-scrollbar-thumb {
  background: purple;
  border-radius: 5rem;
}

img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

body{
    background-color:${({theme})=>theme.colors.text6};
}

.common_button{
    background-color:${({theme})=>theme.colors.text7}!important;
    color:white!important;
}

.common_margin{
  margin-top:20px;
  margin-bottom:100px;

}

{/*Style for item*/}
.item_container{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;


}

.item_container section{
  flex:0 1 30%;
  border-radius: 10px;
  margin: 25px 25px 0px 0px;
  position: relative;
  overflow: hidden;
  height: 240px;
  -webkit-box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
  box-shadow: 0 6px 16px rgb(52 105 203 / 16%);

  background-image:url(${itembg});
  background-size: contain;
  background-color: rgb(106,106,179,.5);
  background-repeat: no-repeat;
  background-position: right;
}




.item_container section .front{
  padding: 1rem;
  color: #fff;
  -webkit-clip-path: circle(37% at 0% 0%);
          clip-path: circle(37% at 0% 0%);
  border-radius: 10px;
  -webkit-transition-property: -webkit-clip-path;
  transition-property: -webkit-clip-path;
  transition-property: clip-path;
  transition-property: clip-path, -webkit-clip-path;
  -webkit-transition-duration: 1s;
          transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-out;
          transition-timing-function: ease-in-out;
      width: 100%;
    height: 100%;

    background-image:url(${itembg});
  background-size: contain;
  background-color: rgb(106,106,179,.5);
  background-repeat: no-repeat;
  background-position: right;

}

.item_container section .front .front_data{
  visibility: hidden;
  -webkit-transition: visibility 1s ease-in-out;
  transition: visibility 1s ease-in-out;
}

.item_container section:hover .front {
  -webkit-clip-path: circle(75% at 50% 50%);
          clip-path: circle(75% at 50% 50%);
}

.item_container section:hover .front_data{
  visibility:visible;
}

.item_container section .back{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  padding: 1rem;
}

.item_container section .back .profile_image{
  width: 115px;
  height: 115px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  }

.item_container section .back .profile_image img{
  height:100%;
  
}

.item_container section:hover .back {
  -webkit-transform: scale(0);
          transform: scale(0);
}

.item_container section .back .profile_data{
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 27px;
  text-align:center;
} 

.item_container section .back .profile_data span{
  color:${({theme})=>theme.colors.text7};
  padding: 0px 6px;
  position: relative;
  font-size:14px;
  
} 



.item_container section .back .profile_data span:not(:last-child)::before{
  content:'';
  position:absolute;
  width:5px;
  height:5px;
  background-color:#8a7e8d;
  border-radius:50%;
  top:10px;
  right:-3px;
}

`

