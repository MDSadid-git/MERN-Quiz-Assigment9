import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const About = () => {
  const dataChart = useLoaderData();
  const onedata = dataChart.data;
  const me = onedata.map((cheat) => cheat.total);
  console.log(me);
  return (
    <LineChart width={400} height={400} data={onedata}>
      <Line type="monotone" dataKey={me} stroke="#8884d8" />
      {/* <Line type="monotone" dataKey={me} stroke="#8884d8" /> */}
      <XAxis dataKey={me} />
      <YAxis dataKey={me} />
      <Tooltip></Tooltip>
      <Legend></Legend>
    </LineChart>
  );
};

export default About;
