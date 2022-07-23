import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart(props) {
  const { value } = props;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      {value === "" ? (
        <p>Click fetch data stream to view chart</p>
      ) : (
        <div style={{ width: "60%" }}>
          <Line
            data={{
              labels: [
                value[0].slice(8, 9),
                value[1].slice(8, 9),
                value[2].slice(8, 9),
                value[3].slice(8, 9),
                value[4].slice(8, 9),
                value[5].slice(8, 9),
                value[6].slice(8, 9),
                value[7].slice(8, 9),
              ],
              datasets: [
                {
                  data: value[0].slice(0, 8),
                  label: "DataSet1",
                  backgroundColor: "transparent",
                  borderColor: "rgba(41, 211, 149, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[1].slice(0, 8),
                  label: "DataSet2",
                  backgroundColor: "transparent",
                  borderColor: "rgba(211, 41, 149, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[2].slice(0, 8),
                  label: "DataSet3",
                  backgroundColor: "transparent",
                  borderColor: "rgba(2, 229, 250, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[3].slice(0, 8),
                  label: "DataSet4",
                  backgroundColor: "transparent",
                  borderColor: "rgba(252, 132, 3, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[4].slice(0, 8),
                  label: "DataSet5",
                  backgroundColor: "transparent",
                  borderColor: "rgba(2, 107, 245, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[5].slice(0, 8),
                  label: "DataSet6",
                  backgroundColor: "transparent",
                  borderColor: "rgba(151, 2, 250, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[6].slice(0, 8),
                  label: "DataSet7",
                  backgroundColor: "transparent",
                  borderColor: "rgba(242, 2, 250, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[7].slice(0, 8),
                  label: "DataSet8",
                  backgroundColor: "transparent",
                  borderColor: "rgba(247, 2, 56, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[8].slice(0, 8),
                  label: "DataSet9",
                  backgroundColor: "transparent",
                  borderColor: "rgba(235, 247, 2, 1)",
                  borderWidth: 4,
                  fill: true,
                },
                {
                  data: value[9].slice(0, 8),
                  label: "DataSet10",
                  backgroundColor: "transparent",
                  borderColor: "rgba(1255, 255, 255, 1)",
                  borderWidth: 4,
                  fill: true,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  suggestedMin: -80,
                  suggestedMax: 80,
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
