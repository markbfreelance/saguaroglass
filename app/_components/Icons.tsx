import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconFold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17 L10 10 L14 14 L21 7" />
      <path d="M3 20 L21 20" />
    </svg>
  );
}

export function IconShear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="17" r="2.2" />
      <circle cx="7" cy="7" r="2.2" />
      <path d="M9 8.5 L20 15" />
      <path d="M9 15.5 L20 9" />
    </svg>
  );
}

export function IconPunch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="14" width="18" height="5" rx="1" />
      <path d="M12 3 L12 11" />
      <path d="M9 11 L15 11" />
      <circle cx="12" cy="16.5" r="1.2" />
    </svg>
  );
}

export function IconDoor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3 L6 21 L18 21 L18 3 Z" />
      <path d="M6 3 L18 3" />
      <circle cx="15" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 12 L21 12" />
      <path d="M12 3 L12 21" />
    </svg>
  );
}

export function IconRadius(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20 C 3 9, 11 3, 21 3" />
      <path d="M3 20 L21 20" />
    </svg>
  );
}

export function IconLAngle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4 L5 20 L20 20" />
    </svg>
  );
}

export function IconWallCap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8 L12 4 L21 8 L21 10 L3 10 Z" />
      <path d="M6 10 L6 20" />
      <path d="M18 10 L18 20" />
    </svg>
  );
}

export function IconUChannel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4 L4 20 L20 20 L20 4" />
    </svg>
  );
}

export function IconBox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7 L12 4 L20 7 L20 17 L12 20 L4 17 Z" />
      <path d="M4 7 L12 10 L20 7" />
      <path d="M12 10 L12 20" />
    </svg>
  );
}

export function IconSillPan(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7 L3 17 L21 17 L21 7" />
      <path d="M3 7 L6 10 L18 10 L21 7" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4 h3 l2 5 -2.5 1.5 a11 11 0 0 0 6 6 L15 14 l5 2 v3 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2 Z" />
    </svg>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 7 L12 13 L21 7" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21 C 6 14, 5 10, 5 8 a7 7 0 0 1 14 0 c 0 2 -1 6 -7 13 Z" />
      <circle cx="12" cy="8.5" r="2.4" />
    </svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 L12 12 L16 14" />
    </svg>
  );
}

export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12 L19 12" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}
