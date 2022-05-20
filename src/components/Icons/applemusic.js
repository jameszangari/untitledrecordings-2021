export default function AppleMusic({ className }) {
  return (
    <svg
      width="26"
      height="30"
      viewBox="0 0 26 30"
      fill="none"
      xmlns="//www.w3.org/2000/svg"
      className={
        `${className}` + " cursor-pointer hover:opacity-50 transition-all h-5"
      }
    >
      <path
        d="M21.0775 15.8533C21.0641 13.3953 22.1759 11.54 24.4263 10.1737C23.1672 8.37206 21.265 7.38081 18.7534 7.18657C16.3757 6.99904 13.7771 8.57299 12.826 8.57299C11.8213 8.57299 9.51736 7.25355 7.70899 7.25355C3.9717 7.31383 0 10.234 0 16.1748C0 17.9296 0.321487 19.7424 0.964461 21.6133C1.82176 24.0713 4.91607 30.0992 8.14434 29.9988C9.83215 29.9586 11.0243 28.7999 13.2212 28.7999C15.351 28.7999 16.4561 29.9988 18.3382 29.9988C21.5932 29.9519 24.3928 24.4732 25.2099 22.0085C20.8431 19.9523 21.0775 15.9806 21.0775 15.8533V15.8533ZM17.2866 4.85579C19.1151 2.68576 18.9476 0.709951 18.8941 0C17.2799 0.093767 15.4113 1.09841 14.3464 2.33748C13.1743 3.66361 12.4844 5.30454 12.6318 7.15309C14.3798 7.28704 15.9739 6.38955 17.2866 4.85579V4.85579Z"
        fill="white"
      />
    </svg>
  );
}