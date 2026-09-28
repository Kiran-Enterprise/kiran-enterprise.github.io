import { Link } from "react-router-dom";

const VARIANTS = {
  copper: "bg-copper-600 text-white hover:bg-copper-700",
  verdigris: "bg-verdigris-600 text-white hover:bg-verdigris-700",
  ink: "bg-ink text-white hover:bg-ink-soft",
  paper: "bg-white text-ink hover:bg-paper",
  outline: "border border-line bg-transparent text-ink hover:border-ink",
  onDark: "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

const SIZES = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-6 text-base",
};

export function Button({
  variant = "ink",
  size = "md",
  to,
  href,
  className = "",
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-150 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
