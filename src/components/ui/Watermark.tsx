interface WatermarkProps {
  text: string;
}

/** Oversized outline text used as ambient background typography, echoing the reference site's hero treatment. */
export function Watermark({ text }: WatermarkProps) {
  return (
    <p
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden whitespace-nowrap text-center font-display text-[18vw] font-extrabold leading-none tracking-tight text-transparent"
      style={{ WebkitTextStroke: "1px var(--color-line)" }}
    >
      {text}
    </p>
  );
}
