const Overlay = (props) => {
  return (
    <div
      className={`z-30 fixed inset-0 bg-black/85 transition-all duration-200 ${
        props.showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={props.click}
    ></div>
  );
};

export default Overlay;
