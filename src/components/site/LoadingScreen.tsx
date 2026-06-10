import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const hideTimer = setTimeout(() => {
      setHidden(true);
      onComplete?.();
    }, 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${fadeOut ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-hidden={fadeOut}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            Dr. Amita Motwani
          </p>
          <div className="mx-auto mt-4 h-px w-12 bg-accent/50" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Psychologist & Emotional Governance Specialist
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
        </div>
      </div>
    </div>
  );
}
