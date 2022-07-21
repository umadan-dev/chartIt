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
  const dataArr = data?.map((item) => ({
    time: item[8],
    val0: Number(item[0]),
    val1: Number(item[1]),
    val2: Number(item[2]),
    val3: Number(item[3]),
    val4: Number(item[4]),
    val5: Number(item[5]),
    val6: Number(item[6]),
    val7: Number(item[7]),
  }));

  return (
    <>
      <LineChart
        width={800}
        height={300}
        data={dataArr}
        margin={{ top: 40, right: 80, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[-80, 80]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="val0" stroke="#36ff39" />
        <Line type="monotone" dataKey="val1" stroke="#ffbb33" />
        <Line type="monotone" dataKey="val2" stroke="#e966c5" />
        <Line type="monotone" dataKey="val3" stroke="#fa8072" />
        <Line type="monotone" dataKey="val4" stroke="#ff1693" />
        <Line type="monotone" dataKey="val5" stroke="#f8f7f2" />
        <Line type="monotone" dataKey="val6" stroke="#FBD604" />
        <Line type="monotone" dataKey="val7" stroke="#FB0404 " />
      </LineChart>
    </>
  );
}
