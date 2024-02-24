type PieChartDataItem = {
  id: string;
  label: string;
  value: number;
};

export type PieChartProps = {
  pieData: PieChartDataItem[];
};
