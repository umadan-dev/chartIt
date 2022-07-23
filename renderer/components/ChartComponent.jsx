import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const fakeData = [
  { val: "258.46353642294235", time: "3:574" },
  { val: "261.08971797816156", time: "3:579" },
  { val: "262.61976566948346", time: "3:583" },
  { val: "262.83124154936183", time: "3:587" },
  { val: "262.0132087895336", time: "3:592" },
  { val: "260.4633868946313", time: "3:596" },
  { val: "258.1179333553153", time: "3:600" },
  { val: "254.86134058777975", time: "3:604" },
  { val: "250.767420961131", time: "3:609" },
  { val: "245.83401453017143", time: "3:613" },
];

function Chart({ data }) {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    setDataset(data.splice(-15));
  }, [data]);

  return (
    <main id="main">
      <ResponsiveContainer width="100%" height="100%" minHeight="600px">
        <BarChart
          width={500}
          height={300}
          data={dataset}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[-50, 50]} />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="val" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
}

export default React.memo(Chart);
