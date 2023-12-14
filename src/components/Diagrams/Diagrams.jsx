import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  AreaChart,
  Area,
} from "recharts";
// import emissionsData from "../../API/Dataset1_Global CO2 Emissions from Fossil Fuels.json";
// import temperaturesData from "../../API/Dataset2_Global Temperature Time Series.json";
import sealevelData from "../../API/Dataset4_SeaLevel .json";
import emissions from "../../API/Dataset1_GlobalCO2EmissionsfromFossilFuels.json";
import temperatures from "../../API/Dataset2_GlobalTemperatureTimeSeries.json";

const SeaLevel = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={sealevelData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
      <XAxis dataKey="Time" />
      <YAxis dataKey="Medelhavsnivå" />
      <Legend content={() => "Skillnad i medelhavsnivå i millimeter"} />
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
      {/* <Area
        type="monotone"
        dataKey="GMSL uncertainty"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      /> */}
    </AreaChart>
  );
};

const GlobalTemperatures = () => {
  return (
    <>
      <h2>Global temperatures</h2>
      <LineChart
        width={800}
        height={400}
        data={temperatures}
        margin={{
          top: 50,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        <XAxis dataKey="Year" tick={{ stroke: "black", strokeWidth: 0.5 }} />
        <YAxis dataKey="Mean" tick={{ stroke: "black", strokeWidth: 0.5 }} />
        <Tooltip
          wrapperStyle={{ borderRadius: "12px" }}
          itemStyle={{ color: "#000000" }}
          contentStyle={{ color: "#000000", borderRadius: "12px" }}
        />
        <Legend
          content={() => "Global temperatures difference from mean (0)"}
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
    </>
  );
};

const Co2Emissions = () => {
  return (
    <>
      <h2>Co2 emissions from fossil fuels</h2>

      <LineChart
        width={800}
        height={400}
        data={emissions}
        margin={{
          top: 50,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="0" />
        <XAxis dataKey="Year" tick={{ stroke: "black", strokeWidth: 0.5 }} />
        <YAxis dataKey="Total" tick={{ stroke: "black", strokeWidth: 0.5 }} />
        <Tooltip
          wrapperStyle={{ borderRadius: "12px" }}
          itemStyle={{ color: "#000000" }}
          contentStyle={{ color: "#000000", borderRadius: "12px" }}
        />
        <Legend content={() => "In million metric tons by year"} />
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
    </>
  );
};

export { SeaLevel, Co2Emissions, GlobalTemperatures };
