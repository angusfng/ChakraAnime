import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";
import Welcome from "./Welcome";
import GenreBox from "./GenreBox";
import { animeGenreList, mangaGenreList } from "../helpers/data";

import API from "../helpers/api";

function Home() {
  const [airingAnime, setAiringAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);

  useEffect(() => {
    API.getPath("top/anime/1/airing").then((json) => {
      setAiringAnime(json.top.slice(0, 7));
    });
    API.getPath("top/anime/1/upcoming").then((json) => {
      setUpcomingAnime(json.top.slice(0, 7));
    });
  }, []);

  return (
    <Flex flexGrow="1" bgColor="gray.50" justifyContent="center">
      <Flex
        bgColor="gray.50"
        maxW="84rem"
        flexGrow="1"
        flexDirection="column"
        px="1rem"
      >
        <Welcome />
        <AlertLink>Airing Anime</AlertLink>
        <Grid
          templateColumns="repeat(auto-fit, minmax(10rem, 1fr))"
          gap={3}
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
                  borderRadius="5px"
                  boxShadow="md"
                />
                <LinkOverlay href="#">
                  <Text fontWeight="semibold">
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
                  borderRadius="5px"
                />
                <LinkOverlay href="#">
                  <Text fontWeight="semibold">
                    {item.title}
                  </Text>
                </LinkOverlay>
              </Box>
            </LinkBox>
          ))}
        </Grid>
        <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={4}>
          <Box>
            <AlertHeading>Anime</AlertHeading>
            <Flex flexWrap="wrap">
              {animeGenreList.map((item, idx) => (
                <GenreBox key={idx} color={idx}>
                  {item.genre}
                </GenreBox>
              ))}
            </Flex>
          </Box>
          <Box>
            <AlertHeading>Manga</AlertHeading>
            <Flex flexWrap="wrap">
              {mangaGenreList.map((item, idx) => (
                <GenreBox key={idx} color={idx}>
                  {item.genre}
                </GenreBox>
              ))}
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Home;
