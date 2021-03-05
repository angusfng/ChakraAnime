import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function Footer() {
  let history = useHistory();

  return (
    <Flex
      h="7rem"
      bg="blue.900"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => {
              window.scrollTo(0, 0);
              history.push("/");
            }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="https://github.com/angusfng">
            Github
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}

export default Footer;
