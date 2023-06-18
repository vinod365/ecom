import "./style.css";

const Heading = ({ headingText, subHeadingText }) => {
  return (
    <>
      <div className="header">
        <div className="heading">
          <p className="heading--text">{headingText}</p>
        </div>
        <div className="sub__heading">
          <p className="sub__heading--text">{subHeadingText}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
