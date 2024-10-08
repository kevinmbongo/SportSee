import { USER_MAIN_DATA } from '../../../data/data';
import { CURRENT_ID } from '../constants';

function getActivityData() {
  const currentUserActivity = USER_MAIN_DATA.find(
    ({ id }) => id === CURRENT_ID,
  );
  return currentUserActivity;
}

export default getActivityData;
