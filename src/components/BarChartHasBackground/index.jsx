import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 1, kg: 70.8, kcal: 69.4 },
  { name: 2, kg: 70.4, kcal: 70.1 },
  { name: 3, kg: 69.6, kcal: 70 },
  { name: 4, kg: 70.3, kcal: 69.8 },
  { name: 5, kg: 70.5, kcal: 70.3 },
  { name: 6, kg: 69.4, kcal: 70.5 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#E60000', // couleur de fond du tooltip
          width: '39px',
          height: '63px',
          border: '1px solid #ccc',
          padding: '0 10px 1px 10px',
        }}
      >
        <p
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '10px',
            fontWeight: '500',
            lineHeight: '24px' /* 342.857% */,
          }}
        >
          {` ${payload[0].value}kg`}
        </p>
        <p
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '10px',
            fontWeight: '500',
            lineHeight: '24px' /* 342.857% */,
          }}
        >{` ${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

export default function App() {
  return (
    <div>
      <BarChart
        width={850}
        height={320}
        data={data}
        barSize={10}
        margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
      >
        <h2 style={{ textAlign: 'start', marginBottom: '20px' }}>
          Titre du Graphique
        </h2>
        <CartesianGrid strokeDasharray="3 1" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          orientation="right"
          stroke="#9B9EAC"
          tickCount={3}
          domain={[69, 71]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="horizontal"
          align="right"
          verticalAlign="top"
          wrapperStyle={{ padding: '20px 20px 70px 20px' }}
          iconType="circle"
          formatter={(value, entry) => {
            // Mapping the data keys to custom legend labels
            const legendLabels = {
              kg: 'Poids (kg)',
              kcal: 'Calories brûlées (kCal)',
            };
            return (
              <span
                style={{
                  color: '#74798C',
                  fontFamily: 'Roboto',
                  fontSize: ' 14px',
                  fontWeight: '500',
                }}
              >
                {legendLabels[value]}
              </span>
            );
          }}
        />

        <Bar dataKey="kg" fill="#E60000" radius={[100, 100, 0, 0]} />
        <Bar dataKey="kcal" fill="#282D30" radius={[100, 100, 0, 0]} />
      </BarChart>
    </div>
  );
}
