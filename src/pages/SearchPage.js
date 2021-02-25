import React, { useEffect, useState } from "react";
import { Flex, Grid, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeImage from "../components/AnimeImage";
import API from "../helpers/api";

function SearchPage() {
  let { type, query } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [anime, setAnime] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [title, setTitle] = useState("Search");

  useEffect(() => {
    setAnime([]);
    setPageNumber(1);
  }, [query]);

  useEffect(() => {
    let path = `search/anime?q=${query}&page=${pageNumber}&genre=12&genre_exclude=0`;
    if (type === "topAiring") {
      path = `top/anime/${pageNumber}/airing`;
      setTitle("Top Airing");
    } else if (type === "topUpcoming") {
      path = `top/anime/${pageNumber}/upcoming`;
      setTitle("Top Upcoming");
    } else if (type === "topPopularity") {
      path = `top/anime/${pageNumber}/bypopularity`;
      setTitle("Top Popularity");
    } else if (type === "genre") {
      path = `genre/anime/${query}/${pageNumber}`;
    }
    API.getPath(path)
      .then((j) => {
        if (j) {
          if (j.results) {
            setAnime(anime => {
              return [...anime, ...j.results];
            });
          } else if (j.top) {
            setAnime(anime => {
              return [...anime, ...j.top];
            });
          } else if (j.anime) {
            setTitle(j.mal_url.name);
            setAnime(anime => {
              return [...anime, ...j.anime];
            });
          }
          if (anime.length > 100) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }
        }
      })
  }, [pageNumber, query, type]);

  const handleNext = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <Flex flexGrow="1" bg="gray.50" justifyContent="center" color="gray.700">
      <Flex maxW="84rem" flexGrow="1" flexDirection="column" my="1rem">
        <Heading as="h1" mb="2rem">{title}</Heading>
        <InfiniteScroll
          dataLength={anime.length}
          next={handleNext}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Nothing to show!</b>
            </p>
          }
        >
          <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={7}>
            {anime.map((res, idx) => (
              <AnimeImage
                key={idx}
                image_url={res.image_url}
                title={res.title}
                mal_id={res.mal_id}
                idx={idx}
              />
            ))}
          </Grid>
        </InfiniteScroll>
      </Flex>
    </Flex>
  );
}

export default SearchPage;
