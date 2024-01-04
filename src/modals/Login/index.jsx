import React from "react";
import { default as ModalProvider } from "react-modal";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const LoginModal = (props) => {
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
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-40 pt-[11px] md:px-5 w-full">
          <div className="flex flex-col justify-start w-full">
            <Img
              className="h-[18px] md:ml-[0] ml-[470px] w-[18px]"
              src="images/img_x.svg"
              alt="x"
            />
            <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[172px] mt-4 w-[32%] md:w-full">
              <a href="javascript:" className="text-green-500 text-xl">
                <Text size="txtCeraProMedium20">Login</Text>
              </a>
              <Text className="text-gray-800 text-lg" size="txtCeraProThin18">
                I
              </Text>
              <a href="javascript:" className="text-gray-800 text-xl">
                <Text size="txtCeraProMedium20Gray800">Register</Text>
              </a>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[100px] mt-[47px] w-[61%] md:w-full">
              <Text
                className="text-[13px] text-gray-800"
                size="txtCeraProRegular13Gray800"
              >
                Enter your username and password to login.
              </Text>
              <div className="h-10 md:h-[53px] mt-[13px] relative w-full">
                <Text
                  className="ml-3.5 my-auto text-gray-500 text-sm"
                  size="txtCeraProRegular14Gray500"
                >
                  almamun_uxui@outlook.com
                </Text>
                <Input
                  name="rectangleFortyNine"
                  placeholder=""
                  className="justify-center p-0 w-full"
                  wrapClassName="absolute flex h-10 inset-[0] m-auto rounded-[5px] w-full"
                ></Input>
              </div>
              <div className="h-10 md:h-[57px] mt-[17px] relative w-full">
                <div className="flex flex-row h-full items-center justify-start ml-3.5 my-auto w-[29%]">
                  <Text
                    className="text-base text-gray-800"
                    size="txtCeraProRegular16"
                  >
                    ***********
                  </Text>
                  <Text
                    className="ml-0.5 text-gray-800 text-sm"
                    size="txtCeraProRegular14Gray800"
                  >
                    I
                  </Text>
                </div>
                <div className="absolute border border-green-500 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-2.5 rounded-[5px] w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconlycurvedhide.svg"
                    alt="iconlycurvedhid"
                  />
                </div>
              </div>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[185px] mt-[13px] text-green-500 text-sm"
              >
                <Text size="txtCeraProRegular14Green500">Forgot Password?</Text>
              </a>
              <Button
                className="cursor-pointer font-bold min-w-[300px] mt-[25px] rounded-[5px] text-base text-center"
                shape="round"
                color="green_500"
                size="md"
                variant="fill"
              >
                Login
              </Button>
              <div className="flex flex-row items-start justify-between mt-[45px] w-full">
                <Line className="bg-gray-200 h-px mb-1.5 mt-[9px] w-[34%]" />
                <Text
                  className="text-[13px] text-gray-800"
                  size="txtCeraProRegular13Gray800"
                >
                  Or login with
                </Text>
                <Line className="bg-gray-200 h-px mb-1.5 mt-[9px] w-[34%]" />
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[300px] mt-[26px] rounded-[5px]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    className="h-5 mr-2.5"
                    src="images/img_group.svg"
                    alt="Group"
                  />
                }
                color="gray_200"
                size="sm"
                variant="outline"
              >
                <div className="font-medium text-[13px] text-center">
                  Login with Google
                </div>
              </Button>
              <div className="flex h-10 md:h-[55px] justify-end mt-[15px] relative w-full">
                <div className="flex flex-row h-full items-start justify-center mb-[9px] mt-auto mx-auto w-[51%]">
                  <Img
                    className="h-5 w-5"
                    src="images/img_facebook1.svg"
                    alt="facebookOne"
                  />
                  <Text
                    className="ml-1 mt-0.5 text-[13px] text-center text-gray-600"
                    size="txtCeraProMedium13"
                  >
                    Login with Facebook
                  </Text>
                </div>
                <div className="absolute border border-gray-200 border-solid h-10 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
              </div>
            </div>
            <div className="bg-green-500 h-2.5 mt-[58px] w-full"></div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default LoginModal;
