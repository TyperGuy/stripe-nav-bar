import {FC} from 'react'
import {DefaultHeader} from '../../types/header.types'
import Navbar from '../navbar/Navbar';


const Header : FC = ()=>{
   return(
     <DefaultHeader>
       <div>bbb</div>
       <Navbar/>
     </DefaultHeader>
   )
} 

export default Header;