import getPerformanceData from '../../assets/utils/getData/getPerformanceData';

const userIntensity = getPerformanceData();

const INTENSITY_DATA = userIntensity.data.map(({ value, kind }) => ({
  kind,
  value,
  name: userIntensity.kind[kind],
}));

export default INTENSITY_DATA;
