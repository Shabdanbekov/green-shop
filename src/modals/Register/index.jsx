import React from "react";
import { default as ModalProvider } from "react-modal";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const RegisterModal = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-black-900_3f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[108px] pt-[13px] md:px-5 w-full">
          <div className="flex flex-col justify-start w-full">
            <Img
              className="h-[18px] md:ml-[0] ml-[469px] w-[18px]"
              src="images/img_x.svg"
              alt="x"
            />
            <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[172px] mt-4 w-[32%] md:w-full">
              <a href="javascript:" className="text-gray-800 text-xl">
                <Text size="txtCeraProMedium20Gray800">Login</Text>
              </a>
              <Text className="text-gray-800 text-lg" size="txtCeraProThin18">
                I
              </Text>
              <a href="javascript:" className="text-green-500 text-xl">
                <Text size="txtCeraProMedium20">Register</Text>
              </a>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[100px] mt-[34px] w-3/5 md:w-full">
              <Text
                className="text-[13px] text-gray-800"
                size="txtCeraProRegular13Gray800"
              >
                Enter your email and password to register.
              </Text>
              <Input
                name="groupThirtyOne"
                placeholder="Username"
                className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="mt-[13px] rounded-[5px] w-full"
                type="text"
                size="md"
              ></Input>
              <Input
                name="groupThirty"
                placeholder="Enter your email address"
                className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="mt-4 rounded-[5px] w-full"
                type="email"
                size="md"
              ></Input>
              <div className="h-10 md:h-14 mt-4 relative w-full">
                <Text
                  className="ml-3.5 mt-[9px] text-gray-500 text-sm"
                  size="txtCeraProRegular14Gray500"
                >
                  Password
                </Text>
                <div className="absolute border border-gray-200 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-2.5 rounded-[5px] w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconlycurvedhide.svg"
                    alt="iconlycurvedhid"
                  />
                </div>
              </div>
              <Input
                name="groupTwentyEight"
                placeholder="Confirm Password"
                className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="mt-4 rounded-[5px] w-full"
                type="password"
                size="md"
              ></Input>
              <Button
                className="cursor-pointer font-bold min-w-[300px] mt-[41px] rounded-[5px] text-base text-center"
                shape="round"
                color="green_500"
                size="md"
                variant="fill"
              >
                Register
              </Button>
              <div className="flex flex-row items-start justify-between mt-[35px] w-full">
                <Line className="bg-gray-200 h-px mb-1.5 mt-[9px] w-[33%]" />
                <Text
                  className="text-[13px] text-gray-800"
                  size="txtCeraProRegular13Gray800"
                >
                  Or register with
                </Text>
                <Line className="bg-gray-200 h-px mb-1.5 mt-[9px] w-[32%]" />
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[300px] mt-[26px] rounded-[5px]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    className="h-5 mr-[9px]"
                    src="images/img_group.svg"
                    alt="Group"
                  />
                }
                color="gray_200"
                size="sm"
                variant="outline"
              >
                <div className="font-medium text-[13px] text-center">
                  Continue with Google
                </div>
              </Button>
              <div className="flex h-10 md:h-[55px] justify-end mt-[15px] relative w-full">
                <div className="flex flex-row h-full items-center justify-center mb-[9px] mt-auto mx-auto w-[58%]">
                  <Img
                    className="h-5 w-5"
                    src="images/img_facebook1.svg"
                    alt="facebookOne"
                  />
                  <Text
                    className="ml-1 text-[13px] text-center text-gray-600"
                    size="txtCeraProMedium13"
                  >
                    Continue with Facebook
                  </Text>
                </div>
                <div className="absolute border border-gray-200 border-solid h-10 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
              </div>
            </div>
            <div className="bg-green-500 h-2.5 mt-10 w-full"></div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default RegisterModal;
