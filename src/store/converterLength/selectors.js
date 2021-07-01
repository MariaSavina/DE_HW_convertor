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
export const getOutputType = createSelector(
    getLengthState,
    (length) => length.output_type
)
export const getOutputValue = createSelector(
    getLengthState,
    (length) => length.output_value
)