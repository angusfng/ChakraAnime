import React, { useEffect, useState } from "react";
import { Flex, Box, Heading, Text, Image, AspectRatio } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import API from "../helpers/api";

function InfoText() {
  return (
    <Box mb="1rem">
      <Heading as="h4" size="sm">
        Format
      </Heading>
      <Text fontSize="sm">TV</Text>
    </Box>
  );
}

function AnimePage() {
  let { id } = useParams();
  const [json, setJson] = useState({});
  const [aired, setAired] = useState("");
  const [genres, setGenres] = useState([]);
  const [studios, setStudios] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    API.getPath(`anime/${id}`).then((j) => {
      if (j) {
        setJson(j);
        setAired(j.aired.string);
        setGenres(j.genres);
        setStudios(j.studios);
      }
    });
    // API.getPath(`anime/${id}/recommendations`).then((j) => {
    //   console.log(j);
    // });
    // API.getPath(`anime/${id}/episodes`).then((j) => {
    //   console.log(j);
    // });
  }, [id]);

  return (
    <Flex
      flexDirection="column"
      color="gray.700"
      flexGrow="1"
      alignItems="center"
    >
      <Box w="100%" bg="gray.50" padding="1rem">
        <Heading as="h1" size="lg" mb="1rem">
          {json.title}
        </Heading>
        <Heading as="h1" size="md">
          {json.title_japanese}
        </Heading>
      </Box>
    </Flex>
  );
}

{
  /* <Text>{`Type: ${json.type}`}</Text>
            <Text>{`Score: ${json.score}`}</Text>
            <Text>{`Status: ${json.status}`}</Text>
            <Text>{`Aired: ${aired}`}</Text>
            <Text d="inline">Genres: </Text>
            {genres.map((genre, idx) => (
              <Text key={idx} d="inline">
                {genre.name}{" "}
              </Text>
            ))}
            <Text>{`Episodes: ${json.episodes}`}</Text>
            <Text>{`Duration: ${json.duration}`}</Text>
            <Text>{`Rating: ${json.rating}`}</Text> */
}

export default AnimePage;
