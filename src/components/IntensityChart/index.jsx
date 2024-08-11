import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import getPerformanceData from '../../assets/utils/getData/getPerformanceData';
import INTENSITY_DATA from './IntensityData';

const data = [
  { name: 'Intensité', value: 200, kind: 1 },
  {
    name: 'Vitesse',
    value: 240,
    kind: 2,
  },
  {
    name: 'cardio',
    value: 80,
    kind: 3,
  },
  {
    name: 'Geography',
    value: 220,
  },
  {
    name: 'Physics',
    value: 85,
  },
  {
    name: 'History',
    value: 110,
    kind: 1,
  },
];

function IntensityChart() {
  return (
    <RadarChart
      cx={100}
      cy={100}
      outerRadius={50}
      width={210}
      height={200}
      data={INTENSITY_DATA}
    >
      <PolarGrid stroke="#FFF" strokeWidth={2} radialLines={false} />
      <PolarAngleAxis
        dataKey="name"
        tick={{
          fill: '#FFF',
          fontSize: 12,
          fontFamily: 'Roboto',
        }}
      />

      <Radar
        dataKey="value"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
export default IntensityChart;
