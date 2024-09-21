import { useEffect } from "react";
import PageContainer from "../components/common/Container/Container";
import { Heading } from "@chakra-ui/react";

const EventsBoardPage = () => {
  return (
    <PageContainer>
      <Heading as="h2" size="lg" textAlign="center">
        Available Events
      </Heading>
    </PageContainer>
  );
};

export default EventsBoardPage;
