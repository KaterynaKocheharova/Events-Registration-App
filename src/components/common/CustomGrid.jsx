import { SimpleGrid } from "@chakra-ui/react";

const CustomGrid = ({ children }) => {
  return (
    <SimpleGrid spacing="10" minChildWidth="250px" mb="3rem">
      {children}
    </SimpleGrid>
  );
};

export default CustomGrid;
