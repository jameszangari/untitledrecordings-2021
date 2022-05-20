import Arrow from "./Icons/arrow";

export default function Button({ className, color, hover, label, click }) {
  return (
    <button
      className={`${className} flex flex-row hover:shadow-whiteShadow hover:bg-${hover} bg-${color} py-2 px-3 transition-all`}
      onClick={click}
    >
      {label}
      <Arrow className="ml-4" />
    </button>
  );
}
