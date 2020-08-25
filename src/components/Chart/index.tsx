import React from 'react';
import { Line } from 'react-chartjs-2';
import { useChartHooks, useLineHooks } from './hooks';
import './styles.scss';

const Chart = () => {
    const { labels } = useChartHooks({ labels: ['Jan', 'Fev', 'Abr', 'Mar', 'Mai', 'Jun', 'Jul'] });

    const { line: dollarLine } = useLineHooks({
        label: 'dollar',
        color: 'green'
    });

    const { line: secondLine } = useLineHooks({
        label: 'bitcoin',
        color: 'orange'
    });

    return (
        <div className="chart-container">
            <Line
                height={150}
                data={{
                    labels: labels,
                    datasets: [
                        dollarLine,
                        secondLine
                    ]
                }}
            />
        </div>
    );
};

export default Chart;
