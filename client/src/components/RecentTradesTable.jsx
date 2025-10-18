import React from 'react'

const RecentTradesTable = ({recentTrades}) => {

  console.log(recentTrades)
  return (
    <div className="recent-trades-table">
      <p>Recent Trades :</p>
      <table className='trades-table'>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Symbol</th>
          <th>Type</th>
          <th>Entry Price</th>
          <th>Exit Price</th>
          <th>Profit Loss</th>
          <th>Profit Loss Percent</th>
          <th>Result</th>
          <th>Duration</th>
        </tr>
        {recentTrades.map((trade, index) => (
          <tr key={index}>
            <td>{trade.id}</td>
            <td>{trade.date}</td>
            <td>{trade.symbol}</td>
            <td className={trade.type === "Buy" ? "buy" : "sell"}>
              {trade.type}
            </td>
            <td>{trade.entryPrice}</td>
            <td>{trade.exitPrice}</td>
            <td className={trade.profitLoss > 0 ? "profit" : "loss"}>
              {trade.profitLoss > 0 ? "+" : ""}
              {trade.profitLoss}
            </td>
            <td className={trade.profitLoss > 0 ? "profit" : "loss"}>
              {trade.profitLoss > 0 ? "+" : ""}{trade.profitLossPercent}%
            </td>
            <td className={trade.result === "Profit" ? "profit" : "loss"}>{trade.result}</td>
            <td>{trade.duration}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RecentTradesTable