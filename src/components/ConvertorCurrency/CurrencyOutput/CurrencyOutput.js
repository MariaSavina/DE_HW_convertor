import React, { Component } from 'react';
import { currentOptions } from '../../../constants/contants'

class CurrencyOutput extends Component {
    handleChangeSelect = (e) => {
        const { changeOutputType } = this.props
        changeOutputType(e.target.value)
    }

    render(){
        const { output_type, output_value } = this.props

        return(
            <div className="length-convert__first">
                <input className="length-convert__input" value={output_value} disabled/>                            
                    <select className="length-convert__select" value={output_type} onChange={this.handleChangeSelect}>
                        {currentOptions.map((option)=>(
                            <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                    </select>
            </div>)
    }
}

export default CurrencyOutput;