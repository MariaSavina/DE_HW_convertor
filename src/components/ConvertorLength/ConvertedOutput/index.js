import ConvertedOutput from './ConvertedOutput';
import { connect } from 'react-redux';
import { changeOutputType, changeOutputValue } from "../../../store/converterLength/actions";
import { getOutputType, getOutputValue } from "../../../store/converterLength/selectors";

const mapStateToProps = (state) =>({
    output_type: getOutputType(state),
    output_value: getOutputValue(state)
}) 

const mapDispatchToProps = (dispatch) =>({
    changeOutputType: (type) => dispatch(changeOutputType(type)),
    changeOutputValue: (value) => dispatch(changeOutputValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConvertedOutput);