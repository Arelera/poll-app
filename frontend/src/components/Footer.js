import styled from 'styled-components';

const FooterEl = styled.footer`
  height: 60px;
  width: 100%;
  margin-top: auto;
  text-align: center;
  margin-top: 0.5rem;
  padding: 1rem;

  font-size: 1.25rem;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #ff8811;
    transition: all 0.2s ease;
    :hover {
      text-decoration: underline;
    }
  }
  ion-icon {
    font-size: 2rem;
    vertical-align: bottom;
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      <p>
        Site made by{' '}
        <a href="https://github.com/Arelera" target="_">
          Arel <ion-icon name="logo-github"></ion-icon>
        </a>
      </p>
    </FooterEl>
  );
};

export default Footer;
