"use client";

import { CLIENT_LOGOS } from "@/lib/data";

export function ClientLogos() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-y border-ink/10 bg-white py-10">
      <div className="container-content">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Ils me font confiance
        </p>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {logos.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap font-display text-lg font-semibold text-ink/35 transition-colors hover:text-ink"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
