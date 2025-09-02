const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`rounded-md text-white font-semibold px-3.5 py-2 ${
        props.className || ""
      }`}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
