import { motion, useReducedMotion } from "framer-motion";

/** Subtle decorative orbit: slowly rotating rings with accent satellites. */
export function HeroOrbit() {
  const reduce = useReducedMotion();
  const spin = (duration: number, reverse = false) =>
    reduce
      ? {}
      : {
          animate: { rotate: reverse ? -360 : 360 },
          transition: { duration, ease: "linear" as const, repeat: Infinity },
        };

  return (
    <motion.div
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none relative aspect-square w-full"
    >
      <div className="absolute inset-[18%] rounded-full bg-primary/10 blur-3xl" />

      <motion.div
        {...spin(60)}
        className="absolute inset-0 rounded-full border border-foreground/10"
      >
        <span className="absolute top-1/2 -left-1.5 size-3 rounded-full bg-primary shadow-glow" />
      </motion.div>

      <motion.div
        {...spin(40, true)}
        className="absolute inset-[14%] rounded-full border border-dashed border-foreground/15"
      >
        <span className="absolute -top-1 left-1/2 size-2 rounded-full bg-foreground" />
        <span className="absolute -bottom-2 left-1/3 size-4 rounded-full border border-primary bg-surface" />
      </motion.div>

      <motion.div
        {...spin(28)}
        className="absolute inset-[30%] rounded-full border border-primary/30"
      >
        <span className="absolute top-1/4 -right-1 size-2.5 rounded-full bg-primary" />
      </motion.div>

      <motion.div
        animate={reduce ? { y: 0 } : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[42%] grid place-items-center rounded-full bg-ink shadow-lift"
      >
        <span className="font-accent text-3xl text-ink-foreground">a</span>
      </motion.div>
    </motion.div>
  );
}
