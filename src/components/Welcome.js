import React from "react";
import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import kakashi from "../images/kakashi.png";

function Welcome() {
  const [image] = useMediaQuery("(min-width: 1110px)");

  return (
    <Flex bg="blue.100" mt={4} h="28rem" borderRadius="10px" boxShadow="lg">
      <Flex alignItems="center">
        <Box px="4rem">
          <Heading as="h2" size="2xl" mb={4}>
            Welcome to the ChakraAnime database
          </Heading>
          <Text fontSize="xl">Find your favourite anime and manga here!</Text>
          <Button size="lg" colorScheme="teal" mt="24px">
            Join us!
          </Button>
        </Box>
      </Flex>
      {image && (
        <Flex alignItems="center"  justifyContent="center">
          <Image w="55%" src={kakashi} alt="kakashi" />
        </Flex>
      )}
    </Flex>
  );
}

export default Welcome;
