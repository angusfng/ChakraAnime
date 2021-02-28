import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Grid,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import AlertLink from "../components/AlertLink";
import AlertHeading from "../components/AlertHeading";
import Welcome from "../components/Welcome";
import GenreBox from "../components/GenreBox";
import AnimeImage from "../components/AnimeImage";
import RankingCard from "../components/RankingCard";
import { animeGenreList, mangaGenreList } from "../helpers/data";
import { Link as RouterLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import API from "../helpers/api";

function Home() {
  const [airingAnime, setAiringAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);
  const [minpop] = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    API.getPath("top/anime/1/airing").then((json) => {
      if (json) {
        setAiringAnime(json.top.slice(0, 7));
      }
    });
    API.getPath("top/anime/1/upcoming").then((json) => {
      if (json) {
        setUpcomingAnime(json.top.slice(0, 7));
      }
    });
    API.getPath("top/anime/1/bypopularity").then((json) => {
      if (json) {
        setPopularAnime(json.top.slice(0, 10));
      }
    });
  }, []);

  return (
    <Flex flexGrow="1" bg="gray.50" justifyContent="center">
      <Flex maxW="84rem" flexGrow="1" flexDirection="column" px="1rem">
        <Welcome />
        <AlertLink type="topAiring">Airing Anime</AlertLink>
        <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={3}>
          {airingAnime.map((item, idx) => (
            <AnimeImage
              key={idx}
              image_url={item.image_url}
              title={item.title}
              mal_id={item.mal_id}
              idx={idx}
              score={item.score}
              type={item.type}
              episodes={item.episodes}
            />
          ))}
        </Grid>
        <AlertLink type="topUpcoming">Upcoming Anime</AlertLink>
        <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={3}>
          {upcomingAnime.map((item, idx) => (
            <AnimeImage
              key={idx}
              image_url={item.image_url}
              title={item.title}
              mal_id={item.mal_id}
              idx={idx}
              score={item.score}
              type={item.type}
              episodes={item.episodes}
            />
          ))}
        </Grid>
        <Grid templateColumns="repeat(auto-fit, minmax(12rem, 1fr))" gap={4} mb="2rem">
          <Box>
            <AlertHeading>Anime</AlertHeading>
            <Flex flexWrap="wrap">
              {animeGenreList.map((item, idx) => (
                <GenreBox key={idx} color={idx} id={item.genreID}>
                  {item.genre}
                </GenreBox>
              ))}
            </Flex>
          </Box>
          <Box>
            <AlertHeading>Manga</AlertHeading>
            <Flex flexWrap="wrap">
              {mangaGenreList.map((item, idx) => (
                <GenreBox key={idx} color={idx} id={item.genreID}>
                  {item.genre}
                </GenreBox>
              ))}
            </Flex>
          </Box>
        </Grid>
        {minpop && (
          <>
            <Flex mt="1rem" justifyContent="space-between">
              <Link
                as={RouterLink}
                to="/search/topPopularity/None"
                fontWeight="semibold"
                fontSize="lg"
              >
                Top 100 Most Popular Anime
              </Link>
              <Link
                as={RouterLink}
                to="/search/topPopularity/None"
                fontWeight="semibold"
                fontSize="md"
              >
                View all
              </Link>
            </Flex>
            <Flex flexDirection="column" mb="3rem">
              <UnorderedList>
                {popularAnime.map((item, idx) => (
                  <ListItem key={idx} listStyleType="None">
                    <RankingCard
                      id={item.mal_id}
                      idx={idx}
                      popularAnime={popularAnime}
                    />
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default Home;
