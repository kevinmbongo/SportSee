import { useEffect, useState } from 'react';
import BarChartHasBackground from '../components/BarChartHasBackground';
import { USER_MAIN_DATA } from '../data/data';

function HomePage() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userId = 18;
    const userData = USER_MAIN_DATA.find(({ id }) => id === userId);

    if (userData) {
      setUserName(userData.userInfos.firstName);
    } else {
      console.log(`User with ID ${userId} not found.`);
      setUserName('Utilisateur inconnu'); // ou toute autre valeur par défaut
    }
  }, []);
  return (
    <div className="home_container">
      <div className="home_title_container">
        <h1>
          Bonjour <span>{userName}</span>
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
