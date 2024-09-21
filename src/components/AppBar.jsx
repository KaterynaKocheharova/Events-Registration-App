import { Flex, Spacer, Button, Heading } from "@chakra-ui/react";
import PageContainer from "./common/Container/Container";

const AppBar = () => {
  return (
    <PageContainer maxW='md' bg='blue.600' color='white'>
      <Flex as="nav" p="20px" alignItems="center" mb="40px" boxShadow="base">
        <Heading as="h1">Events Registration</Heading>
        <Spacer />
        <Button colorScheme="purple">Register for event</Button>
      </Flex>
    </PageContainer>
  );
};

export default AppBar;
