import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../redux/events/operations";
import { selectEvents, selectTotalPages } from "../../redux/events/selectors";
import { SimpleGrid, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import EventItem from "../EventItem";
import ReactPaginate from "react-paginate";
import css from "./EventsList.module.css";

const EventsList = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const totalPages = useSelector(selectTotalPages);

  const handlePageClick = (event) => {
    dispatch(fetchEvents({ page: event.selected + 1, perPage: 10 }));
  };

  return (
    <>
      <SimpleGrid spacing="10" minChildWidth="250px" mb="3rem">
        {events.length > 0 &&
          events.map((eventData) => (
            <EventItem key={eventData._id} eventData={eventData} />
          ))}
      </SimpleGrid>
      {events.length > 0 && (
        <ReactPaginate
          previousLabel={
            <IconButton
              size="sm"
              colorScheme="purple"
              icon={<ArrowBackIcon />}
              aria-label="Previous Page"
              className={css["prev-button"]}
            />
          }
          nextLabel={
            <IconButton
              size="sm"
              colorScheme="purple"
              icon={<ArrowForwardIcon />}
              aria-label="Next Page"
              className={css["next-button"]}
            />
          }
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          renderOnZeroPageCount={null}
          containerClassName={css["pagination-list"]}
          pageClassName={css["pagination-item"]}
          pageLinkClassName={css["page-link"]}
          activeClassName={css["active-pagination-item"]}
          disabledLinkClassName={css["disabled-link"]}
        />
      )}
    </>
  );
};

export default EventsList;
