import Script from "next/script";

export default function FacebookPixel() {
  return (
    <Script
      id="meta-pixel"
      src="/scripts/pixel.js"
      strategy="beforeInteractive"
    />
  );
}
