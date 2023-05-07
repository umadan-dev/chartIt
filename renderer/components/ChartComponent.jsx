import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function Chart({packets, channelNum, showAxis}) {
  
  const [chartLabel, setLabel] = useState('');
  const [toBePlottedPktsArr, setToBePlottedPktsArr] = useState([]);

  const timeConverter = (timestamp) => {
    var a = new Date(timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    hour = (hour < 10) ? '0' + hour : hour;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    var time =  hour + ':' + min + ':' + sec ;
    return time;
  };
    
  useEffect(() => {
    let tempArray = packets.map((packet) => ({
      time: timeConverter(packet[8]),
      data: packet[channelNum],
    }));
    if (toBePlottedPktsArr.length >= 1250) {
      toBePlottedPktsArr.splice(0,10);
    }
    setLabel("Channel " + (channelNum + 1));
    setToBePlottedPktsArr([...toBePlottedPktsArr, ...tempArray]);
  }, [packets]);

  return (
    <ResponsiveContainer width="90%" height="80%">
      <LineChart data={toBePlottedPktsArr} width={700} height={400}>
        <XAxis dataKey="time" angle="30" hide={showAxis}/>
        <YAxis type="number" domain={[-50, 50]} label={chartLabel} allowDataOverflow={false} tick={false} />
        <Line dataKey="data" stroke="orange" activeDot={{ stroke: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "white", color: "black" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}