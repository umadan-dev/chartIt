import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, heading }) {
  const { x, y } = heading;
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={x} />
        <YAxis />
        <Tooltip />
        <Legend />
        {y?.map((item) => (
          <Bar dataKey={item?.name} stackId='a' fill={item?.color} />
        ))}
      </BarChart>
    </div>
  );
}
