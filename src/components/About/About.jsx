import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const About = () => {
  const [sCart, setSCart] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setSCart(data.data));
  }, []);
  const dataChart = useLoaderData();
  const onedata = dataChart.data;
  const me = onedata.map((cheat) => cheat.total);
  console.log(sCart);
  const { name, id, total } = sCart[0];
  // console.log(total);
  const quizQ = dataChart.map((quiz) => quiz.total);
  return (
    <div className="flex justify-center my-20">
      <LineChart width={400} height={400} data={sCart}>
        <Line type="monotone" dataKey={quizQ} stroke="#8884d8" />
        {/* <Line type="monotone" dataKey={me} stroke="#8884d8" /> */}
        <XAxis dataKey={onedata.name} />
        <YAxis dataKey={onedata.id} />
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default About;
