import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,

);

const labels = Array(20).fill(0).map(() => Math.random() * 10000);

const LineChart = () => {
    return (
        <div style={{ width: '150px', height: '5rem' }}>
            <Line options={
                {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart',
                        },
                    },
                    scales: {
                        y: {
                            display: false
                        }, x: {
                            display: false
                        }
                    }
                }
            } data={
                {
                    labels,
                    datasets: [
                        {
                            data: Array(20).fill(0).map(() => Math.random() * 10000),
                            borderColor: (context) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                if (!ctx || !chartArea) return "#588cf5"
                                const gradient = ctx.createLinearGradient(
                                    chartArea.left,
                                    chartArea.top,
                                    chartArea.right,
                                    chartArea.bottom
                                );
                                gradient.addColorStop(0, '#14ffff');
                                gradient.addColorStop(1, '#588cf5');
                                return gradient;
                            },
                            tension: .6,
                            pointRadius: 0
                        }]
                }
            } />
        </div>
    )

}

export default LineChart