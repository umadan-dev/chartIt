import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export const Chart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          syncId="anyId"
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="time" />
          <Line type="monotone" dataKey="value" stroke="#d41152" fill="#000000" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};