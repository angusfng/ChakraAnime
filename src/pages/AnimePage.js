import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import API from "../helpers/api";
import InformationCardOne from "../components/InformationCardOne";
import InformationCardTwo from "../components/InformationCardTwo";
import AnimeImage from "../components/AnimeImage";
import CharacterCard from "../components/CharacterCard";

function AnimePage() {
  let { id } = useParams();
  const [json, setJson] = useState({});
  const [aired, setAired] = useState("");
  const [genres, setGenres] = useState([]);
  const [studios, setStudios] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    API.getPath(`anime/${id}`).then((j) => {
      if (j) {
        setJson(j);
        setAired(j.aired.string);
        setGenres(j.genres);
        setStudios(j.studios);
      }
    });
    API.getPath(`anime/${id}/recommendations`).then((j) => {
      setRecommendations(j.recommendations.slice(0, 7));
    });
    API.getPath(`anime/${id}/characters_staff`).then((j) => {
      setCharacters(j.characters.slice(0, 10));
    });
  }, [id]);

  return (
    <Flex
      flexDirection="column"
      color="gray.700"
      flexGrow="1"
      alignItems="center"
      bg="gray.50"
    >
      <Center w="100%" p="1rem" color="gray.600">
        <Box w="100%" maxW="84rem">
          <Heading as="h1" size="lg" mb="1rem">
            {json.title}
          </Heading>
          <Heading as="h1" size="md">
            {json.title_japanese}
          </Heading>
        </Box>
      </Center>
      <Tabs w="100%" maxW="84rem">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Characters</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
              gap={3}
            >
              <InformationCardOne
                json={json}
                aired={aired}
                genres={genres}
                studios={studios}
              />
              <InformationCardTwo title="Watch Trailer">
                <AspectRatio maxW="100%" ratio={16 / 9}>
                  <iframe
                    title="Anime trailer"
                    src={json.trailer_url}
                    allowFullScreen
                  />
                </AspectRatio>
              </InformationCardTwo>
            </Grid>
            <InformationCardTwo title="Description" mt="1rem">
              <Text>{json.synopsis}</Text>
            </InformationCardTwo>
          </TabPanel>
          <TabPanel>
            <Flex flexWrap="wrap">
              {characters.map((char, idx) => (
                <CharacterCard key={idx} json={char}/>
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box w="100%" maxW="84rem" mt="1rem" p="1rem">
        <Heading as="h3" fontSize="1.5em">
          Recommendations
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(10rem, 1fr))"
          gap={3}
          my="2rem"
        >
          {recommendations.map((rec, idx) => (
            <AnimeImage
              key={idx}
              image_url={rec.image_url}
              title={rec.title}
              mal_id={rec.mal_id}
              idx={idx}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

export default AnimePage;
