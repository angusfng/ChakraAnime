import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Alert,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import kakashi from "../kakashi.png";

function Home() {
  return (
    <Flex flexGrow="1" bgColor="white" justifyContent="center">
      <Flex bgColor="blue.500" maxW="78rem" flexGrow="1" flexDirection="column">
        <Flex bgColor="white" h="28rem">
          <Flex alignItems="center" w="50%">
            <Box>
              <Heading as="h2" size="2xl" mb={4}>
                Welcome to the ChakraAnime database
              </Heading>
              <Text fontSize="xl">
                Find your favourite anime and manga here!
              </Text>
              <Button size="lg" colorScheme="teal" mt="24px">
                Join us!
              </Button>
            </Box>
          </Flex>
          <Flex w="50%" alignItems="center">
            <Image w="40%" src={kakashi} alt="kakashi"></Image>
          </Flex>
        </Flex>
        <Alert
          as="a"
          _hover={{
            color: "orange.600",
          }}
          colorScheme="orange"
          variant="left-accent"
          d="flex"
          justifyContent="space-between"
          color="orange.400"
        >
          <Heading as="h3" size="md">
            AIRING ANIME
          </Heading>
          <ChevronRightIcon boxSize={7} />
        </Alert>
      </Flex>
    </Flex>
  );
}

export default Home;
