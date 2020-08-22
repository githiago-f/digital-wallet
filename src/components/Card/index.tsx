import React from 'react';
import './styles.scss';

export const Card = ({
    title,
    subtitle,
}: ICardProps) => {
    return (
        <div>
            <div className="card">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </div>
    );
};
