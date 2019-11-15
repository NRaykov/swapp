import React from 'react';
import {CircularGridLines, RadarChart,} from 'react-vis';
import { useQuery} from '@apollo/react-hooks';
import {starshipsQuery} from "../../../client/queries";
import {theme} from "./chartConfig"
import {position} from "./chartConfig"
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";

const StarshipChart = ({ starship }) => {

  const { starshipClass } = starship;
  const { data, loading, error } = useQuery(starshipsQuery, {
    variables: { starshipClass }
  });

  if (loading) return 'Loading...';
  if (error)return (<ErrorHandler/>);

  const currentData = [starship];
  //Extract starship from same class
  const {allStarships: {edges}} = data;
  const statsData =  edges.map(edge => edge.node);

  //get the maximum value from each property
  const maxCost = Math.max(...statsData.map((item) => item.cost));
  const maxCrew = Math.max(...statsData.map((item) => item.crew));
  const maxAtmSpeed = Math.max(...statsData.map((item) => item.maxAtmosphericSpeed));
  const maxHDR = Math.max(...statsData.map((item) => item.hyperdriveRating));
  const maxMLPerHour = Math.max(...statsData.map((item) => item.maxMLPerHour));

  const domains = [
    {
      name: 'Max Atm. Speed',
      domain: [0, maxAtmSpeed],
      getValue: d => d.maxAtmosphericSpeed
    },
    {
      name: 'Cost',
      domain: [0, maxCost],
      getValue: d => d.cost
    },
    { name: 'Crew',
      domain: [0, maxCrew],
      getValue: d => d.crew
    },
    { name: 'HyperD Rat.',
      domain: [0, maxHDR],
      getValue: d => d.hyperdriveRating
    },
    { name: 'Max Ml/H',
      domain: [0, maxMLPerHour],
      getValue: d => d.maxMLPerHour
    }
  ];

  return (
          <>
            <RadarChart
                    animation
                    data={currentData}
                    domains={domains}
                    style={theme}
                    margin={position}
                    width={470}
                    height={370}
            >
              <CircularGridLines style={{fill: 'none', stroke: '#cccccc', labels: '#cccccc', text: '#cccccc'}}
                      tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
              />
            </RadarChart>
          </>
  )

};

export default StarshipChart;
