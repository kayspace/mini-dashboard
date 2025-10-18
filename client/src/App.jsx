import React from "react";
import MetricCard from "./components/MetricCard";
import Chart from "./components/Chart";
import RecentTradesTable from "./components/RecentTradesTable";
import { useState, useEffect } from "react";

const App = () => {

  const [metricsData, setMetricsData] = useState([])
  const [recentTrades, setRecentTrades] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/analytics")
      .then((res) => res.json())
      .then((data) => {
        setMetricsData(data.metricsData);
        setRecentTrades(data.recentTrades);
      })
      .catch((err) => console.error("Error fetching analytics:", err));
  }, []);

  if (metricsData.length === 0) {
    return <p>Loading analytics...</p>;
  }
  

  return (
    <div className="main">
      <h1>Mini Analytics Dashboard</h1>
      <div className="metrics-container">
        {metricsData.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            tooltip={metric.tooltip}
          />
        ))}
      </div>
      <div className="chart-container">
        <p>Wins & Loses Chart</p>
        <Chart
          winningTrades={metricsData[4].value}
          losingTrades={metricsData[5].value}
        />
      </div>

      <RecentTradesTable recentTrades={recentTrades} />
    </div>
  );
};

export default App;
