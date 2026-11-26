import { CLIENT_LOGOS } from "@/lib/data";

/** Préfixe basePath pour les assets public/ : vide en production racine, /majed-ayari-site sur la démo Pages. */
const basePath = process.env.NEXT_BASE_PATH ?? "";

type LogoItem =
  | { kind: "text"; name: string }
  | { kind: "image"; name: string; src: string; width: number; height: number; className?: string };

const LOGO_ITEMS: LogoItem[] = [
  {
    kind: "image",
    name: "Groupe GEFOR",
    src: `${basePath}/logos/gefor.svg`,
    width: 170,
    height: 30,
  },
  {
    kind: "image",
    name: "Windward Yachts",
    src: `${basePath}/logos/windward-yachts.svg`,
    width: 72,
    height: 72,
    className: "h-11 w-auto",
  },
  ...CLIENT_LOGOS.map<LogoItem>((name) => ({ kind: "text", name })),
];

export function ClientLogos() {
  const logos = [...LOGO_ITEMS, ...LOGO_ITEMS];
  return (
    <section className="border-y border-ink/10 bg-white py-10">
      <div className="container-content">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Ils me font confiance
        </p>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {logos.map((logo, i) =>
              logo.kind === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${logo.name}-${i}`}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.className ?? "h-8 w-auto"} opacity-60 transition-opacity hover:opacity-100`}
                />
              ) : (
                <span
                  key={`${logo.name}-${i}`}
                  className="whitespace-nowrap font-display text-lg font-semibold text-ink/35 transition-colors hover:text-ink"
                >
                  {logo.name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
