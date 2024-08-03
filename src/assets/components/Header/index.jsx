import logoIcon from '../../../../public/images/logo-icon.svg'
import logoName from '../../../../public/images/logo-name.svg'

function Header() {


  return (
      <header className='header_container'>
        <div className="header_logos">
          <img src={logoIcon} alt="icon sportsee" />
          <img src={logoName} alt="logo name sportsee" />
        </div>
        <nav className='header_nav'>
          <a href="#" className='header_nav_link'>Accueil</a>
          <a href="#" className='header_nav_link'>Profil</a>
          <a href="#" className='header_nav_link'>Réglage</a>
          <a href="#" className='header_nav_link'>Communauté</a>
        </nav>
      
      </header>
      )}

      export default Header