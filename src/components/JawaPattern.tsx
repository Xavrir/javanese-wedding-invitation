export function JawaPattern({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 pointer-events-none z-10`}>
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full ${position === "bottom" ? "rotate-180" : ""}`}
      >
        <path
          d="M0 0L50 10C100 20 200 40 300 45C400 50 500 40 600 35C700 30 800 30 900 35C1000 40 1100 50 1150 55L1200 60V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0V0Z"
          fill="#C4A052"
          opacity="0.3"
        />
        <path
          d="M0 30L50 35C100 40 200 50 300 53C400 56 500 52 600 50C700 48 800 48 900 50C1000 52 1100 56 1150 58L1200 60V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0V30Z"
          fill="#8B6914"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
