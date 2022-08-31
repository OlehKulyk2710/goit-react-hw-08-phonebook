import { NavBar, Container, LinkWrapper, NavLinkStyled } from 'components';

export const Header = () => {
  return (
    <NavBar>
      <Container>
        <LinkWrapper>
          <NavLinkStyled to="/register">register</NavLinkStyled>
          <NavLinkStyled to="/login">login</NavLinkStyled>
          <NavLinkStyled to="/contacts">contacts</NavLinkStyled>
        </LinkWrapper>
      </Container>
    </NavBar>
  );
};
