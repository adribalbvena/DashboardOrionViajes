import React from 'react';
import { useApiCharts } from '../../hooks/useApiCharts';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const BarChart = ({entity}) => {
    const [valueCharts, errorCharts] = useApiCharts(entity);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Cantidad de gastos por método de pago',
          },
        },
      };

      const labels = ["Total"];

      const data = {
        labels,
        datasets: [
          {
            label: 'Tarjeta',
            data: valueCharts.filter(valueCharts => valueCharts.paymentMethod == "Tarjeta").map(valueCharts => valueCharts.count),
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1.2)',
            borderWidth: 1,

          },
          {
            label: 'Efectivo',
            data: valueCharts.filter(valueCharts => valueCharts.paymentMethod == "Efectivo").map(valueCharts => valueCharts.count),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1.2)',
            borderWidth: 1,
          },
        ],
      };

  return (
    <Bar options={options} data={data} />
  )
}
