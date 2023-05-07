import {
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip
} from "recharts";

export default function Chart({ data }) {
  const dataArray = data?.map((item) => ({
    time: item[8],
    value0: Number(item[0]),
  }));

  return (
    <>
      <LineChart
        data={dataArray}
        width={700}
        height={500}
        margin={30}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[-100, 100]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value0" stroke="#32a868" />
      </LineChart>
    </>
  );
}