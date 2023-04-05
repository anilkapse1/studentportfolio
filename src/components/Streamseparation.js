import React from 'react'
import Typography from '@mui/material/Typography';
import Item from './Item';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Streamseparation = ({data,id,groupName}) => {
    console.log("item page--------------");
    console.log(`id:${id} group name:${groupName} length:${data.length}`);
    console.dir(data);

    const  Streamwrapper=styled.div`
     h3{
        color:${({theme})=>theme.colors.headeractive};
        font-family:inherit;
        margin-bottom:20px;
        margin-top:0px!important;
      }
      span{
        color:${({theme})=>theme.colors.text7};
        position: relative;
        font-size:14px;
      }

        .count_head{
            display:flex;
            align-items:center;
            .count_stream{
                width:35px;
                height:35px;
                display:inline-block;
                margin-left:20px;
                display:grid;
                place-items: center;
                border-radius: 50%;
                background-color: rgb(106,106,179,.5);
                color:white;
                font-weight:bold;
                
            }
        }
        .item_container{
            flex:none;
            justify-content:start;
            display:block;
            margin-bottom:100px;
            .slick-track{
                margin-left:initial;
            }
            .slick-slide > div{
                margin:0px 10px;
            }
            .slick-list{
                margin:0px -10px;
            }
        }

    `

    const Settings={
        dots:true,
        infinite:false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:3,
        initialSlide:0
    }

    return (
    <Streamwrapper>
        <Typography variant="h3" className='mt-3'>{groupName}</Typography>
        <span className='count_head'>
            total no of student: <span className='count_stream'>{data.length}</span>
        </span>
        
        <div className="item_container">
        <Slider {...Settings}>

        {
            data.map((val,idx)=>{
                return (
                    <Item key={idx} id={idx} data={val} />
                )
            })
        }
        </Slider>
        </div>


    </Streamwrapper>
  )
}

export default Streamseparation