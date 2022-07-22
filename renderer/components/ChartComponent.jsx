import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ReferenceLine,
} from "recharts";

export default function Chart({ packets, channelNum }) {
  const [packetArray, setPacketArray] = useState([]);
  const [idxx, setIdxx] = useState(-10);

  const shiftValues = (myArray) => {
    for (let i = 0; i < 10; i++) myArray.shift();
  };

  useEffect(() => {
    let arr = packets.map((packet, index) => ({
      id: idxx + index,
      values: packet[channelNum],
    }));
    if (packetArray.length > 1000) {
      shiftValues(packetArray);
    }
    setPacketArray([...packetArray, ...arr]);
    setIdxx((id) => id + 10);
  }, [packets]);

  return (
    <div className="w-full h-fit border-blue-800 border-2 mt-20">
      <div className="mt-10">
        <h1 className="ml-7 font-bold">Channel {channelNum + 1}</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={packetArray}
            width={500}
            height={300}
            margin={{ top: 40, right: 80, left: 20, bottom: 10 }}
          >
            <XAxis dataKey="id" interval={"preserveStartEnd"} />
            <ReferenceLine y={0} stroke="blue" />
            <YAxis type="number" domain={[-50, 50]} allowDataOverflow={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "white", color: "black" }}
            />
            <Legend />
            <Line
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
