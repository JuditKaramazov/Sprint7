import React, { useState } from 'react';
import {
  NavbarContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from '../Navbar/Navbar.styled';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> · welcome</NavbarLink>
            <NavbarLink to="/home/*"> home </NavbarLink>
            <NavbarLink to="/about"> about ·</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">· welcome</NavbarLinkExtended>
          <NavbarLinkExtended to="/home/*"> home </NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> about ·</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
