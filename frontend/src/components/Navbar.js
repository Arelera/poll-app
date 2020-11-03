import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  padding: 0 2rem;
  border-bottom: 2px solid #ff8811;

  background: #fafafa;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #111;
    :last-child {
      margin: 0 auto;
    }
  }
  h1 {
    font-family: 'Arvo';
    font-size: 3.5rem;
    color: #ff8811;
    text-shadow: 3px 3px 0px #392f5a;

    transition: all 0.2s ease;
    :hover {
      color: #111;
    }
  }

  p {
    font-size: 1.5rem;
    transition: all 0.2s ease;

    :hover {
      text-decoration: underline;
      color: #9dd9d2;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1>POLLLO</h1>
      </NavLink>
      <NavLink to="/create-poll">
        <p>Create Poll</p>
      </NavLink>
    </Nav>
  );
};

export default Navbar;
