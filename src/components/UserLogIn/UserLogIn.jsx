import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONSTANTS } from '../../services/constants';
import authOperations from 'redux/auth/auth-operations';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BoxStyled, Heading, LogInContainer } from './UserLogIn.styled';

export const UserLogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { email, password } = CONSTANTS;
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case email:
        setEmail(inputValue);
        break;
      case password:
        setPassword(inputValue);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(authOperations.logIn(userData));

    setEmail('');
    setPassword('');
  };

  return (
    <LogInContainer>
      <Heading>Log in</Heading>
      <BoxStyled
        component="form"
        name="reg-form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
      >
        <TextField
          onChange={handleChange}
          required
          fullWidth
          label="Email"
          name={CONSTANTS.email}
          value={email}
          type="email"
          autoComplete="email"
        />
        <TextField
          onChange={handleChange}
          required
          fullWidth
          name={CONSTANTS.password}
          value={password}
          label="Password"
          type="password"
          autoComplete="new-password"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width: '20ch',
          }}
        >
          Log in
        </Button>
      </BoxStyled>
    </LogInContainer>
  );
};
