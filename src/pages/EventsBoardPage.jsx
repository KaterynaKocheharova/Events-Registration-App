import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../redux/events/operations";
import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import EventsList from "../components/EventsList/EventsList";
import PageTitle from "../components/common/PageHeading";

const EventsBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents({ page: 1, perPage: 10 }));
  }, [dispatch]);

  return (
    <Section>
      <PageContainer>
        <PageTitle>
          Available Events
        </PageTitle>
        <EventsList />
      </PageContainer>
    </Section>
  );
};

export default EventsBoardPage;
