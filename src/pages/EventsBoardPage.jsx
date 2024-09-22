import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEvents,
  selectCurrentPage,
  selectError,
} from "../redux/events/selectors";
import { fetchEvents } from "../redux/events/operations";
import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import EventsList from "../components/EventsList";
import PageTitle from "../components/common/PageTitle";
import PaginatingButtons from "../components/PaginatingButtons/PaginatingButtons";
import ErrorText from "../components/common/ErrorText";

const EventsBoardPage = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectEvents);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchEvents({ page: currentPage, perPage: 10 }));
  }, [dispatch, currentPage]);

  return (
    <Section>
      <PageContainer>
        <PageTitle>Available Events</PageTitle>
        {error && <ErrorText />}
        {events.length > 0 && (
          <>
            <EventsList events={events} />
            <PaginatingButtons />
          </>
        )}
      </PageContainer>
    </Section>
  );
};

export default EventsBoardPage;
