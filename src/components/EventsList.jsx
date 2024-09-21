import { useSelector, useDispatch } from "react-redux";
import { selectEvents, selectTotalPages } from "../redux/events/selectors";
import { changeCurrentPage } from "../redux/events/slice";
import { SimpleGrid } from "@chakra-ui/react";
import EventItem from "./EventItem";
import ReactPaginate from "react-paginate";

const EventsList = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const totalPages = useSelector(selectTotalPages);

  const handlePageClick = (event) => {
    dispatch(changeCurrentPage(event.selected));
  };

  return (
    <>
      <SimpleGrid spacing="10" minChildWidth="250px" mb="3rem">
        {events.length > 0 &&
          events.map((eventData) => (
            <EventItem key={eventData._id} eventData={eventData} />
          ))}
      </SimpleGrid>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default EventsList;
