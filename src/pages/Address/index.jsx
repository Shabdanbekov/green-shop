import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";
import Header1 from "components/Header1";

const AddressPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cerapro items-center justify-start mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col gap-[57px] items-center justify-start max-w-[1200px] mb-[202px] mx-auto md:px-5 w-full">
          <Header1 className="flex flex-col items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
            <div className="bg-gray-50 flex md:flex-1 flex-col gap-[9px] justify-start mb-[282px] md:mt-0 mt-[3px] py-[15px] w-[26%] md:w-full">
              <Text
                className="md:ml-[0] ml-[18px] text-gray-800 text-lg"
                size="txtCeraProBold18"
              >
                My Account
              </Text>
              <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                <div className="h-[315px] relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                    <Img
                      className="h-[18px] md:ml-[0] ml-[23px] w-[18px]"
                      src="images/img_user_gray_600.svg"
                      alt="user"
                    />
                    <div className="bg-white-A700 flex flex-row gap-[18px] items-center justify-start mt-[18px] md:pr-10 sm:pr-5 pr-[267px] w-full">
                      <Line className="bg-green-500 h-[39px] w-[5px]" />
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconlylightoutlinelocation_green_500.svg"
                        alt="iconlylightoutl"
                      />
                    </div>
                    <div className="flex flex-col gap-[30px] items-center justify-start ml-6 md:ml-[0] mt-3.5 w-[6%] md:w-full">
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
                    <span className="text-gray-600 font-cerapro text-left font-normal">
                      <>
                        Account Details
                        <br />
                      </>
                    </span>
                    <span className="text-green-500 font-cerapro text-left font-bold">
                      <>
                        Address
                        <br />
                      </>
                    </span>
                    <span className="text-gray-600 font-cerapro text-left font-normal">
                      <>
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
                <Line className="bg-green-500_7f h-px md:ml-[0] ml-[3px] mt-2.5 w-full" />
                <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[25px] mt-[18px] w-[26%] md:w-full">
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
            <div className="flex md:flex-1 flex-col items-start justify-start w-[72%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-[17px] text-gray-800"
                  size="txtCeraProMedium17"
                >
                  Billing Address
                </Text>
                <Text
                  className="text-base text-green-500"
                  size="txtCeraProMedium16Green500"
                >
                  Add
                </Text>
              </div>
              <Text
                className="mt-1 text-gray-600 text-sm"
                size="txtCeraProRegular14"
              >
                The following addresses will be used on the checkout page by
                default.
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[19px] w-[62%] md:w-full">
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
                  name="rectangleSeventyTwo"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-10 sm:w-full"
                ></Input>
                <Input
                  name="rectangleSeventyThree"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-10 sm:w-full"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[21px] w-[63%] md:w-full">
                <Text
                  className="sm:mt-0 mt-1.5 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Country / Region
                </Text>
                <Text
                  className="ml-0.5 sm:ml-[0] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
                <Text
                  className="sm:ml-[0] ml-[310px] sm:mt-0 mt-1.5 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Town / City
                </Text>
                <Text
                  className="sm:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[5px] w-full">
                <div className="h-10 relative w-[49%] md:w-full">
                  <Text
                    className="ml-[13px] my-auto text-gray-500 text-sm"
                    size="txtCeraProRegular14Gray500"
                  >
                    Select a country / region
                  </Text>
                  <Input
                    name="groupThree"
                    placeholder=""
                    className="justify-center p-0 w-full"
                    wrapClassName="flex inset-[0] m-auto w-full"
                    suffix={
                      <Img
                        className="h-5 ml-[35px] left-[8%] absolute my-auto"
                        src="images/img_arrowdown_gray_600.svg"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></Input>
                </div>
                <Input
                  name="rectangleSixty"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex md:flex-1 h-10 md:w-full"
                ></Input>
              </div>
              <div className="flex flex-row items-end justify-start mt-[21px] w-[14%] md:w-full">
                <Text
                  className="my-1 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Street Address
                </Text>
                <Text
                  className="ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[5px] w-full">
                <div className="h-10 relative w-[49%] md:w-full">
                  <Text
                    className="ml-[13px] mt-[9px] text-gray-500 text-sm"
                    size="txtCeraProRegular14Gray500"
                  >
                    House number and street name
                  </Text>
                  <Input
                    name="rectangleSixtyEight"
                    placeholder=""
                    className="justify-center p-0 w-full"
                    wrapClassName="absolute flex h-10 inset-[0] m-auto w-full"
                  ></Input>
                </div>
                <Input
                  name="groupSeven"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="md:flex-1 md:w-full"
                  size="md"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[21px] w-[56%] md:w-full">
                <Text
                  className="sm:mt-0 mt-1.5 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  State
                </Text>
                <Text
                  className="sm:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
                <Text
                  className="sm:ml-[0] ml-[395px] sm:mt-0 mt-[7px] text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Zip
                </Text>
                <Text
                  className="ml-1 sm:ml-[0] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[5px] w-full">
                <div className="h-10 relative w-[49%] md:w-full">
                  <Text
                    className="ml-[13px] mt-[9px] text-gray-500 text-sm"
                    size="txtCeraProRegular14Gray500"
                  >
                    Select a state
                  </Text>
                  <Input
                    name="groupTwo"
                    placeholder=""
                    className="justify-center p-0 w-full"
                    wrapClassName="flex inset-[0] m-auto w-full"
                    suffix={
                      <Img
                        className="h-5 ml-[35px] left-[8%] absolute my-auto"
                        src="images/img_arrowdown_gray_600.svg"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></Input>
                </div>
                <Input
                  name="rectangleSeventyOne"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex md:flex-1 h-10 md:w-full"
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
                    name="groupOne"
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
              <Button
                className="cursor-pointer font-bold min-w-[131px] mt-[50px] rounded-[3px] text-center text-sm"
                color="green_500"
                size="sm"
                variant="fill"
              >
                Save Address
              </Button>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[60px] w-full">
                <Text
                  className="text-[17px] text-gray-800"
                  size="txtCeraProMedium17"
                >
                  Shipping Address
                </Text>
                <Radio
                  value="Sameasbillingaddress"
                  className="sm:ml-[0] ml-[454px] sm:mt-0 mt-0.5 text-gray-800 text-left text-sm"
                  inputClassName="border border-green-500 border-solid h-4 mr-[5px] w-4"
                  checked={false}
                  name="sameasbilling"
                  label="Same as billing address"
                  id="Sameasbillingaddress"
                ></Radio>
                <Text
                  className="sm:ml-[0] ml-[63px] text-base text-green-500"
                  size="txtCeraProMedium16Green500"
                >
                  Add
                </Text>
              </div>
              <Text
                className="mt-1.5 text-gray-600 text-sm"
                size="txtCeraProRegular14"
              >
                You have not set up this type of address yet.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
