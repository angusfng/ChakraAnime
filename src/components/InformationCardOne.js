import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Divider,
  Center,
} from "@chakra-ui/react";

function InformationCardOne(props) {
  return (
    <Flex
      bg="white"
      boxShadow="lg"
      borderRadius="10px"
      flexDirection="column"
      p="2rem"
    >
      <Heading as="h3" fontSize="1.5em">
        Information
      </Heading>
      <Divider my="1rem" />
      <Flex>
        <Center>
          <Image
            maxW="30rem"
            objectFit="cover"
            src={props.json.image_url}
            alt="Information card image"
            pr="2rem"
          />
        </Center>
        <Flex flexDirection="column" justifyContent="space-between">
          <Box>
            <Text d="inline" fontWeight="bold">
              Type:{" "}
            </Text>
            <Text d="inline">{props.json.type}</Text>
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Score:{" "}
            </Text>
            <Text
              bg="orange.300"
              color="white"
              p={1}
              borderRadius="5px"
              d="inline"
            >
              {props.json.score}
            </Text>
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Status:{" "}
            </Text>
            <Text d="inline">{props.json.status}</Text>
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Aired:{" "}
            </Text>
            <Text d="inline">{props.aired}</Text>
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Genres:{" "}
            </Text>
            {props.genres.map((genre, idx) => (
              <Text key={idx} d="inline">
                {(idx ? ", " : "") + genre.name}
              </Text>
            ))}
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Episodes:{" "}
            </Text>
            <Text d="inline">{props.json.episodes}</Text>
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Duration:{" "}
            </Text>
            <Text d="inline">{props.json.duration}</Text>
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Studios:{" "}
            </Text>
            {props.studios.map((studio, idx) => (
              <Text key={idx} d="inline">
                {(idx ? ", " : "") + studio.name}
              </Text>
            ))}
          </Box>
          <Box>
            <Text d="inline" fontWeight="bold">
              Rating:{" "}
            </Text>
            <Text d="inline">{props.json.rating}</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default InformationCardOne;
