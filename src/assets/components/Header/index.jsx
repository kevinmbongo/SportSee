import logoIcon from '../../../../public/images/logo-icon.svg';
import logoName from '../../../../public/images/logo-name.svg';

function Header() {
  const navLinks = [
    { text: 'Accueil', link: '#' },
    { text: 'Profil', link: '#' },
    { text: 'Réglage', link: '#' },
    { text: 'Communauté', link: '#' },
  ];

  return (
    <header className="header_container">
      <div className="header_logos">
        <img src={logoIcon} alt="icon sportsee" />
        <img src={logoName} alt="logo name sportsee" />
      </div>
      <nav className="header_nav">
        {navLinks.map(({ text, link }, index) => (
          <div key={index}>
            <a href={link} className="header_nav_link">
              {text}
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
