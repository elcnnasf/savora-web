import type { ReactNode } from 'react';

/** Reusable smartphone frame that wraps an app-screen mockup. */
export default function PhoneMockup({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="screen-fit">{children}</div>
        </div>
      </div>
      <div className="phone-glow" />
    </div>
  );
}
