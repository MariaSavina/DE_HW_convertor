import React, { Component } from 'react';
import {connect} from 'react-redux';

import ConverterBlock from './ConverterBlock';
import './convertorLength.scss';

class ConvertorLength extends Component{
    showMe = () => {
        console.log(this.props.lengthFUCK)
    }
    render(){
        return(
                    <div className="length-convert">
                        <ConverterBlock />
                        <button className="length-convert__button" onClick={this.showMe}>Convert</button>
                        <div className="length-convert__second">
                            <input className="length-convert__input" disabled/>
                            <select className="length-convert__select">
                                <option>Meter</option>
                                <option>Verst</option>
                                <option>Mile</option>
                                <option>Foot</option>
                                <option>Yard</option>
                            </select>
                        </div>
                    </div>
                )
    }
}

function mapStateToProps(state){
    return {lengthFUCK: state.length}
}


export default connect(mapStateToProps)(ConvertorLength)