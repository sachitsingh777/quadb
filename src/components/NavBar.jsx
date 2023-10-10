import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box bg="blue" py={3}>
      <Flex justify="space-between" alignItems="center" maxW="800px" mx="auto">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Job Portal
        </Text>
        <List display="flex" alignItems="center">
          <ListItem ml={4}>
            <Link as={RouterLink} to="/" color="white">
              Home
            </Link>
          </ListItem>
          <ListItem ml={4}>
            <Link as={RouterLink} to="/job-list" color="white">
              Job List
            </Link>
          </ListItem>
          <ListItem ml={4}>
            <Link as={RouterLink} to="/apply" color="white">
              Apply
            </Link>
          </ListItem>
          <ListItem ml={4}>
            <Link as={RouterLink} to="/success" color="white">
              Success Page
            </Link>
          </ListItem>
          <ListItem ml={4}>
            <Link as={RouterLink} to="/login" color="white">
              Login
            </Link>
          </ListItem>
          <ListItem ml={4}>
            <Link as={RouterLink} to="/signup" color="white">
              Sign up
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default NavBar;
