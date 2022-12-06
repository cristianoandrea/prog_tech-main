import React from 'react'
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
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
          <SidebarLink to="salute" onClick={ toggle }>Salute</SidebarLink>
          <SidebarLink to="pensione" onClick={ toggle }>Pensione</SidebarLink>
          <SidebarLink to="prodotti" onClick={ toggle }>Prodotti</SidebarLink>
          <SidebarLink to="cuccioli" onClick={ toggle }>Cuccioli</SidebarLink>
          <SidebarLink to="servizi" onClick={ toggle }>Servizi</SidebarLink>
          
        </SidebarMenu>
      </SidebarWrapper>
      


    </SidebarContainer>
  )
}

export default Sidebar