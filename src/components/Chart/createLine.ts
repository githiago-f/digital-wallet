const createLine = (lineConfig: TChartLineConfig) => {
    return {
        label: lineConfig.label,
        borderColor: lineConfig.color,
        data: lineConfig.data
    };
};


export default createLine;
