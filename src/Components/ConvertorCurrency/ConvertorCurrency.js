import React from 'react';

import '../ConvertorLength/convertorLength.scss';

// https://api.privatbank.ua/#p24/exchange

const ConvertorCurrency = () => {
    return(
        <div>
            <div className="length-convert">
            <div className="length-convert__first">
                <input className="length-convert__input"/>
                <select className="length-convert__select">
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>RUR</option>
                </select>
            </div>
            <button className="length-convert__button">Convert</button>
            <div className="length-convert__second">
                <input className="length-convert__input" disabled/>
                <select className="length-convert__select">
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>RUR</option>
                </select>
            </div>
        </div>
        </div>
    )
}

export default ConvertorCurrency