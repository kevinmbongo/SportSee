import { CURRENT_ID } from '../../assets/utils/constants';
import { USER_ACTIVITY } from '../../data/data';

const currentUserActivity = USER_ACTIVITY.find(
  ({ userId }) => userId === CURRENT_ID,
);
const BAR_DATAS = currentUserActivity.sessions;

export default BAR_DATAS;
