import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

import {
  NavBar,
  Container,
  LinkWrapper,
  Wrapper,
  NavLinkStyled,
  UserMenu,
} from 'components';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavBar>
      <Container>
        <LinkWrapper>
          <Wrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            {isLoggedIn && (
              <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            )}
          </Wrapper>

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Wrapper>
              <NavLinkStyled to="/register">Register</NavLinkStyled>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </Wrapper>
          )}
        </LinkWrapper>
      </Container>
    </NavBar>
  );
};
