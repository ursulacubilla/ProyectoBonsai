import React from 'react'
// import { Link } from 'react-router-dom'
import { List, Login, StartFree } from '/src/Components/Nav-bar/nav-styled'

export const NavBar = () => {
  return (
    <div>
        <ul>
        <img src='/src/assets/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg'/>
        <>
        <List>Product</List>
        <List>Templates</List>
        <List>Pricing</List>
        <List>Reviews</List>
        <Login>LOG IN</Login>
        <StartFree>START FREE</StartFree>
        </>
        </ul>
    </div>
  )
}
