import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../redux/events/slice";
import {
  selectEvents,
  selectTotalPages,
  selectCurrentPage,
} from "../redux/events/selectors";
import CustomGrid from "./common/CustomGrid";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import EventItem from "./EventItem";
import ReactPaginate from "react-paginate";
import css from "./EventsList.module.css";

const EventsList = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageClick = (event) => {
    dispatch(changeCurrentPage(event.selected + 1));
  };

  return (
    <>
      <CustomGrid>
        {events.length > 0 &&
          events.map((eventData) => (
            <EventItem key={eventData._id} eventData={eventData} />
          ))}
      </CustomGrid>
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
          forcePage={currentPage - 1}
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
