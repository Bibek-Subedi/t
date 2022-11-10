import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import Me from '../assets/Images/s.png';
import './Intro.css'
const Box = styled(motion.div)`
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:50vw;
        height:70%;
        display:flex;
       
        background:linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props=>props.theme.text} 50%)bottom,
            linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props=>props.theme.text} 50%)top;
             background-repeat: no-repeat;
        background-size: 100% 2px;
            border-left:1px solid ${props => props.theme.body};
            border-right:1px solid ${props => props.theme.text};

            z-index:1;


`

const SubBox = styled.div`
                width:50%;
                position:relative;
                display:flex;
                .pic{
                    position:absolute;
                    bottom:-170px;
                    left:50%;
                    transform:translate(-50%,-5%);
                    width:190%;
                    height:210%;
                }

`
const Text = styled.div`
            font-size:calc(1em+ 1.5vw);
            color:${props => props.theme.body};
            padding:2rem;
            cursor:pointer;
            
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
`
const Intro = () => {
  return (
    <>
    <Box
      initial={{height:0}}
      animate={{height:'55vh'}}
      transition={{type:'spring',duration:2,delay:1}}

    
    >
        <SubBox>
            <Text>
                <h1 >!Happy Birthday!</h1>
                <h3 className='typing'>Its Your Birthday , Sadikshya</h3>
                <h6>Thank yuh for being my most Sweetest friend .I will never give chance to make your smile fade.I wish to support in your bad times too cheering happy moments chasing our dreams together. Always be this kind and dedicated girl(carrier-oriented manche) as yuh are!!..<br/>I only wish that Please God, always give this strong girl much strengths to complete her lunar phase and soon chase her bright self again.And yes Please be My favourite Teacher for now and Always.Please mam.Wish yuh the most precious Birthday ever Live Long Stay Happy !!  </h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:1,delay:2}}
            
            >
                <img src={Me}className="pic"alt="Profile Picture" />
            </motion.div>
        </SubBox>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js " referrerpolicy="no-referrer "></script>

    </Box>
</>
  )
}

export default Intro