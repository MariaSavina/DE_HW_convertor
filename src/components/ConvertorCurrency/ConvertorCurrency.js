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
        console.log(this.props.data);
        let first=Number(this.props.data.input_value);
        let second=1;

        for(let i=0;i<this.props.data.some_value.length;i++){
            if(this.props.data.some_value[i].ccy == this.props.data.input_type.toUpperCase()){
                first = Number(this.props.data.input_value) * this.props.data.some_value[i].buy
            }
            if(this.props.data.some_value[i].ccy == this.props.data.output_type.toUpperCase()){
                second = Number(this.props.data.some_value[i].buy)
            }
        }
        const { changeOutputValue } = this.props
        changeOutputValue(first / second)
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