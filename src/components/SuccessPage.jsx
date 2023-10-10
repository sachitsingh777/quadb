import React from 'react';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';

const SuccessPage = ({ applicationData }) => {
  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Application Submitted Successfully
      </Heading>
      <Heading as="h3" size="md" mb={2}>
        Your Application Details:
      </Heading>
      <List styleType="disc" mb={4}>
        <ListItem>
          <Text>Name: {applicationData.name}</Text>
        </ListItem>
        <ListItem>
          <Text>Email: {applicationData.email}</Text>
        </ListItem>
        <ListItem>
          <Text>Cover Letter: {applicationData.coverLetter}</Text>
        </ListItem>
        <ListItem>
          <Text>Resume: {applicationData.resume}</Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default SuccessPage;
