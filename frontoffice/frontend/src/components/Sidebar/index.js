import React from 'react'
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
          <SidebarLink to="about" onClick={ toggle }>About</SidebarLink>
          <SidebarLink1 to="/store" onClick={ toggle }>Store</SidebarLink1>
          <SidebarLink1 to="/presenza" onClick={ toggle }>Presenza</SidebarLink1>
          <SidebarLink1 to="/online" onClick={ toggle }>Online</SidebarLink1>
          <SidebarLink1 to="/community" onClick={ toggle }>Community</SidebarLink1>
          
          
        </SidebarMenu>
      </SidebarWrapper>
      


    </SidebarContainer>
  )
}

export default Sidebar