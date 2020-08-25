import { useState, useEffect } from 'react';
import createLine from './createLine';

const mockRequest = (num: number): Promise<number[]> => {
    return new Promise((resolve)=>{
        resolve([0, .1, .2, .3, .4, .3, .3, .5].map(i => i * num));
    });
};

export const useChartHooks = (config?: TChartConfig) => {
    const [labels, setLabels] = useState([] as string[]);

    useEffect(()=> {
        if(config && config.labels) {
            setLabels(config.labels);
        }
    }, [ config ]);

    return {
        labels
    };
};

export const useLineHooks = (lineConfig: TChartLineConfig) => {
    const [lineData, setLineData] = useState(lineConfig.data || [] as number[]);

    useEffect(() => {
        // todo will load actually the state that will be used by the line
        mockRequest(Math.floor((Math.random() * 10)))
            .then(setLineData)
            .catch(console.error);
    }, []);

    lineConfig.data = lineData;

    return {
        line: createLine(lineConfig)
    };
};
