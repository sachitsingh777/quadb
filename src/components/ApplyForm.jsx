import axios from 'axios';
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Text,
  VStack,
  Center,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';

const ApplyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState(null);
  const [fileError, setFileError] = useState('');
  const toast = useToast();

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile) {
      if (uploadedFile.type === 'application/pdf') {
        setResume(uploadedFile);
        setFileError('');
        console.log('Uploaded resume file:', uploadedFile.name);
      } else {
        setFileError('Invalid file type. Please upload a PDF file.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !coverLetter || !resume) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('coverLetter', coverLetter);
      formData.append('resume', resume);

      const response = await axios.post('/api/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast({
        title: 'Success',
        description: 'Application submitted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      console.log('Application submitted successfully:', response.data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error submitting application.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      console.error('Error submitting application:', error.message);
    }
  };

  return (
    <Center>
      <Box p={4}>
        <Heading as="h2" mb={4}>
          Apply for the Job
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="coverLetter">Cover Letter:</FormLabel>
              <Textarea
                id="coverLetter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                resize="vertical"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="resume">Resume (PDF):</FormLabel>
              <Input
                type="file"
                id="resume"
                accept=".pdf"
                onChange={handleFileUpload}
              />
              <FormErrorMessage>{fileError}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit Application
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default ApplyForm;
