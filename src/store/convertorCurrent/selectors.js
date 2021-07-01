import { createSelector } from "reselect";

export const getCurrentState = (state) => state.current;
export const getInputType = createSelector(
    getCurrentState,
    (current) => current.input_type
)
export const getInputValue = createSelector(
    getCurrentState,
    (current) => current.input_value
)
export const getOutputType = createSelector(
    getCurrentState,
    (current) => current.output_type
)
export const getOutputValue = createSelector(
    getCurrentState,
    (current) => current.output_value
)
export const getSomeValue = createSelector(
    getCurrentState,
    (current) => current.some_value
)