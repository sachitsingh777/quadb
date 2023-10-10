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
import { signupfun } from '../redux/actions/authAction';

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Dispatch signup action here
    dispatch(signupfun(name, email, password));
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Sign Up
      </Heading>
      <FormControl id="name" isRequired mb={4}>
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </FormControl>
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
      <Button onClick={handleSignup} colorScheme="blue">
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
