import React from 'react';
import {Radar} from "react-chartjs-2";
import styles from "./styles.module.css";
const StarshipChart = ({...props}) => {



  const data = {
    labels: ['Max Atm. Speed', 'Max ML/h', 'Cost', 'Crew', 'HyperD Rat.', 'Cost'],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(179,181,198,0)',
        borderColor: '#4BD5EE',
        borderWidth: 5,
        pointBackgroundColor: '​#4BD5EE',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#fff',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ]
  };





  return (
      <Radar data={data} width={600} height={600} className={styles.chartPanel}/>
  )

};

export default StarshipChart;
