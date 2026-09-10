/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** GA4 Measurement ID (e.g. G-XXXXXXXXXX). Injected at build time; analytics is a no-op when unset. */
  readonly VITE_GA_ID?: string;
  /** Microsoft Clarity project ID. Injected at build time; Clarity is a no-op when unset. */
  readonly VITE_CLARITY_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
