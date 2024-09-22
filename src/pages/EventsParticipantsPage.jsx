import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import { Text } from "@chakra-ui/react";
import { fetchParticipants } from "../non-redux-api/participants";

const EventsParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { eventId } = useParams();

  useEffect(() => {
    const getParticipants = () => {
      setLoading(true);
      fetchParticipants(eventId)
        .then((res) => {
          setParticipants(res.data.participants);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getParticipants();
  }, [eventId]);

  useEffect(() => {
    console.log(participants);
  }, [participants]);

  return (
    <Section>
      <PageContainer>
        {loading && (
          <Text textAlign="center" fontSize="24px">
            Loading participants. Please, wait.
          </Text>
        )}
        {!participants.length && !loading && !error && (
          <Text textAlign="center" fontSize="24px">
            No participants yet!
          </Text>
        )}
        {error && (
          <Text textAlign="center" fontSize="24px">
            Woops! Something seems to be wrong. Check out your internet
            connection or try again later.
          </Text>
        )}
      </PageContainer>
    </Section>
  );
};

export default EventsParticipantsPage;
