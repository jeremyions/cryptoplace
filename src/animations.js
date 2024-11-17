// Shared animation variants
export const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { 
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const listItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2,
    rotate: 10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: { scale: 0.9 },
};
