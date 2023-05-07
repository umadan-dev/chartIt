import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const { ipcRenderer } = require('electron');
export default function Chart({ packets, channelNo }) {
  const [arr, setArr] = useState(packets || []);

  useEffect(() => {
    const dataOfChannel = packets
      ?.map((packet) => ({
        timestamp: new Date(packet[8]).toLocaleTimeString(),
        channel: Number(packet[channelNo]),
      }))
      ?.slice(0, 5);
    setArr([...dataOfChannel]);
  }, [packets]);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={800}
        height={300}
        data={arr}
        margin={{ top: 40, right: 80, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <ReferenceLine y={0} stroke="red" />
        <YAxis
          type="number"
          domain={[-80, 80]}
          allowDataOverflow={false}
        />
        <Tooltip
          contentStyle={{ backgroundColor: 'white', color: 'black' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="channel"
          stroke="#6c69ac"
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
