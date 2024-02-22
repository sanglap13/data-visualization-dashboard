import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = () => {
  const data = [
    {
      country: 'AD',
      'hot dog': 184,
      'hot dogColor': 'hsl(5, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 71,
      'hot dogColor': 'hsl(53, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 32,
      'hot dogColor': 'hsl(50, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 93,
      'hot dogColor': 'hsl(238, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 63,
      'hot dogColor': 'hsl(151, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 77,
      'hot dogColor': 'hsl(72, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 22,
      'hot dogColor': 'hsl(37, 70%, 50%)',
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  );
};

export default BarChart;
