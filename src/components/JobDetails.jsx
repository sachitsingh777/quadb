import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Spinner,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react';

const JobDetail = ({ match }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jobId = match.params.id;
    const fetchJobDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jobs.api/job/${jobId}`); // Replace with your API endpoint
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error.message);
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [match.params.id]);

  return (
    <Center>
      <Box p={4}>
        {loading ? (
          <Spinner size="lg" />
        ) : (
          <div>
            <Heading as="h2" mb={4}>
              Job Details
            </Heading>
            {job ? (
              <div>
                <Heading as="h3" size="lg" mb={2}>
                  {job.title}
                </Heading>
                <Text fontSize="lg" mb={4}>
                  {job.description}
                </Text>
                <Button colorScheme="blue">Apply</Button>
              </div>
            ) : (
              <Text fontSize="lg">Job not found</Text>
            )}
          </div>
        )}
      </Box>
    </Center>
  );
};

export default JobDetail;
