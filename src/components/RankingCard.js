import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

function RankingCard() {
  return (
    <Box
      d="flex"
      h="5rem"
      w="90%"
      bg="white"
      boxShadow="xl"
      borderRadius="10px"
    >
      <Image/>
      <Heading as="h4">Testing git change</Heading>
    </Box>
  );
}

export default RankingCard;
