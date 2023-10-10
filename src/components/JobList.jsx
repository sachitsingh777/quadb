import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Spinner,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Center,
} from '@chakra-ui/react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jobs.api/jobs'); // Replace with your API endpoint
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Center>
      <Box p={4}>
        <Heading as="h2" mb={4}>
          Job Listings
        </Heading>
        {loading ? (
          <Spinner size="lg" />
        ) : (
          <UnorderedList>
            {jobs.map((job) => (
              <ListItem key={job.id}>
                <Text fontSize="lg">{job.title}</Text>
                <Button colorScheme="blue" size="sm" ml={2}>
                  View Details
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </Box>
    </Center>
  );
};

export default JobList;
