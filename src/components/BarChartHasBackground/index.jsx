import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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

function BarChartHasBackground(props) {
  const { data } = props;
  return (
    <div className="bar_charts_container">
      <span className="chart_title">Activité quotidienne</span>
      <BarChart
        width={850}
        height={320}
        data={data}
        barSize={10}
        margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 1" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#9B9EAC"
          tickCount={3}
          domain={[67, 71]}
        />

        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#9B9EAC"
          tickCount={3}
          domain={[100, 500]}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="horizontal"
          align="right"
          verticalAlign="top"
          wrapperStyle={{ padding: '20px 20px 70px 20px' }}
          iconType="circle"
          formatter={(value) => {
            const legendLabels = {
              kilogram: 'Poids (kg)',
              calories: 'Calories brûlées (kCal)',
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

        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#E60000"
          radius={[100, 100, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#282D30"
          radius={[100, 100, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
export default BarChartHasBackground;
