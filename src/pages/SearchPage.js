import React, { useEffect, useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeImage from "../components/AnimeImage";
import useAnimeSearch from "../helpers/useAnimeSearch";

function SearchPage() {
  let { query } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { anime, hasMore } = useAnimeSearch(query, pageNumber);

  useEffect(() => {
    setPageNumber(1);
  }, [query]);

  const handleNext = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <Flex flexGrow="1" bg="gray.50" justifyContent="center">
      <Flex maxW="84rem" flexGrow="1" flexDirection="column" my="1rem">
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
          <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={5}>
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
