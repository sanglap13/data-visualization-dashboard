//stacked bar chart
type StackedBarChartData = {
  [key: string]: number;
};

export type StackedBarChartDataProps = {
  vehicleCCData: StackedBarChartData;
  sdkIntData: StackedBarChartData;
};
