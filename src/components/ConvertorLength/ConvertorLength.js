import React, { Component } from 'react';
import {connect} from 'react-redux';

import ConverterBlock from './ConverterBlock';
import ConvertedOutput from './ConvertedOutput';
import { changeLenth } from '../../helpers/converterHelper.js'
import { changeOutputValue } from "../../store/converterLength/actions";


import './convertorLength.scss';

class ConvertorLength extends Component{

    showMe = () => {
        for(let i=0;i<changeLenth.length;i++){
            if(changeLenth[i].name==this.props.data.input_type){
                const { changeOutputValue } = this.props
                changeOutputValue(Number(this.props.data.input_value) * changeLenth[i][this.props.data.output_type])
            }
        }
    }
    render(){
        
        return(
                    <div className="length-convert">
                        <ConverterBlock />
                        <button className="length-convert__button" onClick={this.showMe}>Convert</button>
                        <ConvertedOutput/>
                    </div>
                )
    }
}

function mapStateToProps(state){
    return {data: state.length}
}
const mapDispatchToProps = (dispatch) =>({
    changeOutputValue: (value) => dispatch(changeOutputValue(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ConvertorLength)