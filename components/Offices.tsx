import { MapPin } from "lucide-react";
import { OFFICES } from "@/lib/data";

/** Adresses de travail, Tunisie en premier (source : OFFICES dans lib/data.ts). */
export function Offices({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {OFFICES.map((o) => (
        <li key={o.countryCode} className="flex items-start gap-2.5">
          <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-accent-bright" : "text-accent"}`} />
          <address className={`text-sm not-italic leading-relaxed ${dark ? "text-white/70" : "text-ink/80"}`}>
            <span className="font-semibold">{o.label}</span>
            <br />
            {o.street && (<>{o.street}<br /></>)}
            {[o.postalCode, o.locality].filter(Boolean).join(" ")}, {o.region}, {o.country}
            <br />
            <a href={`tel:${o.phoneE164}`} className="font-medium underline-offset-2 hover:underline">{o.phone}</a>
            {o.whatsapp && (
              <>
                {" · "}
                <a href={`https://wa.me/${o.phoneE164.replace("+", "")}`} target="_blank" rel="noopener" className="font-medium underline-offset-2 hover:underline">WhatsApp</a>
              </>
            )}
          </address>
        </li>
      ))}
    </ul>
  );
}
