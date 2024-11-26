import { CURRENT_ID } from '../assets/utils/constants';
import BarChartHasBackground from '../components/BarChartHasBackground';

import { USER_MAIN_DATA } from '../data/data';
import HealthThumbnail from '../components/HealthThumbnail';
import BAR_DATAS from '../components/BarChartHasBackground/BarData';
import HEALTH_DATAS from '../components/HealthThumbnail/HealthData';
import IntensityChart from '../components/IntensityChart';
import TargetChart from '../components/TargetChart';

function HomePage() {
  const userData = USER_MAIN_DATA.find(({ id }) => id === CURRENT_ID);

  return (
    <div className="home_container">
      <div className="home_title_container">
        <h1>
          Bonjour <span>{userData.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <section className="home_main_container">
        <div className="central_article_container">
          <article className="weight_chart">
            <BarChartHasBackground data={BAR_DATAS} />
          </article>
          <article className="bottom_article">
            <div className="target centered_flex">
              <TargetChart />
            </div>
            <div className="intensity centered_flex">
              <IntensityChart />
            </div>
            <div className="score">score</div>
          </article>
        </div>
        <article className="health_article_container">
          {HEALTH_DATAS.map((obj, index) => (
            <HealthThumbnail
              key={index}
              icon={obj.icon}
              value={obj.value}
              textName={obj.textName}
            />
          ))}
        </article>
      </section>
    </div>
  );
}

export default HomePage;
