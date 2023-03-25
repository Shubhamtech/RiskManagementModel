import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./4. Example Data - Data (1).csv');
      const text = await response.text();
      const data = Papa.parse(text, { header: true }).data;
      setChartData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById('model_output');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.map((item) => item.label),
          datasets: [
            {
              label: 'model output',
              data: chartData.map((item) => item.value),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartData]);

  return <canvas id="model_output"></canvas>;
};

export default ChartComponent;