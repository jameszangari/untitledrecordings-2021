export default function Caret({ className }) {
  return (
    <svg
      width="52"
      height="30"
      viewBox="0 0 52 30"
      fill="none"
      xmlns="//www.w3.org/2000/svg"
      className={`${className}` + " h-5 mt-[0.5px]"}
    >
      <path d="M26 30L0 0L52 4.54262e-06L26 30Z" fill="#F9F9F9" />
    </svg>
  );
}
