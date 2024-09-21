import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageContainer from "../components/common/Container/Container";
import { Heading } from "@chakra-ui/react";
import { fetchEvents } from "../redux/events/operations";

const EventsBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents({ page: 1, perPage: 10 }));
  }, [dispatch]);

  return (
    <PageContainer>
      <Heading as="h2" size="lg" textAlign="center">
        Available Events
      </Heading>
    </PageContainer>
  );
};

export default EventsBoardPage;
