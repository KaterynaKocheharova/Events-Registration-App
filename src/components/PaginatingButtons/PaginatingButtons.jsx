import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {selectTotalPages, selectCurrentPage} from "../../redux/events/selectors";
import { changeCurrentPage } from "../../redux/events/slice";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import css from "./PaginatingButtons.module.css";

const PaginatingButtons = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageClick = (event) => {
    dispatch(changeCurrentPage(event.selected + 1));
  };

  return (
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
  );
};

export default PaginatingButtons;
