import { motion } from "framer-motion";

type ScaleButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScaleButton({ children, className }: ScaleButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
