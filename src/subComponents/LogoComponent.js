import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
const Logo= styled.div`
 display:inline-block;
 background-color: ${props => props.color ==='dark'?props.backgroundColor = DarkTheme.body:DarkTheme.text}`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <div style={{color:'inherit'}} >
     <img src={require('./logo.png').default} height='150px' width='120px' style={{marginTop:-30,zIndex:1}} fill={props.theme === "dark"?DarkTheme.text: DarkTheme.body}/>
    </div>
    </Logo>
  )
}

export default LogoComponent