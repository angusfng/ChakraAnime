import React, { useState, useEffect } from "react";
import { Flex, Box, Grid, OrderedList, ListItem } from "@chakra-ui/react";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";
import Welcome from "./Welcome";
import GenreBox from "./GenreBox";
import AnimeImage from "./AnimeImage";
import RankingCard from "./RankingCard";
import { animeGenreList, mangaGenreList } from "../helpers/data";

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
        <Flex flexDirection="column">
          {console.log(popularAnime)}
          {popularAnime.map((item, idx) =>(
            <RankingCard key={idx} id={item.mal_id}/>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
