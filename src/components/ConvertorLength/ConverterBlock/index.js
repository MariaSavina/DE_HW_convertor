import ConverterBlock from "./ConverterBlock";
import { connect } from 'react-redux';
import { changeInputType, changeInputValue } from "../../../store/converterLength/actions";
import { getInputType, getInputValue } from "../../../store/converterLength/selectors";

const mapStateToProps = (state) =>({
    input_type: getInputType(state),
    input_value: getInputValue(state)
}) 

const mapDispatchToProps = (dispatch) =>({
    changeInputType: (type) => dispatch(changeInputType(type)),
    changeInputValue: (value) => dispatch(changeInputValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConverterBlock)