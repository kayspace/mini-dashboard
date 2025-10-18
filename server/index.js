const express = require('express')
const app = express()
const port = 3000


const metricsData = [
  {
    title: "Win Rate (%)",
    value: 58.5,
    tooltip: "Percentage of profitable trades",
  },
  {
    title: "Profit Factor",
    value: 1.85,
    tooltip: "Ratio of gross profits to gross losses",
  },
  {
    title: "Average Return (%)",
    value: 2.4,
    tooltip: "Average % return per trade (across all trades)",
  },
  {
    title: "Maximum Drawdown (%)",
    value: -12.4,
    tooltip: "The largest % drop from a peak to a trough in equity curve",
  },
  {
    title: "Total Trades",
    value: 247,
    tooltip: "Number of trades included in the calculation",
  },
  {
    title: "Winning Trades",
    value: 144,
    tooltip: "Total number of profitable trades",
  },
  {
    title: "Losing Trades",
    value: 103,
    tooltip: "Total number of loss-making trades",
  },
  {
    title: "Longest Win Streak",
    value: 8,
    tooltip: "Maximum consecutive profitable trades",
  },
  {
    title: "Longest Loss Streak",
    value: 5,
    tooltip: "Maximum consecutive losing trades",
  },
  {
    title: "Sharpe Ratio",
    value: 1.42,
    tooltip: "Risk-adjusted return performance",
  },
  {
    title: "Total ProfitLoss ($)",
    value: 28650.75,
    tooltip: "Cumulative profit or loss (display in currency form)",
  },
  {
    title: "Total ProfitLoss (%)",
    value: 24.8,
    tooltip: "Cumulative profit or loss (display in % form)",
  },
];

const recentTrades = [
  {
    id: 1,
    date: "2025-10-17",
    symbol: "AAPL",
    type: "Buy",
    entryPrice: 170.25,
    exitPrice: 175.8,
    profitLoss: 555.0,
    profitLossPercent: 3.26,
    result: "Profit",
    duration: "2d",
  },
  {
    id: 2,
    date: "2025-10-16",
    symbol: "TSLA",
    type: "Sell",
    entryPrice: 250.0,
    exitPrice: 260.5,
    profitLoss: -1050.0,
    profitLossPercent: -4.2,
    result: "Loss",
    duration: "1d",
  },
  {
    id: 3,
    date: "2025-10-15",
    symbol: "ETH/USD",
    type: "Buy",
    entryPrice: 2600,
    exitPrice: 2780,
    profitLoss: 900,
    profitLossPercent: 6.9,
    result: "Profit",
    duration: "3d",
  },
  {
    id: 4,
    date: "2025-10-14",
    symbol: "GOOG",
    type: "Buy",
    entryPrice: 128.4,
    exitPrice: 127.1,
    profitLoss: -260,
    profitLossPercent: -1.01,
    result: "Loss",
    duration: "2d",
  },
  {
    id: 5,
    date: "2025-10-13",
    symbol: "BTC/USD",
    type: "Sell",
    entryPrice: 64000,
    exitPrice: 62000,
    profitLoss: 2000,
    profitLossPercent: 3.12,
    result: "Profit",
    duration: "4d",
  },
  {
    id: 6,
    date: "2025-10-12",
    symbol: "NFLX",
    type: "Buy",
    entryPrice: 450.0,
    exitPrice: 460.5,
    profitLoss: 525,
    profitLossPercent: 2.33,
    result: "Profit",
    duration: "1d",
  },
  {
    id: 7,
    date: "2025-10-11",
    symbol: "MSFT",
    type: "Sell",
    entryPrice: 310.0,
    exitPrice: 312.2,
    profitLoss: -220,
    profitLossPercent: -0.71,
    result: "Loss",
    duration: "2d",
  },
  {
    id: 8,
    date: "2025-10-10",
    symbol: "AMZN",
    type: "Buy",
    entryPrice: 132.0,
    exitPrice: 138.0,
    profitLoss: 600,
    profitLossPercent: 4.5,
    result: "Profit",
    duration: "3d",
  },
  {
    id: 9,
    date: "2025-10-09",
    symbol: "META",
    type: "Buy",
    entryPrice: 325.0,
    exitPrice: 330.2,
    profitLoss: 520,
    profitLossPercent: 1.6,
    result: "Profit",
    duration: "2d",
  },
  {
    id: 10,
    date: "2025-10-08",
    symbol: "NVDA",
    type: "Sell",
    entryPrice: 450.0,
    exitPrice: 455.5,
    profitLoss: -275,
    profitLossPercent: -1.22,
    result: "Loss",
    duration: "1d",
  },
];

app.get("/analytics", (req, res) => {
  try {
    if (!metricsData || !recentTrades) {
      throw new Error("Analytics data not found");
    }

    res.status(200).json({ metricsData, recentTrades });
  } catch (error) {
    console.error("Error fetching analytics:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch analytics data",
      error: error.message,
    });
  }
});


app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})