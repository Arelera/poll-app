import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  padding: 3rem 2.5rem;

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
      text-shadow: 3px 3px 0px #9dd9d2;
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

  .selected {
    text-decoration: underline;
    text-decoration-color: #9dd9d2;
  }
  @media screen and (max-width: 425px) {
    padding: 2.5rem 0rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1>POLLLO</h1>
      </NavLink>
      <NavLink activeClassName="selected" to="/create-poll">
        <p>Create Poll</p>
      </NavLink>
    </Nav>
  );
};

export default Navbar;
