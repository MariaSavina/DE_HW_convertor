import CurrencyOutput from './CurrencyOutput';
import { connect } from 'react-redux';
import { changeOutputType, changeOutputValue } from "../../../store/convertorCurrent/actions";
import { getOutputType, getOutputValue } from "../../../store/convertorCurrent/selectors";

const mapStateToProps = (state) =>({
    output_type: getOutputType(state),
    output_value: getOutputValue(state)
}) 

const mapDispatchToProps = (dispatch) =>({
    changeOutputType: (type) => dispatch(changeOutputType(type)),
    changeOutputValue: (value) => dispatch(changeOutputValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyOutput);