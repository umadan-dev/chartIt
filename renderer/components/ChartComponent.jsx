import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

export default function Chart({ packets }) {
  let packetArray = [];
  for (let i = 0; i < 8; i++) {
    packetArray.push(
      packets.map((packet, index) => {
        return { id: index, packets: packet[i] };
      })
    );
  }

  return (
    <div className="w-full h-fit border-blue-800 border-2 mt-20">
      {packetArray.map((packets, index) => {
        return (
          <div className="mt-10">
            <h1 className="ml-7 font-bold">Channel {index + 1}</h1>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                data={packets}
                width={500}
                height={300}
                margin={{ top: 40, right: 80, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" interval={"preserveStartEnd"} />
                <YAxis />
                <Tooltip
                  contentStyle={{ backgroundColor: "yellow", color: "black" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="packets"
                  stroke="gray"
                  activeDot={{ stroke: "yellow", strokeWidth: 2, r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </div>
  );
}
