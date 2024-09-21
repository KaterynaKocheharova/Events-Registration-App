import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../redux/events/operations";
import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import { Heading } from "@chakra-ui/react";
import EventsList from "../components/EventsList";
const EventsBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents({ page: 1, perPage: 10 }));
  }, [dispatch]);

  return (
    <Section>
      <PageContainer>
        <Heading as="h2" size="lg" textAlign="center" mb="3rem">
          Available Events
        </Heading>
        <EventsList />
      </PageContainer>
    </Section>
  );
};

export default EventsBoardPage;
