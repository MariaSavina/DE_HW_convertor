import React, { Component } from 'react';
import { lengthOptions } from '../../../constants/contants'

class ConverterBlock extends Component {
    handleChangeSelect = (e) => {
        const { changeInputType } = this.props
        changeInputType(e.target.value)
    }
    handleChangeInput = (e) => {
        let res=e.target.value.split('')
        let ressss=''
        for(let i=0;i<res.length;i++){
            if(res[i].charCodeAt() > 48 &&  res[i].charCodeAt() < 57){
                ressss+=res[i]
            }
        }
        const { changeInputValue } = this.props
        changeInputValue(ressss)
    }
    render(){
        const { input_type, input_value } = this.props

        return(
            <div className="length-convert__first">
                <input className="length-convert__input" value={input_value} onChange={this.handleChangeInput}/>                            
                    <select className="length-convert__select" value={input_type} onChange={this.handleChangeSelect}>
                        {lengthOptions.map((option)=>(
                            <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                    </select>
            </div>)
    }
}

export default ConverterBlock;