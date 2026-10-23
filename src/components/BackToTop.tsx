"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-dusty/60 bg-ivory/95 text-mauve shadow-[0_10px_30px_rgba(57,50,56,0.12)] transition hover:-translate-y-0.5 hover:border-mauve hover:text-charcoal"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
