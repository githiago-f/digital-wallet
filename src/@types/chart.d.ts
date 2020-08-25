declare interface TChartConfig {
    labels?: string[];
}

declare interface TChartLineConfig<T = number> {
    label: string;
    data?: T[];
    color: string;
}
