const Button = ({
  children,
  className,
  size = "small",
  variant = "primary",
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-brand-primary text-white";
    }

    if (variant === "ghost") {
      return "bg-transparent text-brand-dark-gray";
    }

    if (variant === "secondary") {
      return "bg-brand-light-gray text-brand-dark-blue";
    }
  };

  const getSizeClasses = () => {
    if (size === "smal") {
      return "py-1 text-xs";
    }

    if (size === "large") {
      return "py-2 text-sm";
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-3 py-1 text-xs font-semibold transition hover:opacity-75 ${getVariantClasses()} ${getSizeClasses()} ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
