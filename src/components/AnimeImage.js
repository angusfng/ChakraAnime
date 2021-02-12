import React from "react";
import { LinkBox, Box, Image, LinkOverlay, Text } from "@chakra-ui/react";

function AnimeImage({image_url, title, idx}) {
  return (
    <LinkBox>
      <Box>
        <Image
          h="16rem"
          w="12rem"
          src={image_url}
          alt={`Airing anime ${idx}`}
          borderRadius="5px"
          boxShadow="md"
        />
        <LinkOverlay href="#">
          <Text fontWeight="semibold" mt={1}>{title}</Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
}

export default AnimeImage;
