import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../redux/events/operations";
import PageContainer from "../components/common/Container/Container";
import { Heading } from "@chakra-ui/react";
import EventsList from "../components/EventsList";
const EventsBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents({ page: 1, perPage: 10 }));
  }, [dispatch]);

  return (
    <PageContainer>
      <Heading as="h2" size="lg" textAlign="center" mb="2rem">
        Available Events
      </Heading>
      <EventsList />
    </PageContainer>
  );
};

export default EventsBoardPage;
