import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage } from "../redux/events/selectors";
import { fetchEvents } from "../redux/events/operations";
import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import { Heading } from "@chakra-ui/react";
import EventsList from "../components/EventsList";
const EventsBoardPage = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchEvents({ page: currentPage, perPage: 10 }));
  }, [dispatch, currentPage]);

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
