import React from 'react'
import Dropdown from '../Dropdown'
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLink1,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={ toggle }>
      <Icon onClick={ toggle }>
          <CloseIcon/>
      </Icon> 

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink1 to="/" onClick={ toggle }>About</SidebarLink1>
          <SidebarLink1 to="/store" onClick={ toggle }>Store</SidebarLink1>
          <SidebarLink1 to="/presenza" onClick={ toggle }>Presenza</SidebarLink1>
          <SidebarLink1 to="/community" onClick={ toggle }>Community</SidebarLink1>
          <Dropdown />
          
        </SidebarMenu>
      </SidebarWrapper>
      


    </SidebarContainer>
  )
}

export default Sidebar
//scommessa persa