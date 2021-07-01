import CurrencyInput from './CurrencyInput'

import { connect } from 'react-redux';
import { changeInputType, changeInputValue } from "../../../store/convertorCurrent/actions";
import { getInputType, getInputValue } from "../../../store/convertorCurrent/selectors";

const mapStateToProps = (state) =>({
    input_type: getInputType(state),
    input_value: getInputValue(state)
}) 

const mapDispatchToProps = (dispatch) =>({
    changeInputType: (type) => dispatch(changeInputType(type)),
    changeInputValue: (value) => dispatch(changeInputValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInput)