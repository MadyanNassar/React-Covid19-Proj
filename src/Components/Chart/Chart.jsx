import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { CovidContext } from "../Context/GlobalState";

const Chart = () => {
  const covid = useContext(CovidContext);
  const { historyData, globalData } = covid;

  let allData =
    historyData.cases || historyData.country ? historyData : "Loading";
  let line;

  if (allData.country) {
    const { timeline } = allData;
    const { cases, deaths, recovered } = timeline;
    const activeCases = [];
    const deathCases = [];
    const recoveredCases = [];
    let dateData = [];
    for (let newCase in cases) {
      let obj = { newCase: cases[newCase] };
      activeCases.push(obj);
    }
    for (let newDeath in deaths) {
      let obj = { newDeath: deaths[newDeath] };
      deathCases.push(obj);
    }
    for (let newRecover in recovered) {
      let obj = { newRecover: recovered[newRecover] };
      recoveredCases.push(obj);
    }
    for (let newDate in cases) {
      let obj = { date: newDate };
      dateData.push(obj);
    }

    line = (
      <Line
        data={{
          labels: dateData.map(({ date }) => date),
          datasets: [
            {
              data: activeCases.map(({ newCase }) => newCase),
              label: "Infected",
              borderColor: "blue",
              fill: true,
            },
            {
              data: deathCases.map(({ newDeath }) => newDeath),
              label: "Deaths",
              borderColor: "red",
              fill: true,
            },
            {
              data: recoveredCases.map(({ newRecover }) => newRecover),
              label: "Recovered",
              borderColor: "green",
              fill: true,
            },
          ],
        }}
      />
    );
  }

  return (
    <div>
      <h1>{globalData.country || "World Data"}</h1>
      <div className="chart">{line}</div>
    </div>
  );
};
export default Chart;
