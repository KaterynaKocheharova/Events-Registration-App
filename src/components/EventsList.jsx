import { useSelector } from "react-redux";
import { selectEvents } from "../redux/events/selectors";
import { SimpleGrid } from "@chakra-ui/react";
import EventItem from "./EventItem";

const EventsList = () => {
  const events = useSelector(selectEvents);

  return (
    <SimpleGrid spacing="10" minChildWidth="250px">
      {events.length > 0 &&
        events.map((eventData) => (
          <EventItem key={eventData._id} eventData={eventData} />
        ))}
    </SimpleGrid>
  );
};

export default EventsList;
