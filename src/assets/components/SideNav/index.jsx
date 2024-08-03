import meditationIcon from "../../../../public/images/meditation-icon.svg"
import swimmingIcon from "../../../../public/images/swimming-icon.svg"
import bikeIcon from "../../../../public/images/bike-icon.svg"
import weightIcon from "../../../../public/images/weight-icon.svg"

function SideNav() {


  return (
      <aside className="side_nav_container">
        <div className="side_nav_icon_container">

        <div>
        <img src={meditationIcon} alt="meditationIcon" />
        </div>
      
        <div>
        <img src={swimmingIcon} alt="swimmingIcon" />
        </div>
      
        <div>
        <img src={bikeIcon} alt="bikeIcon" />
        </div>
      
        <div>
        <img src={weightIcon} alt="weightIcon" />
        </div>
      
        </div>
        <span className="side_nav_copiryght">Copiryght, SportSee 2020</span>
      </aside>
      )}

      export default SideNav