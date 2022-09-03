import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import { Wrapper, Text } from './UserMenu.styled';
import { authSelectors } from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <Wrapper>
      <Text>User: {userName}</Text>
      <Button
        onClick={handleClick}
        type="button"
        variant="contained"
        sx={{
          ml: 3,
          p: '4px',
          //   width: '12ch',
        }}
      >
        Log Out
      </Button>
    </Wrapper>
  );
};
