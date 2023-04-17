import "./ChartBars.css";

const ChartBars = (props) => {
  
  let barFillHeight = "0%";

  if (props.max > 0){
    barFillHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
          // We pass js object in style
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBars;
