import React, { useState, useEffect } from "react";
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
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";

const StyledForm = styled.form`
  width: 78rem;
  margin: 0rem 1.5rem;
`;

function Navbar() {
  const [hamburger] = useMediaQuery("(min-width: 1200px)");
  const [logo] = useMediaQuery("(min-width: 350px)");
  const [searchText, setSearchText] = useState("");
  const [drawer, setDrawer] = useState("none");
  let history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (drawer === "block") {
      setDrawer("none");
    }
    // eslint-disable-next-line
  }, [hamburger, pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      history.push(`/search/anime/${searchText}`);
      setSearchText("");
    }
  };

  const handleHamburger = () => {
    drawer === "none" ? setDrawer("block") : setDrawer("none");
  };

  return (
    <>
      <Flex
        h="4rem"
        py="3"
        px="6"
        bg="blue.900"
        alignItems="center"
        justify="space-between"
      >
        {logo && (
          <LinkBox>
            <Heading as="h1" size="lg" color="white">
              <LinkOverlay as={RouterLink} to="/">
                ChakraAnime
              </LinkOverlay>
            </Heading>
          </LinkBox>
        )}
        <StyledForm onSubmit={handleSearch}>
          <InputGroup>
            <Input
              placeholder="Search..."
              fontSize="1.3em"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              color="white"
              value={searchText}
            />
            <InputRightElement
              children={
                <IconButton
                  aria-label="Search"
                  variant="unstyled"
                  type="submit"
                >
                  <SearchIcon color="white" />
                </IconButton>
              }
            />
          </InputGroup>
        </StyledForm>
        {hamburger ? (
          <Box minW="max-content">
            <Button colorScheme="teal" mr="4" as={RouterLink} to="/register">
              Sign Up
            </Button>
            <Button colorScheme="teal" as={RouterLink} to="/login">
              Log in
            </Button>
          </Box>
        ) : (
          <IconButton
            aria-label="Hamburger"
            variant="unstyled"
            icon={<HamburgerIcon color="white" boxSize={9} />}
            onClick={handleHamburger}
          />
        )}
      </Flex>
      <Box
        bg="blue.900"
        w="100%"
        top="4rem"
        position="absolute"
        display={drawer}
        color="white"
      >
        <Button
          variant="ghost"
          w="100%"
          borderRadius="0px"
          p="2rem"
          fontSize="1.2em"
          as={RouterLink}
          to="/register"
        >
          Sign Up
        </Button>
        <Button
          variant="ghost"
          w="100%"
          borderRadius="0px"
          p="2rem"
          fontSize="1.2em"
          as={RouterLink}
          to="/login"
        >
          Login
        </Button>
      </Box>
    </>
  );
}

export default Navbar;
