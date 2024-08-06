import BarChartHasBackground from '../components/BarChartHasBackground';

function HomePage() {
  return (
    <div className="home_container">
      <div className="home_title_container">
        <h1>
          Bonjour <span>Kevin</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <section className="home_main_container">
        <div>
          <div className="weight_chart">
            <BarChartHasBackground />
          </div>

          <div className="weight_chat">
            <BarChartHasBackground />
          </div>
        </div>
        <div> Calorie</div>
      </section>
    </div>
  );
}

export default HomePage;
