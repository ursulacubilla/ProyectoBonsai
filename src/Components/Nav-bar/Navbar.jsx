import React from 'react'
// import { Link } from 'react-router-dom'
import { List, Login, StartFree } from '/src/Components/Nav-bar/nav-styled'
import { DivContainer, Logo, LogoDropdown, UnOrderList } from './nav-styled'

export const NavBar = () => {
  return (
    <DivContainer>
    <Logo src='/src/assets/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg'/>
      <UnOrderList>
        <List>Product</List> <LogoDropdown src='/src/assets/5f5a14486154c507c79e758f_001-down-chevron.svg'/>
        <List>Templates</List>
        <List>Pricing</List>
        <List>Reviews</List>
        <Login>LOG IN</Login>
        <StartFree>START FREE</StartFree>
      </UnOrderList>
    </DivContainer>
  )
}
