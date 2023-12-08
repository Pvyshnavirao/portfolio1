import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barcharts = () => {
  const data = {
    labels: ["HTML", "CSS", "Java", "React", "Nodejs", "Python"],
    datasets: [
      {
        label: "Skill Level",
        data: [80, 95, 75, 67, 80, 85],
        backgroundColor: "#21325e",
      },
    ],
  };
  const options = { indexAxis: "y" };
  return (
    <div>
     
      <Bar data={data} options={options} height={400} width={700}></Bar>
    </div>
  );
};
export default Barcharts;
