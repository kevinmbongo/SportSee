import { USER_PERFORMANCE } from '../../../data/data';
import { CURRENT_ID } from '../constants';

function getPerformanceData() {
  const currentUserPerformance = USER_PERFORMANCE.find(
    ({ userId }) => userId === CURRENT_ID,
  );
  return currentUserPerformance;
}
export default getPerformanceData;
