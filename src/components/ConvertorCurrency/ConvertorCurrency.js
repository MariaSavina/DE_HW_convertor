import React, { Component } from 'react';
import {connect} from 'react-redux';

import CurrencyInput from './CurrencyInput';
import CurrencyOutput from './CurrencyOutput';
import {changeOutputValue, getCurrent, changeSomeValue} from '../../store/convertorCurrent/actions'

import '../ConvertorLength/convertorLength.scss';

// https://api.privatbank.ua/#p24/exchange

class ConvertorCurrency extends Component {

    componentDidMount(){
        const dataCur = this.props.showMe()
    }
    showMe = () => {
        console.log(this.props.data)
        const { changeOutputValue } = this.props
        changeOutputValue('tru-la-la')
    }
    render(){
        return(
            <div className="length-convert">
                <CurrencyInput />
                <button className="length-convert__button" onClick={this.showMe}>Convert</button>
                <CurrencyOutput />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {data: state.current}
}
const mapDispatchToProps = (dispatch) =>({
    changeOutputValue: (value) => dispatch(changeOutputValue(value)),
    changeSomeValue: (value) => dispatch(changeSomeValue(value)),
    showMe: () => {dispatch(getCurrent())}
})

export default connect(mapStateToProps, mapDispatchToProps)(ConvertorCurrency)