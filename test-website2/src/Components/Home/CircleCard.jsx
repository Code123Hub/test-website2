

const CircleCard = ({ marginTop, marginBottom, subheadingColor, text, subheading , bottomBorderColor}) => {
  return (
    <div style={{ marginTop: marginTop,marginBottom: marginBottom, borderBottom: `4px solid ${bottomBorderColor}`, borderRadius: '50%', padding: '20px' }}>
      <div className="circle-card" style={{ marginTop: marginTop }}>
        <h1 className="card-text">{text}</h1>
        <h2 className="card-subheading" style={{ color: subheadingColor }}>
          {subheading}
        </h2>
      </div>
      
    </div>
  );
};

export default CircleCard;
