import ChartBar from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.DataPoint.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {/* Mapping each datapoint into ChartBars */}
      {props.DataPoint.map((dataPoint) => (
        <ChartBar
          keys={dataPoint.keys}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
