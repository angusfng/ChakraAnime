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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import API from "../helpers/api";
import InformationCardOne from "../components/InformationCardOne";

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
      bg="gray.50"
    >
      <Center w="100%" padding="1rem" color="gray.600">
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
              templateColumns="repeat(auto-fit, minmax(35rem, 1fr))"
              gap={3}
            >
              <InformationCardOne
                json={json}
                aired={aired}
                genres={genres}
                studios={studios}
              />
              <InformationCardOne
                json={json}
                aired={aired}
                genres={genres}
                studios={studios}
              />
            </Grid>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default AnimePage;
