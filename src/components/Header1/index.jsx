import React from "react";

import { Button, Img, Line, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-[18px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Img className="h-[34px]" src="images/img_logo.svg" alt="logo" />
            <ul className="flex md:flex-1 flex-row gap-[50px] sm:hidden items-start justify-center md:ml-[0] ml-[229px] w-[30%] md:w-full common-row-list">
              <li>
                <Text
                  className="text-base text-gray-800"
                  size="txtCeraProRegular16"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-gray-800"
                  size="txtCeraProRegular16"
                >
                  Shop
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-gray-800"
                  size="txtCeraProRegular16"
                >
                  Plant Care
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-gray-800"
                  size="txtCeraProRegular16"
                >
                  Blogs
                </Text>
              </li>
            </ul>
            <Img
              className="h-5 md:ml-[0] ml-[261px] w-5"
              src="images/img_vector.svg"
              alt="vector"
            />
            <div className="h-6 md:ml-[0] ml-[30px] relative w-[3%] md:w-full">
              <div className="h-6 m-auto w-full">
                <Img
                  className="absolute h-6 inset-y-[0] left-[0] my-auto w-6"
                  src="images/img_vector_gray_800.svg"
                  alt="vector_One"
                />
                <div className="absolute bg-green-500 h-3 outline outline-[2px] outline-white-A700 right-[0] rounded-[50%] top-[8%] w-3"></div>
              </div>
              <Text
                className="absolute right-[10%] text-[10px] text-white-A700 top-[0]"
                size="txtCeraProMedium10"
              >
                6
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[100px] md:ml-[0] ml-[30px]"
              leftIcon={
                <Img
                  className="h-5 mb-0.5 mr-1"
                  src="images/img_iconlycurvedlogout.svg"
                  alt="Iconly/Curved/Logout"
                />
              }
              shape="round"
              color="green_500"
              size="xs"
              variant="fill"
            >
              <div className="font-cerapro font-medium leading-[normal] text-base text-left">
                Login
              </div>
            </Button>
          </div>
          <Line className="bg-green-500_7f h-px w-full" />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
