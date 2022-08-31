import { NavBar, Container, LinkWrapper, NavLinkStyled } from 'components';

export const Header = () => {
  return (
    <NavBar>
      <Container>
        <LinkWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/register">Register</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </LinkWrapper>
      </Container>
    </NavBar>
  );
};
