"use client";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function FacebookPixel() {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
    window.fbq("track", "PageView");
  }, [pathname, loaded]);

  return (
    <Script
      id="meta-pixel"
      src="/scripts/pixel.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
    />
  );
}
