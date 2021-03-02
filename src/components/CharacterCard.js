import React, { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

function CharacterCard(props) {
  const [va, setVa] = useState({
    name: "Unknown",
    language: "Unknown",
    image_url: null,
  });

  useEffect(() => {
    if (props.json.voice_actors.length !== 0) {
      setVa(props.json.voice_actors[0]);
    }
  }, [props.json.voice_actors]);

  return (
    <Flex
      bg="white"
      w="24rem"
      h="5rem"
      boxShadow="lg"
      m="1rem"
      justifyContent="space-between"
    >
      <Flex w="50%">
        <Image src={props.json.image_url} objectFit="cover" w="3.5rem"/>
        <Flex flexDirection="column" justifyContent="space-between" p="0.5rem">
          <Text fontSize="xs">{props.json.name}</Text>
          <Text fontSize="xs" color="gray.500">{props.json.role}</Text>
        </Flex>
      </Flex>
      <Flex w="50%" justifyContent="flex-end" textAlign="right">
        <Flex flexDirection="column" justifyContent="space-between" p="0.5rem">
          <Text fontSize="xs">{va.name}</Text>
          <Text fontSize="xs" color="gray.500">{va.language}</Text>
        </Flex>
        <Image
          src={va.image_url}
          objectFit="cover"
          w="3.5rem"
        />
      </Flex>
    </Flex>
  );
}

export default CharacterCard;
