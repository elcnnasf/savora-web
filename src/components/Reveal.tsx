import type { ReactNode, CSSProperties, ElementType } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
}

/** Wraps content so it fades/slides in when scrolled into view. */
export default function Reveal({ children, className = '', delay = 0, as, style }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = (as ?? 'div') as ElementType;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
