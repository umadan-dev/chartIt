import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

export default function Chart({ packets }) {
  const [packetArray, setPacketArray] = useState([]);
  const [idxx, setIdxx] = useState(-10);

  useEffect(() => {
    if (idxx < 1000) {
      let arr = packets.map((packet, index) => {
        return { id: idxx + index, values: packet[0] };
      });
      setPacketArray([...packetArray, ...arr]);
      setIdxx((id) => id + 10);
    }
  }, [packets]);

  // console.log(packetArray);

  return (
    <div className="w-full h-fit border-blue-800 border-2 mt-20">
      <div className="mt-10">
        <h1 className="ml-7 font-bold">Channel 1</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={packetArray}
            width={500}
            height={300}
            margin={{ top: 40, right: 80, left: 20, bottom: 10 }}
          >
            <XAxis dataKey="id" interval={"preserveStartEnd"} />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: "yellow", color: "black" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="values"
              stroke="gray"
              activeDot={{ stroke: "yellow" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
