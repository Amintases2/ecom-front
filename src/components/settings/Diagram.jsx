import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["На рассмотрении", "Забронировано", "Куплено", "Отменено"],
  datasets: [
    {
      label: "# of orders",
      data: [12, 19, 3, 5],
      color: ["white"],
      backgroundColor: ["rgb(255, 207, 1)", "aqua", "green", "gray"],
      borderColor: ["#1F2A40"],
      borderWidth: 3,
    },
  ],
  options: {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
      },
    },
  },
};

const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOption) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = "bolder 20px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseAlign = "center";
    ctx.fillText(
      "63",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y,
    );
  },
};

export default function Diagram() {
  return <Doughnut data={data} plugins={[textCenter]} />;
}
