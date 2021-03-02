import React from "react";
import {
  LinkBox,
  Box,
  Image,
  LinkOverlay,
  Text,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function AnimeImage(props) {
  const scoreColor = () => {
    if (props.score < 5) {
      return "red.400";
    } else if (props.score < 7) {
      return "orange.400";
    } else {
      return "green.400";
    }
  };

  return (
    <Popover trigger="hover" placement="right-start">
      <PopoverTrigger>
        <LinkBox>
          <Box
            color="gray.500"
            _hover={{
              color: "orange.600",
            }}
          >
            <Image
              h="16rem"
              w="12rem"
              src={props.image_url}
              alt={`Anime ${props.idx}`}
              borderRadius="5px"
              boxShadow="md"
              objectFit="cover"
            />
            <LinkOverlay as={RouterLink} to={`/anime/${props.mal_id}`}>
              <Text fontWeight="semibold" mt={1}>
                {props.title}
              </Text>
            </LinkOverlay>
          </Box>
        </LinkBox>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          <Heading as="h3" size="sm">
            {props.title}
          </Heading>
        </PopoverHeader>
        <PopoverBody>
          <Box my={1}>
            <Text d="inline" fontWeight="bold">
              Score:{" "}
            </Text>
            <Text
              bg={scoreColor}
              color="white"
              p={1}
              borderRadius="5px"
              d="inline"
            >
              {props.score}
            </Text>
          </Box>
          <Box my={1}>
            <Text d="inline" fontWeight="bold">
              Type:{" "}
            </Text>
            <Text d="inline">{props.type}</Text>
          </Box>
          <Box my={1}>
            <Text d="inline" fontWeight="bold">
              Episodes:{" "}
            </Text>
            <Text d="inline">{props.episodes}</Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default AnimeImage;
