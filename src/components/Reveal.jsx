import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
