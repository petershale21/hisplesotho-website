import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Chart.js v3+ requires explicit registration of the pieces you use.
// Keeping this here (not in main.jsx) means any future chart component
// can import these without touching the app entry point.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

/*
 * BarChart — one bar chart component for the site.
 * ----------------------------------------------
 * Wraps react-chartjs-2's <Bar> with our brand palette and a
 * consistent set of accessibility defaults:
 *
 *   - `aria-label` and `role="img"` on the wrapper so screen
 *     readers announce the chart as a meaningful image.
 *   - `maintainAspectRatio: false` + a fixed-height container
 *     so the chart resizes predictably inside our grid.
 *   - Grid lines subdued so data bars stand out.
 *   - Tooltip enabled for hover/tap detail.
 */
export default function BarChart({ labels, values, label, ariaLabel }) {
  const data = {
    labels,
    datasets: [
      {
        label,
        data: values,
        backgroundColor: '#7a1f2b', // burgundy-700
        hoverBackgroundColor: '#9c334b', // burgundy-600
        borderRadius: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // label is rendered elsewhere if needed
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#404040' }, // neutral-700
      },
      y: {
        beginAtZero: true,
        grid: { color: '#e5e5e5' }, // neutral-200
        ticks: { color: '#404040' },
      },
    },
  }

  return (
    <div
      role="img"
      aria-label={ariaLabel || label}
      className="relative h-64 w-full"
    >
      <Bar data={data} options={options} />
    </div>
  )
}