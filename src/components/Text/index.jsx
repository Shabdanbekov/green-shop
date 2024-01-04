import React from "react";

const sizeClasses = {
  txtCeraProRegular15Green500: "font-cerapro font-normal",
  txtCeraProRegular14Gray500: "font-cerapro font-normal",
  txtCeraProBold20: "font-bold font-cerapro",
  txtCeraProRegular14Gray50001: "font-cerapro font-normal",
  txtCeraProBold16Green500: "font-bold font-cerapro",
  txtCeraProBold15Gray800: "font-bold font-cerapro",
  txtCeraProBold22: "font-bold font-cerapro",
  txtCeraProBold23: "font-bold font-cerapro",
  txtCeraProBold28: "font-bold font-cerapro",
  txtCeraProMedium14WhiteA700: "font-cerapro font-medium",
  txtCeraProMedium16Gray800: "font-cerapro font-medium",
  txtCeraProMedium16Gray600: "font-cerapro font-medium",
  txtCeraProMedium14Gray600: "font-cerapro font-medium",
  txtCeraProBold15Gray600: "font-bold font-cerapro",
  txtCeraProMedium16Green500: "font-cerapro font-medium",
  txtCeraProMedium20: "font-cerapro font-medium",
  txtCeraProBlack70: "font-black font-cerapro",
  txtCeraProBold18Green500: "font-bold font-cerapro",
  txtCeraProMedium14: "font-cerapro font-medium",
  txtCeraProBold18: "font-bold font-cerapro",
  txtCeraProMedium15: "font-cerapro font-medium",
  txtCeraProMedium16: "font-cerapro font-medium",
  txtCeraProMedium17: "font-cerapro font-medium",
  txtCeraProMedium10: "font-cerapro font-medium",
  txtCeraProMedium13: "font-cerapro font-medium",
  txtCeraProRegular13Gray800: "font-cerapro font-normal",
  txtCeraProBold15: "font-bold font-cerapro",
  txtCeraProMedium18: "font-cerapro font-medium",
  txtCeraProBold14: "font-bold font-cerapro",
  txtCeraProMedium14Green500: "font-cerapro font-medium",
  txtCeraProBold17: "font-bold font-cerapro",
  txtCeraProBold16: "font-bold font-cerapro",
  txtCeraProRegular15: "font-cerapro font-normal",
  txtCeraProRegular16: "font-cerapro font-normal",
  txtCeraProRegular17: "font-cerapro font-normal",
  txtCeraProRegular16Gray600: "font-cerapro font-normal",
  txtCeraProRegular18: "font-cerapro font-normal",
  txtCeraProRegular15Gray600: "font-cerapro font-normal",
  txtCeraProRegular12: "font-cerapro font-normal",
  txtCeraProRegular14Green500: "font-cerapro font-normal",
  txtCeraProRegular13: "font-cerapro font-normal",
  txtCeraProRegular14: "font-cerapro font-normal",
  txtCeraProRegular20WhiteA700: "font-cerapro font-normal",
  txtHangingLetters65: "font-hangingletters font-normal",
  txtCeraProThin18: "font-cerapro font-light",
  txtCeraProBold17Green500: "font-bold font-cerapro",
  txtCeraProRegular28: "font-cerapro font-normal",
  txtCeraProRegular22: "font-cerapro font-normal",
  txtCeraProBold30: "font-bold font-cerapro",
  txtCeraProRegular14Gray800: "font-cerapro font-normal",
  txtCeraProBlack18: "font-black font-cerapro",
  txtCeraProRegular20: "font-cerapro font-normal",
  txtCeraProMedium20Gray800: "font-cerapro font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
