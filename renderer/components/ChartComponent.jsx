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
        return { id: index, values: packet[i] };
      })
    );
  }

  return (
    <div className="w-full h-fit border-blue-800 border-2  mt-10">
      {packetArray.map((packets) => {
        return (
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
                contentStyle={{ backgroundColor: "lightblue", color: "black" }}
              />
              <Legend />
              <Line type="monotone" dataKey="values" stroke="gray" />
            </LineChart>
          </ResponsiveContainer>
        );
      })}
    </div>
  );
}
