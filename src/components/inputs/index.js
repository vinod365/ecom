import "./style.css";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="input">
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
