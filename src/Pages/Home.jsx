import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  Input,
  Button,
  Spinner,
  List,
  ListItem,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {Link,Navigate, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
const Home = () => {
  const [language, setLanguage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const navigate=useNavigate()
 
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSearch = async () => {
    let ID = process.env.REACT_APP_APPLICATION_ID
    let KEY = process.env.REACT_APP_API_KEY
    if (!isAuthenticated) {
      return <navigate to="/login" />;
    }
    try { 
      setLoading(true);

      // Make a request to the GitHub Jobs API to search for jobs by language
      const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${ID}&app_key=${KEY}&results_per_page=10&title_only=${language}`);

      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
      setLoading(false);
    }
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Welcome to the Job Portal</Heading>
      <Box mb={4}>
        <label htmlFor="language">Enter a programming language:</label>
        <Input
          type="text"
          id="language"
          value={language}
          onChange={handleLanguageChange}
          placeholder="e.g., JavaScript"
        />
        <Button onClick={handleSearch} isLoading={loading} loadingText="Searching...">
          Search Jobs
        </Button>
      </Box>
      {loading && <Spinner size="lg" />}
      {jobs.length > 0 && (
        <Box>
          <Heading as="h2" mb={2}>Jobs Found:</Heading>
          <List>
            {jobs.map((job) => (
              <ListItem key={job.id}>
                <Link to={`/job/${job.id}`} color="blue.500">
                  {job.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Home;
