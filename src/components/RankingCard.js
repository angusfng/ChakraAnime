import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Link,
  Flex,
  Tag,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import API from "../helpers/api";

function RankingCard({ id, idx, popularAnime }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(0);
  const [users, setUsers] = useState(0);
  const [type, setType] = useState("");
  const [episodes, setEpisodes] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    API.getPath(`anime/${id}`).then((json) => {
      if (json) {
        setTitle(json.title);
        setImage(json.image_url);
        setGenres(json.genres.slice(0, 4));
        setScore(json.score);
        setUsers(json.scored_by);
        setType(json.type);
        setEpisodes(json.episodes);
        setStatus(json.status);
      }
    });
  }, [id, popularAnime]);

  return (
    <Flex>
      <Flex alignItems="center" justifyContent="center" w="2rem" mr="1rem">
        <Text color="gray.400" fontWeight="bold" fontSize="1.5em">{`#${
          idx + 1
        }`}</Text>
      </Flex>
      <Flex
        flexGrow="1"
        minH="5rem"
        bg="white"
        boxShadow="lg"
        borderRadius="5px"
        p={2}
        justifyContent="space-between"
        my="1rem"
        ml="1rem"
      >
        <Flex>
          <LinkBox>
            <LinkOverlay as={RouterLink} to={`/anime/${id}`}>
              <Image w="3rem" h="100%" src={image} />
            </LinkOverlay>
          </LinkBox>
          <Box mx="1rem">
            <Link
              as={RouterLink}
              to={`/anime/${id}`}
              fontWeight="semibold"
              size="sm"
              color="gray.600"
            >
              {title}
            </Link>
            <Flex mt="5px" flexWrap="wrap">
              {genres.map((genre, idx) => (
                <Tag
                  as={RouterLink}
                  to={`/search/genre/${genre.mal_id}`}
                  key={idx}
                  colorScheme="orange"
                  mr={2}
                  mt={1}
                >
                  {genre.name}
                </Tag>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Flex
          mx="3rem"
          w="45%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Text fontWeight="semibold" fontSize="0.9em" color="gray.600">
              {`${score} score`}
            </Text>
            <Text fontWeight="semibold" fontSize="0.9em" color="gray.400">
              {`${users} Users`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="semibold" fontSize="0.9em" color="gray.600">
              {type}
            </Text>
            <Text fontWeight="semibold" fontSize="0.9em" color="gray.400">
              {`${episodes} episodes`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="semibold" fontSize="0.9em" color="gray.600">
              {status}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RankingCard;
