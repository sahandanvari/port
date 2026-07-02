/** Emil Kowalski–style motion tokens — ease-out enters, springs for layoutId. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export const uiEnter = {
  duration: 0.2,
  ease: easeOut,
};

export const uiExit = {
  duration: 0.15,
  ease: easeOut,
};
