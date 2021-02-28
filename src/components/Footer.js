import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

function Footer() {
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
