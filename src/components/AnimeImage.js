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

function AnimeImage({ image_url, title, mal_id, idx }) {
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
              src={image_url}
              alt={`Anime ${idx}`}
              borderRadius="5px"
              boxShadow="md"
              objectFit="cover"
            />
            <LinkOverlay as={RouterLink} to={`/anime/${mal_id}`}>
              <Text fontWeight="semibold" mt={1}>
                {title}
              </Text>
            </LinkOverlay>
          </Box>
        </LinkBox>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader><Heading as="h3" size="sm">{title}</Heading></PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default AnimeImage;
