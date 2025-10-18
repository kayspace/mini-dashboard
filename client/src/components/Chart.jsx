import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Chart = ({ winningTrades , losingTrades}) => {
  const data01 = [
    { name: "Winning Trades", value: winningTrades },
    { name: "Losing Trades", value: losingTrades },
  ];

  return (
    
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
