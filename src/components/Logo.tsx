type LogoProps = {
  size?: number;
};

/** Marca VULKRON — monograma "V" con acento naranja + wordmark. */
export function Logo({ size = 34 }: LogoProps) {
  return (
    <span className="logo" aria-label="VULKRON SRL">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 8h9l7 20 7-20h9L28 42h-8L8 8z"
          fill="url(#vk-grad)"
          stroke="#3a3b45"
          strokeWidth="1"
        />
        <path d="M24 28 31 8h4L26 34z" fill="#ff5a1f" />
        <defs>
          <linearGradient id="vk-grad" x1="8" y1="8" x2="40" y2="42">
            <stop stopColor="#e6e8ec" />
            <stop offset="1" stopColor="#8b9099" />
          </linearGradient>
        </defs>
      </svg>
      <span className="logo-word">
        VULK<span className="logo-word-accent">R</span>ON
        <span className="logo-srl">SRL</span>
      </span>
    </span>
  );
}
