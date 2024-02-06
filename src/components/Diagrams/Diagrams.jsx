import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  Label,
} from "recharts";

import sealevelData from "../../API/Dataset4_SeaLevel .json";
import emissions from "../../API/Dataset1_GlobalCO2EmissionsfromFossilFuels.json";
import temperatures from "../../API/Dataset2_GlobalTemperatureTimeSeries.json";

// Recharts Diagram components using JSON data
// Each diagram uses a responsive container

// Areachart
const SeaLevel = () => {
  return (
    <>
      <h3>Sealevel</h3>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={730}
          height={250}
          data={sealevelData}
          margin={{ top: 0, right: 0, left: 10, bottom: 15 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.75} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#82ca9d" stopOpacity={0} />
              <stop offset="100%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Time" tick={{ stroke: "black", strokeWidth: 0.5 }}>
            <Label value="Date" offset={-15} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Differenec in millimeters from mean",
              angle: -90,
              position: "insideBottomLeft",
            }}
            tick={{ stroke: "black", strokeWidth: 0.5 }}
            dataKey="Medelhavsnivå"
          />

          <Tooltip
            wrapperStyle={{ borderRadius: "12px" }}
            itemStyle={{ color: "#000000" }}
            contentStyle={{ color: "#000000", borderRadius: "12px" }}
          />
          <Area
            type="monotone"
            dataKey="Medelhavsnivå"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

// Linechart
const GlobalTemperatures = () => {
  // reverses array to show oldest year first instead of last
  const array = temperatures.slice();
  const reversedArray = array.reverse();
  //
  return (
    <>
      <h3>Temperature increase</h3>
      <ResponsiveContainer
        width="100%"
        height={400}
        style={{ marginBottom: 25 }}
      >
        <LineChart
          data={reversedArray}
          margin={{ top: 0, right: 0, left: 10, bottom: 15 }}
        >
          <XAxis dataKey="Year" tick={{ stroke: "black", strokeWidth: 0.5 }}>
            <Label value="Year" offset={-15} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Temperature difference from mean",
              angle: -90,
              position: "insideBottomLeft",
            }}
            dataKey="Mean"
            tick={{ stroke: "black", strokeWidth: 0.5 }}
          ></YAxis>
          <Tooltip
            wrapperStyle={{ borderRadius: "12px" }}
            itemStyle={{ color: "#000000" }}
            contentStyle={{ color: "#000000", borderRadius: "12px" }}
          />
          <Line
            type="natural"
            dataKey="Mean"
            stroke="#4f4f4f"
            strokeWidth={2}
            activeDot={{
              stroke: "#4f4f4f",
              strokeWidth: 2,
              r: 20,
            }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

// Lineachart
const Co2Emissions = () => {
  return (
    <>
      <h3>Global Co2 emissions</h3>
      <ResponsiveContainer
        width="100%"
        height={400}
        style={{ marginBottom: 25 }}
      >
        <LineChart
          width={800}
          height={400}
          data={emissions}
          margin={{ top: 0, right: 0, left: 20, bottom: 15 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="0" />
          <XAxis dataKey="Year" tick={{ stroke: "black", strokeWidth: 0.5 }}>
            <Label value="Year" offset={-15} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Megatotonnes of carbon dioxide",
              angle: -90,
              position: "insideBottomLeft",
              offset: -7.5,
            }}
            dataKey="Total"
            tick={{ stroke: "black", strokeWidth: 0.5 }}
          />
          <Tooltip
            wrapperStyle={{ borderRadius: "12px" }}
            itemStyle={{ color: "#000000" }}
            contentStyle={{ color: "#000000", borderRadius: "12px" }}
          />

          <Line
            type="natural"
            dataKey="Total"
            stroke="#4f4f4f"
            strokeWidth={2}
            activeDot={{
              stroke: "#4f4f4f",
              strokeWidth: 2,
              r: 20,
            }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export { SeaLevel, Co2Emissions, GlobalTemperatures };
