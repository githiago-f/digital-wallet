import React from 'react';
import './styles.scss';

export const LeftCard = ({
    title,
    subtitle,
}: ICardProps) => {
    return (
        <div>
            <div className="card">
                <div className="border"></div>
                <div className="content">
                    <div className="icon"></div>
                    <div className="text-element">
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
