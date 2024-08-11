import caloriesIcon from '../../assets/images/calories-icon.png';
import crabsIcon from '../../assets/images/carbs-icon.png';
import fatIcon from '../../assets/images/fat-icon.png';
import proteinIcon from '../../assets/images/protein-icon.png';
import getActivityData from '../../assets/utils/getData/getActivityData';
const icons = {
  calorieCount: caloriesIcon,
  proteinCount: proteinIcon,
  carbohydrateCount: crabsIcon,
  lipidCount: fatIcon,
};
const textNames = {
  calorieCount: 'Calories',
  proteinCount: 'Proteines',
  carbohydrateCount: 'Glucides',
  lipidCount: 'Lipides',
};

const userActivity = getActivityData();
const HEALTH_DATAS = Object.entries(userActivity.keyData).map(
  ([key, value]) => ({
    key,
    value,
    icon: icons[key],
    textName: textNames[key],
  }),
);

export default HEALTH_DATAS;
