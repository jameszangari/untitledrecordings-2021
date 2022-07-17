import Arrow from "./Icons/arrow";

export default function Button({ props, color, hover, label, click }) {
  if (color === "gray") {
    return (
      <button
        className={`flex flex-row py-2 px-3 bg-ur_dark_gray hover:bg-ur_gray hover:border-none hover:shadow-whiteShadow transition-all ${props}`}
        onClick={click}
      >
        {label}
        <Arrow className="ml-4" />
      </button>
    );
  }
  if (color === "red") {
    return (
      <button
        className={`flex flex-row bg-ur_red py-2 px-3 hover:bg-ur_dark_red hover:shadow-whiteShadow transition-all ${props}`}
        onClick={click}
      >
        {label}
        <Arrow className="ml-4" />
      </button>
    );
  }
  if (color === "blue") {
    return (
      <button
        className={`flex flex-row bg-ur_blue py-2 px-3 hover:bg-ur_dark_blue hover:shadow-whiteShadow transition-all ${props}`}
        onClick={click}
      >
        {label}
        <Arrow className="ml-4" />
      </button>
    );
  } else {
    return (
      <button
        className={`flex flex-row bg-ur_blue py-2 px-3 hover:bg-ur_dark_blue hover:shadow-whiteShadow transition-all ${props}`}
        onClick={click}
      >
        {label}
        <Arrow className="ml-4" />
      </button>
    );
  }
}
