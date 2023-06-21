import "./style.css";

const Button = ({ onClick, type, text }) => {
  return (
    <div className="button">
      <button onClick={onClick} className={type}>
        {" "}
        {text}
      </button>
    </div>
  );
};

export default Button;
