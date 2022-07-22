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
      <ResponsiveContainer width="100%" height={150}>
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
          <YAxis fontSize={"13"} />
          <XAxis
            dy={-5}
            interval={100}
            fontSize={"13"}
            width={"190px"}
            dataKey="time"
          />
          <Line type="linear" dataKey={`status`} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
