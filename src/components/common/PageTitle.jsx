import { Heading } from "@chakra-ui/react";

const PageTitle = ({ children }) => {
  return (
    <Heading as="h2" size="lg" textAlign="center" mb="3rem">
      {children}
    </Heading>
  );
};

export default PageTitle;
