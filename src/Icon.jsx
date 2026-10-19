const P = {
  dove: <><path d="M12 3c3 2 5 5 5 9a5 5 0 0 1-10 0c0-4 2-7 5-9z" /><path d="M12 12v9M8 17l4-3 4 3" /></>,
  "star-crescent": <path d="M20 14A8 8 0 1 1 10 4a6.5 6.5 0 0 0 10 10z" />,
  "school-outline": <><path d="M3 9l9-5 9 5-9 5z" /><path d="M7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5" /></>,
  "sprout-outline": <path d="M12 21V9M12 9c0-3 2-5 6-5 0 4-2 6-6 5zM12 13c0-3-2-5-6-5 0 4 2 6 6 5z" />,
  "palm-tree": <><ellipse cx="12" cy="13" rx="5" ry="7" /><path d="M12 6c0-2 1-3 3-3" /></>,
  "home-city-outline": <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" />,
  "account-group-outline": <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M2 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 7 1.5 7 5.5" /></>,
  whatsapp: <path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  "map-marker": <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  share: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></>,
  home: <path d="M3 11l9-8 9 8M5 10v10h14V10" />,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-9 9" /></>,
};

export default function Icon({ name }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{P[name]}</svg>;
}
