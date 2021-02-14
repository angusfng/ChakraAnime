import React, { useState, useEffect } from "react";
import { Flex, Box, Grid, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import AlertLink from "../components/AlertLink";
import AlertHeading from "../components/AlertHeading";
import Welcome from "../components/Welcome";
import GenreBox from "../components/GenreBox";
import AnimeImage from "../components/AnimeImage";
import RankingCard from "../components/RankingCard";
import { animeGenreList, mangaGenreList } from "../helpers/data";
import { Link as RouterLink } from "react-router-dom";

import API from "../helpers/api";

function Home() {
  const [airingAnime, setAiringAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    API.getPath("top/anime/1/airing").then((json) => {
      setAiringAnime(json.top.slice(0, 7));
    });
    API.getPath("top/anime/1/upcoming").then((json) => {
      setUpcomingAnime(json.top.slice(0, 7));
    });
    API.getPath("top/anime/1/bypopularity").then((json) => {
      setPopularAnime(json.top.slice(0, 10));
    });
  }, []);

  return (
    <Flex flexGrow="1" bg="gray.100" justifyContent="center">
      <Flex
        bg="gray.100"
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
        >
          {airingAnime.map((item, idx) => (
            <AnimeImage
              key={idx}
              image_url={item.image_url}
              title={item.title}
              idx={idx}
            />
          ))}
        </Grid>
        <AlertLink>Upcoming Anime</AlertLink>
        <Grid
          templateColumns="repeat(auto-fit, minmax(10rem, 1fr))"
          gap={3}
        >
          {upcomingAnime.map((item, idx) => (
            <AnimeImage
              key={idx}
              image_url={item.image_url}
              title={item.title}
              idx={idx}
            />
          ))}
        </Grid>
        <Grid templateColumns="repeat(auto-fit, minmax(12rem, 1fr))" gap={4}>
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
        <Flex mt="1rem" justifyContent="space-between">
          <Link as={RouterLink} to="/search" fontWeight="semibold" fontSize="lg">Top 100 Most Popular Anime</Link>
          <Link as={RouterLink} to="/search" fontWeight="semibold" fontSize="md">View all</Link>
        </Flex>
        <Flex flexDirection="column">
          <UnorderedList>
            {popularAnime.map((item, idx) =>(
              <ListItem key={idx} listStyleType="None">
                <RankingCard  id={item.mal_id} idx={idx}/>
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
