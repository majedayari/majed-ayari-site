import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** Export statique en build. En `next dev`, l'export est désactivé : Next 14.2 renvoie sinon
 *  « missing generateStaticParams » sur la route catch-all app/[...slug] alors qu'elle l'exporte. */
const basePath = process.env.NEXT_BASE_PATH || "";

export default function config(phase) {
  return {
    ...(phase === PHASE_DEVELOPMENT_SERVER ? {} : { output: "export" }),
    images: { unoptimized: true },
    trailingSlash: true,
    ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  };
}
