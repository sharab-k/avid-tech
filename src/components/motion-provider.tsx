"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `strict` makes the full `motion.*` components throw, so only the `m.*` ones
 * backed by this feature set can be used and nothing can quietly pull layout or
 * drag animations into the bundle later. Loading the features asynchronously was
 * measured and made the bundle larger, not smaller.
 *
 * reducedMotion is set once here so no individual component has to remember it.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
