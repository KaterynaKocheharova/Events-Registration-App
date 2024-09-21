// import { createSelector } from "@reduxjs/toolkit";
// import { selectFilter } from "../filters/selectors";

export const selectEvents = (state) => state.events.items;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

export const selectIsLoading = (state) => state.events.loading;
export const selectError = (state) => state.events.error;
export const selectTotalPages = (state) => state.events.totalPages;
export const selectCurrentPage = (state) => state.events.currentPage;
