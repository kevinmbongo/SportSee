import { LineChart, Line, XAxis } from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function TargetChart() {
  return (
    <div className="target_container">
      <h3 className="target_title">Durée moyenne des sessions</h3>{' '}
      <LineChart width={240} height={150} data={data}>
        <XAxis
          dataKey="name"
          interval={0}
          tick={{ fill: '#FFF', opacity: '0.6' }}
          axisLine={false}
          tickLine={false}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#FFF"
          opacity={0.6}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </div>
  );
}

export default TargetChart;
