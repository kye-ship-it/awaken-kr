import assert from "node:assert/strict";
import test from "node:test";

import nextConfig from "../next.config.ts";

test("permanently redirects every legacy path to the canonical Awaken path", async () => {
  assert.equal(typeof nextConfig.redirects, "function");

  const redirects = await nextConfig.redirects();

  assert.deepEqual(redirects, [
    {
      source: "/:path*",
      destination: "https://awaken-korea.vercel.app/:path*",
      permanent: true,
    },
  ]);
});
