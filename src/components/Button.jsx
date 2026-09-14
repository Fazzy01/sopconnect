import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-secondary text-primary-dark shadow-sm shadow-primary-dark/10 hover:bg-secondary-light hover:shadow-md hover:shadow-primary-dark/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
  dark:
    "bg-primary text-secondary-light shadow-sm shadow-primary/20 hover:bg-primary-light hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
  outline:
    "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-secondary-light hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
  ghost:
    "text-primary hover:text-secondary-dark hover:-translate-y-0.5 active:translate-y-0",
  inverse:
    "bg-paper text-primary shadow-sm hover:bg-secondary hover:text-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
};

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  withArrow = false,
  className = "",
  children,
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out";
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
