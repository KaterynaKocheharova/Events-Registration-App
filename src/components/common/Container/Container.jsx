import { Container } from "@chakra-ui/react";

const PageContainer = ({ children }) => {
  return (
    <Container maxW="1400px">
      {children}
    </Container>
  );
};

export default PageContainer;
