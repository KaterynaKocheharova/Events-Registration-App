import CustomGrid from "./common/CustomGrid";
import EventItem from "./EventItem";

const EventsList = ({ events }) => {
  return (
    <CustomGrid>
      {events.map((eventData) => (
        <EventItem key={eventData._id} eventData={eventData} />
      ))}
    </CustomGrid>
  );
};

export default EventsList;
