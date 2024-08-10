function HealthThumbnail(props) {
  const { icon, value, textName } = props;

  return (
    <div className="health_thumbnail centered_flex">
      <img src={icon} alt={textName} />
      <div className="health_infos">
        <span>
          {value}
          {textName === 'Calories' ? <span>kCal</span> : <span>g</span>}{' '}
        </span>
        <i>{textName}</i>
      </div>
    </div>
  );
}

export default HealthThumbnail;
