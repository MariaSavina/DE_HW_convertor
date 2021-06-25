import { createSelector } from "reselect";

export const getLengthState = (state) => state.length;
export const getInputType = createSelector(
    getLengthState,
    (length) => length.input_type
)
export const getInputValue = createSelector(
    getLengthState,
    (length) => length.input_value
)