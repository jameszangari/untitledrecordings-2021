export default function Twitch({ className }) {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="//www.w3.org/2000/svg"
      className={
        `${className}` + " cursor-pointer hover:opacity-50 transition-all h-5"
      }
    >
      <path
        d="M22.3707 6.0627H20.1072V12.4904H22.3707V6.0627ZM16.1498 6.03516H13.8863V12.4658H16.1498V6.03516ZM6.53047 0L0.875 5.35664V24.6434H7.66191V30L13.318 24.6434H17.8443L28.0262 15V0H6.53047ZM25.7633 13.9307L21.2387 18.215H16.7129L12.752 21.965V18.215H7.66191V2.14336H25.7633V13.9307Z"
        fill="#F9F9F9"
      />
    </svg>
  );
}
