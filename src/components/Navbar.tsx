"use client";

export default function Navbar() {
  return (
    <header className="bg-dblue flex w-full items-center justify-between px-2 py-3 pb-32">
      <div className="flex items-center gap-3">
        <svg
          fill="#14FFEC"
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          viewBox="0 0 384 512"
        >
          <path
            opacity="1"
            fill="white"
            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
          />
        </svg>
        <span className="text-lg font-bold text-white">Cvista</span>
      </div>
      <div>
        <a target="blank" href="https://github.com/tanishqkrk/cvista">
          <img src="/github.svg" alt="" />
        </a>
      </div>
    </header>
  );
}
