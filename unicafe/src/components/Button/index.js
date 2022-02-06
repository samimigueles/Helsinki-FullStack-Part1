import "./style.css";

const Button = ({ handler, text }) => {
  return (
    <>
      <button className="btn" onClick={() => handler(text)}>
        {text}
      </button>
    </>
  );
};

export default Button;
