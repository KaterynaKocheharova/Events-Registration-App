import { Link } from "react-router-dom";
import { Flex, Spacer, Button, Heading } from "@chakra-ui/react";
import PageContainer from "./common/Container/Container";

const AppBar = () => {
  return (
    <PageContainer maxW="md" bg="blue.600" color="white">
      <Flex as="nav" p="20px" alignItems="center" boxShadow="base">
        <Heading as="h1">Events Registration</Heading>
        <Spacer />
        <Button as={Link} to="/" colorScheme="purple">
          HOME
        </Button>
      </Flex>
    </PageContainer>
  );
};

export default AppBar;
