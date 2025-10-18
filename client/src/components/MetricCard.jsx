import React from 'react'

const MetricCard = ({title, value, tooltip}) => {
  return (
    <div className="metric-card">
      <div className="metric-title tooltip">
        {title} <span class="tooltiptext">{tooltip}</span>
      </div>
      {/* <span class="tooltiptext">{tooltip}</span> */}
      <div className="metric-value" >{value}</div>
    </div>
  );
}

export default MetricCard