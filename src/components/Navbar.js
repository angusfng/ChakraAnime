import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledForm = styled.form`
  width: 78rem;
  margin: 0rem 1.5rem;
`;

function Navbar() {
  const [hamburger] = useMediaQuery("(min-width: 1110px)");
  const [logo] = useMediaQuery("(min-width: 350px)");
  const [searchText, setSearchText] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <Flex py="3" px="6" bg="blue.900" justify="space-between">
      {logo && (
        <LinkBox>
          <Heading as="h1" size="lg" color="white">
            <LinkOverlay as={RouterLink} to="/">
              ChakraAnime
            </LinkOverlay>
          </Heading>
        </LinkBox>
      )}
      <StyledForm onSubmit={searchHandler}>
        <InputGroup>
          <Input
            placeholder="Search..."
            fontSize="1.3em"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            color="white"
          />
          <InputRightElement
            children={
              <IconButton aria-label="Search" variant="unstyled" type="submit">
                <SearchIcon color="white" />
              </IconButton>
            }
          />
        </InputGroup>
      </StyledForm>
      {hamburger ? (
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      ) : (
        <IconButton
          aria-label="Hamburger"
          variant="unstyled"
          icon={<HamburgerIcon color="white" boxSize={9} />}
        />
      )}
    </Flex>
  );
}

export default Navbar;
