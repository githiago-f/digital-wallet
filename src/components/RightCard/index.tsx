import React from 'react';
import './styles.scss';

export const RightCard = ({
    title,
    subtitle,
}: ICardProps) => {
    return (
        <div>
            <div className="right-card">
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
