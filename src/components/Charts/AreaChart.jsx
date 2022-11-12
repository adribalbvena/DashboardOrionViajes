import React from 'react';
import { useApiCharts } from '../../hooks/useApiCharts'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

export const AreaChart = ({entity}) => {
    const [valueCharts, errorCharts] = useApiCharts(entity);
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Cantidad de usuarios registrados por año',
          },
        },
      };

    const labels = Object.keys(valueCharts).map(key => valueCharts[key].year);

    const data = {
    labels,
    datasets: [
    {
      fill: true,
      label: 'Cantidad de usuarios registrados',
      data: Object.keys(valueCharts).map(key => valueCharts[key].count),
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
  ],
};


  return (
    <Line options={options} data={data} />
  )
}
