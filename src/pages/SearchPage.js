import React, { useEffect, useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import API from "../helpers/api";
import AnimeImage from "../components/AnimeImage";

function SearchPage() {
  let { type } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log(type);
    API.getPath(`search/anime?q=${type}&page=1`).then((j) => {
      if (j) {
        setResults(j.results);
      } else {
        setResults([]);
      }
    });
  }, [type]);

  return (
    <Flex flexGrow="1" bg="gray.50" justifyContent="center">
      <Flex
        maxW="84rem"
        flexGrow="1"
        flexDirection="column"
        my="1rem"
      >
        <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={5}>
          {results.map((res, idx) => (
            <AnimeImage
              key={idx}
              image_url={res.image_url}
              title={res.title}
              mal_id={res.mal_id}
              idx={idx}
            />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default SearchPage;
