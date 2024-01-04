import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

const MyAccountPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cerapro items-center justify-start mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col gap-[57px] items-center justify-start max-w-[1200px] mb-[205px] mx-auto md:px-5 w-full">
          <Header1 className="flex flex-col items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
            <div className="bg-gray-50 flex md:flex-1 flex-col gap-[9px] justify-start mb-[280px] md:mt-0 mt-[3px] py-[15px] w-[26%] md:w-full">
              <Text
                className="md:ml-[0] ml-[18px] text-gray-800 text-lg"
                size="txtCeraProBold18"
              >
                My Account
              </Text>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[3px] w-full">
                <div className="h-[315px] relative w-full">
                  <Img
                    className="h-5 ml-[23px] mt-[57px] w-5"
                    src="images/img_iconlylightoutlinelocation.svg"
                    alt="iconlylightoutl"
                  />
                  <div className="absolute h-[315px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex flex-col gap-[59px] inset-x-[0] justify-start mx-auto top-[1%] w-full">
                      <div className="bg-white-A700 flex flex-row gap-[18px] items-center justify-start md:pr-10 sm:pr-5 pr-[269px] w-full">
                        <Line className="bg-green-500 h-[39px] w-[5px]" />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start ml-6 md:ml-[0] w-[6%] md:w-full">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_vector_gray_600.svg"
                          alt="vector_Two"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_heart1_gray_600.svg"
                          alt="heartOne"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_iconlycurvedactivity.svg"
                          alt="iconlycurvedact"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_iconlycurveddownload.svg"
                          alt="iconlycurveddow"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_iconlycurveddanger.svg"
                          alt="iconlycurveddan"
                        />
                      </div>
                    </div>
                    <Text
                      className="absolute h-full inset-y-[0] leading-[45.00px] left-[17%] my-auto text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      <span className="text-green-500 font-cerapro text-left font-bold">
                        <>
                          Account Details
                          <br />
                        </>
                      </span>
                      <span className="text-gray-600 font-cerapro text-left font-normal">
                        <>
                          Address
                          <br />
                          Orders
                          <br />
                          Wishlist
                          <br />
                          Reports
                          <br />
                          Downloads
                          <br />
                          Support
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[18px] justify-start w-full">
                  <Line className="bg-green-500_7f h-px w-full" />
                  <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[22px] w-[26%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconlycurvedlogout_green_500.svg"
                      alt="iconlycurvedlog"
                    />
                    <Text
                      className="text-[15px] text-green-500"
                      size="txtCeraProBold15"
                    >
                      Loguot
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[72%] md:w-full">
              <Text
                className="text-base text-gray-800"
                size="txtCeraProMedium16Gray800"
              >
                Personal Information
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[9px] w-[62%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[5px] text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  First Name
                </Text>
                <Text
                  className="sm:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
                <Text
                  className="sm:ml-[0] ml-[358px] sm:mt-0 mt-1.5 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Last Name
                </Text>
                <Text
                  className="sm:ml-[0] ml-[5px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between mt-[5px] w-full">
                <Input
                  name="rectangleFiftyNine"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-10 sm:w-full"
                ></Input>
                <Input
                  name="rectangleSixty"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-10 sm:w-full"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[21px] w-[66%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[5px] text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Email address
                </Text>
                <Text
                  className="sm:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
                <Text
                  className="sm:ml-[0] ml-[336px] sm:mt-0 mt-[5px] text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Phone Number
                </Text>
                <Text
                  className="sm:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[5px] w-full">
                <Input
                  name="rectangleSixtySix"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex md:flex-1 h-10 md:w-full"
                ></Input>
                <div className="h-10 relative w-[10%] md:w-full">
                  <Text
                    className="ml-2.5 my-auto text-[15px] text-gray-800"
                    size="txtCeraProRegular15"
                  >
                    +966
                  </Text>
                  <Input
                    name="group141"
                    placeholder=""
                    className="justify-center p-0 w-full"
                    wrapClassName="flex inset-[0] m-auto w-full"
                    suffix={
                      <Img
                        className="h-5 ml-[35px] left-[45%] absolute my-auto"
                        src="images/img_arrowdown_gray_800.svg"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></Input>
                </div>
                <div className="border border-gray-200 border-solid h-10 rounded-[3px] w-[39%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[21px] w-[57%] md:w-full">
                <Text
                  className="sm:mt-0 mt-1.5 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Username
                </Text>
                <Text
                  className="sm:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
                <Text
                  className="sm:ml-[0] ml-[362px] sm:mt-0 mt-[5px] text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Photo
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start mt-0.5 w-[81%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-between w-[72%] md:w-full">
                  <Input
                    name="rectangleSixtyTwo"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-10 sm:w-full"
                  ></Input>
                  <div className="bg-gray-50 flex flex-col h-[50px] items-center justify-start rounded-[50%] w-[50px]">
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                      shape="circle"
                      color="gray_200"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-6"
                        src="images/img_group145.svg"
                        alt="group145"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-[21px] items-center justify-between w-1/4 md:w-full">
                  <Button
                    className="cursor-pointer font-bold min-w-[98px] rounded-[3px] text-center text-sm"
                    color="green_500"
                    size="sm"
                    variant="fill"
                  >
                    Change
                  </Button>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtCeraProRegular14Gray800"
                  >
                    Remove
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[30px] text-base text-gray-800"
                size="txtCeraProMedium16Gray800"
              >
                Password change
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start mt-[15px] w-[49%] md:w-full">
                <Text
                  className="text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Current password
                </Text>
                <Input
                  name="group146"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_iconly_lightoutline_hide.svg"
                      alt="Iconly/Light-Outline/Hide"
                    />
                  }
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start mt-7 w-[49%] md:w-full">
                <Text
                  className="text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  New password
                </Text>
                <Input
                  name="group147"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_iconly_lightoutline_hide.svg"
                      alt="Iconly/Light-Outline/Hide"
                    />
                  }
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start mt-7 w-[49%] md:w-full">
                <Text
                  className="text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Confirm new password
                </Text>
                <Input
                  name="group148"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_iconly_lightoutline_hide.svg"
                      alt="Iconly/Light-Outline/Hide"
                    />
                  }
                  size="md"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[131px] mt-[50px] rounded-[3px] text-center text-sm"
                color="green_500"
                size="sm"
                variant="fill"
              >
                Save Change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
