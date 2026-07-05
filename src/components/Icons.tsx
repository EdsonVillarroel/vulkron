import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconGear = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
  </svg>
);

export const IconFlame = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3c1.5 3 4.5 4.5 4.5 8a4.5 4.5 0 0 1-9 0c0-1.2.4-2.2 1-3 .2 1 .8 1.7 1.6 1.9C10 8 9.5 5.5 12 3z" />
  </svg>
);

export const IconTools = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3z" />
    <path d="m9 6-3-3 3 3-1.5 1.5L4.5 4.5 3 6l3 3" />
  </svg>
);

export const IconFactory = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21V10l6 4V10l6 4V6l3 2v13z" />
    <path d="M3 21h18" />
    <path d="M8 21v-4M13 21v-4M18 21v-4" />
  </svg>
);

export const IconTruck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const IconSilo = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 8a6 3 0 0 1 12 0v11H6z" />
    <path d="M6 8h12M9 12h6M9 15h6" />
  </svg>
);

export const IconChassis = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12h18M5 12l1.5-4h11L19 12M5 12v3M19 12v3" />
    <circle cx="8" cy="17" r="1.6" />
    <circle cx="16" cy="17" r="1.6" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconPlant = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="9" width="5" height="11" />
    <rect x="14" y="5" width="6" height="15" />
    <path d="M9 13h5M4 20h18" />
  </svg>
);

export const IconBuilding = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
  </svg>
);

export const IconCubes = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 4 5 6v4l4 2 4-2V6zM5 14l4 2 4-2M15 10l4-2 4 2" transform="translate(-2 0)" />
    <path d="m12 12 4-2 4 2v4l-4 2-4-2z" />
  </svg>
);

export const IconMountain = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m3 19 6-9 4 6 2-3 6 6z" />
    <circle cx="17" cy="6" r="1.6" />
  </svg>
);

export const IconWheat = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21V9" />
    <path d="M12 9c0-2 1.5-3 3-3 0 2-1 3-3 3zM12 9c0-2-1.5-3-3-3 0 2 1 3 3 3zM12 14c0-2 1.5-3 3-3 0 2-1 3-3 3zM12 14c0-2-1.5-3-3-3 0 2 1 3 3 3z" />
  </svg>
);

export const IconHandshake = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m3 12 4-4 5 3 5-3 4 4-4 4-3-2-2 2-2-2z" />
  </svg>
);

export const IconTarget = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const IconEye = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconTrendUp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17 9 11l4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);

export const IconCalendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4m-8 8 2 2 4-4" />
  </svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16v-4M12 16V8M16 16v-6" />
  </svg>
);

export const IconBattery = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="8" width="16" height="8" rx="1.5" />
    <path d="M21 11v2" />
    <path d="M6 11v2M9 11v2M12 11v2" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);

export const IconWrench = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3z" />
  </svg>
);

export const IconWhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 1.67c2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.57-3.72 8.29-8.3 8.29a8.3 8.3 0 0 1-4.22-1.16l-.3-.18-3.1.81.83-3.02-.2-.31a8.24 8.24 0 0 1-1.27-4.42c0-4.57 3.72-8.29 8.3-8.29Zm-4.7 4.55c-.15 0-.4.06-.6.29-.2.23-.79.77-.79 1.88s.81 2.18.92 2.33c.12.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.06 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.09-.2-.15-.43-.26-.23-.12-1.34-.66-1.55-.74-.2-.07-.36-.11-.5.12-.15.23-.58.73-.71.88-.13.15-.26.17-.49.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.4.12-.13.15-.22.23-.37.08-.15.04-.29-.02-.4-.06-.12-.5-1.24-.7-1.7-.18-.44-.37-.38-.5-.39l-.43-.01Z" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);
