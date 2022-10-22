import React, { useState } from 'react'
import { Container, LogoContainer, Menu, MenuHamburg, MenuItem, MenuItemLink, Wrapper } from './Navbar.elements'
import { FaBattleNet   } from "react-icons/fa";
import { FaShoppingCart,FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../index.css';

const Navbar = () => {
  const  [showMobileMenu, setShowMobileMenu] = useState(false);


  return (
    <Container>
      <Wrapper>
          <IconContext.Provider value ={{ style: {fontSize: "2em"}  }}>
        <LogoContainer>
          <FaBattleNet/>
          <p>Shoes- </p>
          <p> Online</p>
        </LogoContainer>
        <MenuHamburg onClick={() => setShowMobileMenu(! showMobileMenu) } >
          <FaBars/>
        </MenuHamburg>
         <Menu open = {showMobileMenu}>
          <MenuItem>
            <MenuItemLink>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              ABOUT ME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              MEN
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              WOMEN
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <FaShoppingCart/>
            </MenuItemLink>
          </MenuItem>
        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}

export default Navbar