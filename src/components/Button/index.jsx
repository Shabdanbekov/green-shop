import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-md",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    green_500: "bg-green-500 text-white-A700",
  },
  outline: {
    green_500: "border border-green-500 border-solid text-green-500",
    gray_200: "border border-gray-200 border-solid text-gray-600",
    gray_300: "border border-gray-300 border-solid text-gray-800",
    green_500_33: "outline outline-[1px] outline-green-500_33",
  },
};
const sizes = { xs: "p-1", sm: "p-[9px]", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "green_500",
    "gray_200",
    "gray_300",
    "green_500_33",
  ]),
};

export { Button };
