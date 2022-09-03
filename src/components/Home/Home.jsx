import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';
import { Container, MainText } from 'components';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Container>
        {isLoggedIn ? (
          <MainText>
            To see your contacts, click the <b>Contacts</b> button.
          </MainText>
        ) : (
          <MainText>
            Please, <b>Register</b> or <b>Log in</b>.
          </MainText>
        )}
      </Container>
    </>
  );
};

export default Home;
