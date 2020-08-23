import React from 'react';
import exchange from '../../assets/images/icons/exchange.svg';
import './styles.scss';

export const ConvertButton = () => {
    return (
        <div className="convert__button">
            <button><img src={exchange} alt="" /></button>
        </div>
    );
};
