import {FC} from 'react'
import styled from 'styled-components'

const Nav = styled.div `
   display: flex;
   gap: 40px;
   background-color: red;
`

const Navbar : FC = ()=>{
   return(
     <Nav>
       <p>aaaaaaaaaa</p>
       <p>aaaaaaaaaa</p>
       <p>aaaaaaaaaa</p>
     </Nav>
   )
} 

export default Navbar;