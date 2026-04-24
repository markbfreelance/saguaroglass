export default function SaguaroRidge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      {/* Back ridge */}
      <path
        d="M0 220 L80 200 L160 215 L240 190 L340 210 L430 185 L520 205 L620 180 L720 200 L820 175 L920 195 L1020 175 L1120 195 L1200 180 L1200 300 L0 300 Z"
        fill="#3b5b44"
        opacity="0.35"
      />
      {/* Mid ridge */}
      <path
        d="M0 245 L90 225 L180 245 L280 220 L380 240 L490 220 L600 240 L700 215 L810 235 L910 215 L1020 235 L1120 220 L1200 235 L1200 300 L0 300 Z"
        fill="#3b5b44"
        opacity="0.55"
      />
      {/* Front ground */}
      <path
        d="M0 270 L1200 270 L1200 300 L0 300 Z"
        fill="#22352a"
      />
      {/* Saguaros (stylized) */}
      <g fill="#22352a">
        {/* cactus 1 */}
        <g transform="translate(180 170)">
          <rect x="-6" y="0" width="12" height="100" rx="5" />
          <rect x="-22" y="30" width="10" height="50" rx="4" />
          <rect x="-22" y="25" width="5" height="15" rx="2" />
          <rect x="12" y="20" width="10" height="60" rx="4" />
          <rect x="17" y="15" width="5" height="15" rx="2" />
        </g>
        {/* cactus 2 — taller */}
        <g transform="translate(520 140)">
          <rect x="-7" y="0" width="14" height="130" rx="6" />
          <rect x="-26" y="40" width="11" height="60" rx="4" />
          <rect x="-26" y="34" width="5" height="16" rx="2" />
          <rect x="15" y="30" width="11" height="70" rx="4" />
          <rect x="20" y="24" width="5" height="16" rx="2" />
        </g>
        {/* cactus 3 */}
        <g transform="translate(860 185)">
          <rect x="-5" y="0" width="11" height="85" rx="5" />
          <rect x="10" y="20" width="9" height="45" rx="4" />
          <rect x="14" y="15" width="5" height="12" rx="2" />
        </g>
        {/* cactus 4 — small */}
        <g transform="translate(1050 210)">
          <rect x="-4" y="0" width="8" height="60" rx="4" />
          <rect x="-14" y="20" width="8" height="30" rx="3" />
        </g>
      </g>
    </svg>
  );
}
