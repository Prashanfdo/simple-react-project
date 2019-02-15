import { createSelector } from "reselect";
import { pageSelector } from "../../root-selectors";

export const homePageSelector = createSelector(
  pageSelector,
  state => state && state.home
);
