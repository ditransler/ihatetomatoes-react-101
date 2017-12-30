import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = ({currencies, onSelectCurrency}) => {
    return (
        <select onChange={(evt) => onSelectCurrency(evt.target.value)}>
            {
                currencies.map((currency) => {
                    const {code, name} = currency;
                    return <option key={code} value={code}>{name}</option>
                })
            }
        </select>
    );
}

SelectCurrency.propTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;