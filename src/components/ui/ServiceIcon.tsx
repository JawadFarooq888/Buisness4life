const PATHS: Record<string, React.ReactNode> = {
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.6 1 .6 1.6v.6h6v-.6c0-.6.1-1.2.6-1.6A6 6 0 0 0 12 3Z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" strokeLinejoin="round" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </>
  ),
  sparkle: (
    <path d="M12 2c.6 4 2 6 6 7-4 1-5.4 3-6 7-.6-4-2-6-6-7 4-1 5.4-3 6-7Z" strokeLinejoin="round" />
  ),
  panel: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M7 9h10M7 13h6" strokeLinecap="round" />
    </>
  ),
  printer: (
    <>
      <path d="M6 9V3h12v6" strokeLinejoin="round" />
      <rect x="4" y="9" width="16" height="8" rx="1.2" />
      <path d="M8 14h8v6H8v-6Z" strokeLinejoin="round" />
    </>
  ),
  vinyl: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
  window: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M12 4v16M4 12h16" />
    </>
  ),
  storefront: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16M9 19v-6h6v6"
    />
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="1.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  wall: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="m3 14 5-4 4 3 5-5 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  uv: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v3M12 19v3M4.9 4.9l2 2M17 17l2 2M2 12h3M19 12h3M4.9 19.1l2-2M17 7l2-2" />
    </>
  ),
  cnc: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6"
      />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
    >
      {PATHS[name] ?? PATHS.panel}
    </svg>
  );
}
