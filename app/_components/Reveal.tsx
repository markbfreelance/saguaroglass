"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delayMs?: number;
};

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delayMs = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => target.classList.add("in"), delayMs);
            io.unobserve(target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  const Component = Tag as unknown as React.ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${className}`}
    >
      {children}
    </Component>
  );
}
