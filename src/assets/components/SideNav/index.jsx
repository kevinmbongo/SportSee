import bikeIcon from '../../../../public/images/bike-icon.svg';
import meditationIcon from '../../../../public/images/meditation-icon.svg';
import swimmingIcon from '../../../../public/images/swimming-icon.svg';
import weightIcon from '../../../../public/images/weight-icon.svg';

function SideNav() {
  const Icons = [
    { src: meditationIcon, alt: 'meditationIcon' },
    { src: swimmingIcon, alt: 'swimmingIcon' },
    { src: bikeIcon, alt: 'bikeIcon' },
    { src: weightIcon, alt: 'weightIcon' },
  ];

  return (
    <aside className="side_nav_container">
      <div className="side_nav_icon_container">
        {Icons.map((icon, index) => (
          <div key={index}>
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
      <p className="side_nav_copiryght">Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default SideNav;
