import React, { useState, useEffect, useRef,  useContext } from "react"
import { CovidContext } from "../Context/GlobalState";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';

highchartsMap(Highcharts);

const initOptions = {
  chart: {
    height: '500',
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: false,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, '#FFC4AA'],
      [0.4, '#FF8A66'],
      [0.6, '#FF392B'],
      [0.8, '#B71525'],
      [1, '	#7A0826'],
    ],
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom',
  },
  series: [
    {
      name: 'Province',
      joinBy: ['hc-key', 'key'],
    },
  ],
};

function MapChart() {
const [options, setOptions] = useState({});
const ChartData = useContext(CovidContext);

const { mapChartData,  url, setUrl, globalData } = ChartData;
console.log(mapChartData)
console.log(globalData)

const countryID = globalData.countryInfo.iso2.toLowerCase();
setUrl(countryID)

console.log(url)


 useEffect(() => {
   if(!url)  return (<></>);
  if (mapChartData && Object.keys(mapChartData).length) {
    console.log({ mapChartData });
    const fakeData = mapChartData.features.map((feature, index) => ({
      key: feature.properties['hc-key'],
      value: index,
    }));

    setOptions(() => ({
      ...initOptions,
      title: {
        text: mapChartData.title,
      },
      series: [
        { ...initOptions.series[0], mapData: mapChartData, data: fakeData },
      ],
    }));

  }
}, [mapChartData, url]);

return (
  <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
    constructorType={'mapChart'}
  />
  </div>
);
};


MapChart.defaultProps = {
  mapData: {},
};

export default MapChart;
