import React from 'react';
import { LeftCard } from './styles';

export const Card = ({
    title,
    subtitle,
}: ICardProps) => {
    return (
        <div>
            <LeftCard>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </LeftCard>
        </div>
    );
};
