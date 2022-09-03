import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONSTANTS } from '../../services/constants';
import authOperations from 'redux/auth/auth-operations';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { normalizeInputData } from 'services/normalizedInputData';
import { validateData } from 'services/validation';
import { BoxStyled, Heading, RegContainer } from './UserRegistration.styled';

export const UserRegistration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, email, password } = CONSTANTS;
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case name:
        setName(inputValue);
        break;
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
      name,
      email,
      password,
    };

    const normalizedUserData = normalizeInputData(userData);
    const validatedData = validateData(normalizedUserData);
    if (!validatedData) return;

    dispatch(authOperations.register(normalizedUserData));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegContainer>
      <Heading>New User Registration</Heading>
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
          autoComplete="given-name"
          name={CONSTANTS.name}
          value={name}
          required
          fullWidth
          label="Name"
          autoFocus
        />

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
          Sign Up
        </Button>
      </BoxStyled>
    </RegContainer>
  );
};
