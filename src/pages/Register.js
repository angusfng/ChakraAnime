import React from "react";
import {
  Flex,
  Heading,
  FormControl,
  Button,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MyForm = styled.form`
  width: 100%;
`;

function Register() {
  let history = useHistory();

  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <Flex
      flexGrow="1"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      color="gray.600"
    >
      <Flex
        maxW="35rem"
        w="100%"
        bg="#fafafa"
        boxShadow="outline"
        borderRadius="5px"
        p="2rem"
        flexDirection="column"
        alignItems="center"
        my="1rem"
      >
        <Heading textAlign="center" mb="2rem">
          Sign Up
        </Heading>
        <MyForm onSubmit={handleSubmit}>
          <FormControl id="register-email" my="1rem">
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Email address" type="email" />
          </FormControl>
          <FormControl id="register-username" my="1rem">
            <FormLabel>Username</FormLabel>
            <Input placeholder="Username" type="text" />
          </FormControl>
          <FormControl id="register-password" my="1rem">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" type="password" />
          </FormControl>
          <FormControl id="register-confirmpass" my="1rem">
            <FormLabel>Confirm Password</FormLabel>
            <Input placeholder="Confirm Password" type="password" />
          </FormControl>
          <Flex justifyContent="center">
            <Button colorScheme="teal" type="submit" my="1rem">
              Sign Up
            </Button>
          </Flex>
        </MyForm>
        <Text>NOTE: Sign up and login don't work yet</Text>
      </Flex>
    </Flex>
  );
}

export default Register;
