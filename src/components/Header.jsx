// import React from 'react'
import styled from "styled-components"
import MenuItem from "./menus/MenuItem"

function Header() {
  return (
    <Box>
      <div>
        <h3>IsaacTv</h3>
      </div>
      <div>
        <ul>
          <MenuItem menu='Home' />
          <MenuItem menu='Movies' />
          <MenuItem menu='TV Shows' />
          <MenuItem menu='Watchlist' />
          <MenuItem menu='Tickets' />
          <MenuItem menu='Login' />
        </ul>
      </div>
    </Box>
  )
}

export default Header

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 10%;
    background-color: #000;
    color: #fff;
   
    ul{
        display: flex;
        gap: 1rem;
        list-style: none;
        li{
            cursor: pointer;
        }
    }
`
