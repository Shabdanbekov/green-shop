import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[34px] mb-5 mr-[1050px]"
          src="images/img_logo.svg"
          alt="logo"
        />
        <div className="h-14 sm:h-[109px] md:h-[49px] relative w-full">
          <Line className="absolute bg-green-500_7f bottom-[4%] h-px inset-x-[0] mx-auto w-full" />
          <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 items-start justify-between right-[16%] w-[53%]">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col gap-6 justify-start w-full">
                <ul className="flex flex-row sm:hidden items-start justify-between w-full common-row-list">
                  <li>
                    <Text
                      className="hover:font-bold text-base text-gray-800 hover:text-green-500"
                      size="txtCeraProRegular16"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-bold text-base text-green-500"
                      size="txtCeraProBold16Green500"
                    >
                      Shop
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-bold text-base text-gray-800 hover:text-green-500"
                      size="txtCeraProRegular16"
                    >
                      Plant Care
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-bold text-base text-gray-800 hover:text-green-500"
                      size="txtCeraProRegular16"
                    >
                      Blogs
                    </Text>
                  </li>
                </ul>
                <Line className="bg-green-500 h-[3px] md:ml-[0] ml-[95px] mr-[218px] w-[11%]" />
              </div>
            </div>
            <Img className="h-5 w-5" src="images/img_vector.svg" alt="vector" />
          </div>
          <div className="absolute flex flex-row gap-[30px] items-center justify-between right-[0] top-[0] w-[14%]">
            <div className="h-6 relative w-[19%]">
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
              className="cursor-pointer flex items-center justify-center min-w-[100px]"
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
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
