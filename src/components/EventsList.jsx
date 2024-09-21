import { useSelector } from "react-redux";
import { selectEvents } from "../redux/events/selectors";
import { SimpleGrid } from "@chakra-ui/react";
import EventItem from "./EventItem";
import ReactPaginate from "react-paginate";

const EventsList = () => {
  const events = useSelector(selectEvents);

  // const handlePageClick = () => {

  // }

  return (
    <>
      <SimpleGrid spacing="10" minChildWidth="250px">
        {events.length > 0 &&
          events.map((eventData) => (
            <EventItem key={eventData._id} eventData={eventData} />
          ))}
      </SimpleGrid>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
};

export default EventsList;
