import type { ReactNode } from 'react';

/** Reusable smartphone frame that wraps an app-screen mockup.
 *  `bare` renders the child (e.g. a real screenshot that already includes its
 *  own status bar) edge-to-edge — no drawn notch and no font-boost scale-fit. */
export default function PhoneMockup({
  children,
  className = '',
  bare = false,
}: {
  children: ReactNode;
  className?: string;
  bare?: boolean;
}) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-frame">
        {!bare && <div className="phone-notch" />}
        <div className="phone-screen">
          {bare ? children : <div className="screen-fit">{children}</div>}
        </div>
      </div>
      <div className="phone-glow" />
    </div>
  );
}
