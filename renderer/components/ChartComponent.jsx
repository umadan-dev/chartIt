import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const { ipcRenderer } = require("electron");
export default function Chart({ data }) {
  let packetData = [];
  for (let i = 0; i < 8; i++) {
    packetData.push(
      data?.map((item) => ({ time: item[8], val: Number(item[i]) }))
    );
  }

  return (
    <>
      {packetData.map((item) => (
        <LineChart
          width={800}
          height={300}
          data={item}
          margin={{ top: 40, right: 80, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" scale="time" />
          <YAxis type="number" domain={[-20, 20]} scale="linear" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="val" stroke="#8884d8" />
        </LineChart>
      ))}
    </>
  );
}
