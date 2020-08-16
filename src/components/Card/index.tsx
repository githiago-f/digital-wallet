import React from 'react';
import { LeftCard } from './styles';

export interface Props {
    title?: string;
    subtitle?: string;
}

export const Card = ({
    title,
    subtitle,
}: Props) => {
    return (
        <div>
            <LeftCard>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </LeftCard>
        </div>
    );
};
