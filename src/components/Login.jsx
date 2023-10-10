import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';
import { loginfun } from '../redux/actions/authAction';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dispatch login action here
    dispatch(loginfun(email, password));
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Login
      </Heading>
      <FormControl id="email" isRequired mb={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl id="password" isRequired mb={4}>
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </FormControl>
      <Button onClick={handleLogin} colorScheme="blue">
        Login
      </Button>
    </Box>
  );
};

export default Login;
