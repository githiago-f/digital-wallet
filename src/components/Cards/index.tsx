import React from 'react';
import { LeftCard } from 'components/LeftCard';
import { RightCard } from 'components/RightCard';
import { ConvertButton } from 'components/ConverterButton';
import './styles.scss';

export const Cards = ({
    title,
    subtitle,
}: ICardProps) => {
    return (
        <div className="cards-wrapper">
            <LeftCard title={title} subtitle={subtitle} />
            <ConvertButton />
            <RightCard title="right" subtitle={subtitle} />
        </div>
    );
};
