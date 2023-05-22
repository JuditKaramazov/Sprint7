import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};;
  background-color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    max-height: 80px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 70%;
  margin-right: 20px;
  align-items: center;
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-weight: 50;
  text-decoration: none;
  margin: 3px;
  &:hover,
  &:focus {
    color: #ec6091;
  };

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: large;
  text-decoration: none;
  margin: 5px;
  &:hover {
    color: #ec6091;
  };
`;

export const OpenLinksButton = styled.button`
  height: 50px;
  width: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #ec6091;
  };

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
