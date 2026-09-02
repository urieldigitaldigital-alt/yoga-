type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.7.44 3.36 1.29 4.82L2 22l5.4-1.42a9.87 9.87 0 0 0 4.64 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.79 2.4a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.71 8.24-8.25 8.24a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.2.84.86-3.12-.2-.32a8.18 8.18 0 0 1-1.26-4.37c0-4.55 3.71-8.24 8.34-8.24Zm-4.5 4.36c-.16 0-.42.06-.64.31s-.85.83-.85 2.03.87 2.36.99 2.53c.12.16 1.7 2.7 4.19 3.68 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.45-.28-.24-.12-1.45-.71-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.96-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2a7.29 7.29 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M13 24C13 24 21 16.4 21 10.5C21 6.08 17.42 2.5 13 2.5C8.58 2.5 5 6.08 5 10.5C5 16.4 13 24 13 24Z" />
      <circle cx="13" cy="10.5" r="3" />
    </svg>
  );
}
