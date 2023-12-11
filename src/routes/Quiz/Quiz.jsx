import { useState, useEffect } from "react";
import Question from "../../components/Question/Question";
import styles from "./quiz.module.scss";

// Parent component för quizfrågor
const Quiz=()=> {
  // lagrar datan i komponenten, default värdet är null
  const [QuizData, setQuizData] = useState([]);

  useEffect(()=>{
    //const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const url = "../../API/quizdata.json";
    //const url = "../../API/Dataset1_GlobalCO2Emissionsfrom FossilFuels.json";
    fetch(url).then(response=>response.json()).then(data=>{
      // skapar en ny propety som slår ihop alla svaren för enklare presentation.
      data.map(p=>p.all_answers = [p.correct_answer,...p.incorrect_answers]);
      console.log(data);
      //lagrar data i QuizData
      setQuizData(data);
    })
  },[])

  return (
    <section> 
      <div className={styles.quizCategory}>
        <p>INSERT ICON</p>
        <h1>Category</h1>
      </div>

      <div className={styles.question}>
        <p>Fråga 1/10</p>
        {/* 
            <p> Fråga {questions.number}/{category.questions}</p>
        */}
      </div>

      <div>
        {/* Visar endast första frågan, men ska ändras */}
      <Question data={QuizData[0]}/>
      </div>

    </section>
  );
}

export default Quiz;

{/*
import { useState, useEffect } from "react";
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
import emissionsData from "../../API/Dataset1_Global CO2 Emissions from Fossil Fuels.json";
import temperaturesData from "../../API/Dataset2_Global Temperature Time Series.json";
import sealevelData from "../../API/Dataset4_Sea Level .json";
*/}

{/*
const Co2Emissions = ({ data }) => {
  return (
    <>
      <h2>Co2 emissions from fossil fuels</h2>
      {data && (
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 50,
            bottom: 5,
          }}
        >
          // <CartesianGrid vertical={false} strokeDasharray="0" /> 
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
      )}
    </>
  );
};
*/}

{/*
const GlobalTemperatures = ({ data }) => {
  return (
    <>
      <h2>Global temperatures</h2>
      {data && (
        <LineChart
          width={800}
          height={400}
          data={data}
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
      )}
    </>
  );
};
*/}

{/*
const SeaLevel = ({ data }) => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.75} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
        </linearGradient>
        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
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
      /> *
    </AreaChart>
  );
};
*/}

{/*
// Renderar quizen (själva spelet)
export default function Quiz() {
  const [temperatures, setTemperatures] = useState([]);
  const [sealevel, setSealevel] = useState(sealevelData);
  const [emissions, setEmissions] = useState(emissionsData);
  const [reversedData, setReversedData] = useState([]);

  useEffect(() => {
    setTemperatures(temperaturesData);
    // Reverse the data
    setReversedData([...temperaturesData].reverse());
  }, []);

  // useEffect(() => {
  //   fetch("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //   console.log(data);
  // }, []);

  return (
    <section>
      <h2>Quiz</h2>
      <GlobalTemperatures data={reversedData} />
      <Co2Emissions data={emissions} />
      <SeaLevel data={sealevel} />
    </section>
  );
}
*/}