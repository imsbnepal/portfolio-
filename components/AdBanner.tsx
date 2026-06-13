"use client";

import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7566277898150739"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}