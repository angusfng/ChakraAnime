import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Grid,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";
import { useMediaQuery } from "@chakra-ui/react";
import kakashi from "../images/kakashi.png";
import API from "../helpers/api";

function Home() {
  const [airingAnime, setAiringAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [image] = useMediaQuery("(min-width: 1110px)");

  useEffect(() => {
    API.getPath("top/anime/1/airing").then((json) => {
      setAiringAnime(json.top.slice(0, 7));
    });
    API.getPath("top/anime/1/upcoming").then((json) => {
      setUpcomingAnime(json.top.slice(0, 7));
    });
    API.getPath("search/anime?q=&genre=1").then((json) => {
      console.log(json);
    });
  }, []);

  return (
    <Flex flexGrow="1" bgColor="white" justifyContent="center">
      <Flex
        bgColor="blue.300"
        maxW="80rem"
        flexGrow="1"
        flexDirection="column"
        px="1rem"
      >
        <Flex bgColor="white" h="28rem">
          <Flex alignItems="center">
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
          {image && (
            <Flex w="50%" alignItems="center">
              <Image w="40%" src={kakashi} alt="kakashi" />
            </Flex>
          )}
        </Flex>
        <AlertLink>Airing Anime</AlertLink>
        <Grid
          templateColumns="repeat(auto-fit, minmax(10rem, 1fr))"
          gap={3}
          h="18rem"
          overflow="hidden"
        >
          {airingAnime.map((item, idx) => (
            <LinkBox key={idx}>
              <Box>
                <Image
                  h="16rem"
                  w="100%"
                  src={item.image_url}
                  alt={`Airing anime ${idx}`}
                />
                <LinkOverlay href="#">
                  <Text color="blue.500" fontWeight="semibold" isTruncated>
                    {item.title}
                  </Text>
                </LinkOverlay>
              </Box>
            </LinkBox>
          ))}
        </Grid>
        <AlertLink>Upcoming Anime</AlertLink>
        <Grid
          templateColumns="repeat(auto-fit, minmax(10rem, 1fr))"
          gap={3}
          h="18rem"
          overflow="hidden"
        >
          {upcomingAnime.map((item, idx) => (
            <LinkBox key={idx}>
              <Box>
                <Image
                  h="16rem"
                  w="100%"
                  src={item.image_url}
                  alt={`Airing anime ${idx}`}
                />
                <LinkOverlay href="#">
                  <Text color="blue.500" fontWeight="semibold" isTruncated>
                    {item.title}
                  </Text>
                </LinkOverlay>
              </Box>
            </LinkBox>
          ))}
        </Grid>
        <Flex>
          <Box w="50%" h="20rem">
            <AlertHeading>Anime</AlertHeading>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
