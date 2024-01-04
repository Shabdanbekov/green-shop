import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  Text,
  TextArea,
} from "components";
import Header from "components/Header";

const ProductCheckoutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cerapro items-center justify-end mx-auto p-4 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1200px] mt-2 mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center w-full" />
          <Text
            className="mt-8 text-[15px] text-gray-800"
            size="txtCeraProRegular15"
          >
            Home / Shop / Checkout
          </Text>
          <div className="flex flex-row sm:gap-10 items-start justify-between mt-[29px] w-[74%] md:w-full">
            <Text className="text-[17px] text-gray-800" size="txtCeraProBold17">
              Billing Address
            </Text>
            <Text className="text-[17px] text-gray-800" size="txtCeraProBold17">
              Your Order
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[9px] w-[99%] md:w-full">
            <Text
              className="md:mt-0 mt-[5px] text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              First Name
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
              size="txtCeraProRegular22"
            >
              *
            </Text>
            <Text
              className="md:ml-[0] ml-[285px] md:mt-0 mt-1.5 text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              Last Name
            </Text>
            <Text
              className="md:ml-[0] ml-[5px] text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
              size="txtCeraProRegular22"
            >
              *
            </Text>
            <Text
              className="md:ml-[0] ml-[335px] md:mt-0 mt-[5px] text-base text-gray-800"
              size="txtCeraProMedium16Gray800"
            >
              Products
            </Text>
            <Text
              className="md:ml-[0] ml-[258px] md:mt-0 mt-[5px] text-base text-gray-800"
              size="txtCeraProMedium16Gray800"
            >
              Subtotal
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[5px] w-full">
            <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start w-[61%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[65%] md:w-full">
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
                  className="sm:ml-[0] ml-[237px] sm:mt-0 mt-1.5 text-[15px] text-gray-800"
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
            </div>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start md:mt-0 mt-0.5 w-[34%] md:w-full">
              <Line className="bg-green-500_7f h-px w-full" />
              <div className="bg-gray-50 flex flex-col items-center justify-start px-[3px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[97%] md:w-full">
                  <Img
                    className="h-[70px] md:h-auto object-cover w-[70px]"
                    src="images/img_image1.png"
                    alt="imageEleven"
                  />
                  <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[11px]">
                    <Text
                      className="text-base text-gray-800"
                      size="txtCeraProMedium16Gray800"
                    >
                      Barberton Daisy
                    </Text>
                    <Text
                      className="text-gray-600 text-sm"
                      size="txtCeraProMedium14Gray600"
                    >
                      <span className="text-gray-500 font-cerapro text-left font-normal">
                        SKU:{" "}
                      </span>
                      <span className="text-gray-600 font-cerapro text-left font-normal">
                        1995751877966
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[43px] text-gray-600 text-right text-sm"
                    size="txtCeraProRegular14"
                  >
                    (x 2)
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[37px] text-green-500 text-lg text-right"
                    size="txtCeraProBold18Green500"
                  >
                    $238.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between mt-[3px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[30%] md:w-full">
              <div className="h-10 relative w-full">
                <Text
                  className="ml-[13px] my-auto text-gray-500 text-sm"
                  size="txtCeraProRegular14Gray500"
                >
                  Select a country / region
                </Text>
                <Input
                  name="group123"
                  placeholder=""
                  className="justify-center p-0 w-full"
                  wrapClassName="flex inset-[0] m-auto w-full"
                  suffix={
                    <Img
                      className="h-[18px] ml-[35px] left-[10%] absolute my-auto"
                      src="images/img_arrowdown_gray_600.svg"
                      alt="arrow_down"
                    />
                  }
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-row items-end justify-start mt-[21px] w-[33%] md:w-full">
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
              <div className="h-10 md:h-[45px] mt-[5px] relative w-full">
                <Text
                  className="ml-[13px] mt-[9px] text-gray-500 text-sm"
                  size="txtCeraProRegular14Gray500"
                >
                  House number and street name
                </Text>
                <Input
                  name="rectangleEightyFive"
                  placeholder=""
                  className="justify-center p-0 w-full"
                  wrapClassName="absolute flex h-10 inset-[0] m-auto w-full"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[69%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Input
                  name="rectangleSixty"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex md:flex-1 h-10 md:mt-0 mt-0.5 md:w-full"
                ></Input>
                <div className="bg-gray-50 flex flex-col items-center justify-start">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-0.5 w-[95%] md:w-full">
                    <Img
                      className="h-[66px] md:h-auto object-cover w-[66px]"
                      src="images/img_image7.png"
                      alt="imageFifteen"
                    />
                    <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[13px]">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProMedium16Gray800"
                      >
                        Blushing Bromeliad
                      </Text>
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtCeraProMedium14Gray600"
                      >
                        <span className="text-gray-500 font-cerapro text-left font-normal">
                          SKU:{" "}
                        </span>
                        <span className="text-gray-600 font-cerapro text-left font-normal">
                          19957518757065
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[29px] text-gray-600 text-right text-sm"
                      size="txtCeraProRegular14"
                    >
                      (x 6)
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[35px] text-green-500 text-lg text-right"
                      size="txtCeraProBold18Green500"
                    >
                      $834.00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Input
                  name="group140"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="md:flex-1 md:w-full"
                  size="md"
                ></Input>
                <div className="bg-gray-50 flex flex-col items-center justify-start">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[3px] w-[95%] md:w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src="images/img_image8.png"
                      alt="imageSixteen"
                    />
                    <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[13px]">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProMedium16Gray800"
                      >
                        Aluminum Plant
                      </Text>
                      <Text
                        className="mt-0.5 text-gray-600 text-sm"
                        size="txtCeraProMedium14Gray600"
                      >
                        <span className="text-gray-500 font-cerapro text-left font-normal">
                          SKU:{" "}
                        </span>
                        <span className="text-gray-600 font-cerapro text-left font-normal">
                          1995751877786
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[46px] text-gray-600 text-right text-sm"
                      size="txtCeraProRegular14"
                    >
                      (x 9)
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[29px] text-green-500 text-lg text-right"
                      size="txtCeraProBold18Green500"
                    >
                      $1,611.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2 w-full">
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
              className="sm:ml-[0] ml-[322px] sm:mt-0 mt-[7px] text-[15px] text-gray-800"
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
            <Text
              className="sm:ml-[0] ml-[582px] sm:mt-0 mt-[7px] text-green-500 text-right text-sm"
              size="txtCeraProMedium14Green500"
            >
              Have a coupon code? Click here
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
            <div className="h-10 relative w-[30%] md:w-full">
              <Text
                className="ml-[13px] mt-[9px] text-gray-500 text-sm"
                size="txtCeraProRegular14Gray500"
              >
                Select a state
              </Text>
              <Input
                name="group122"
                placeholder=""
                className="justify-center p-0 w-full"
                wrapClassName="flex inset-[0] m-auto w-full"
                suffix={
                  <Img
                    className="h-[18px] ml-[35px] left-[10%] absolute my-auto"
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
              wrapClassName="flex md:flex-1 h-10 md:ml-[0] ml-[22px] w-[30%] md:w-full"
            ></Input>
            <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[157px] md:mt-0 mt-[7px] w-[27%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Subtotal
                </Text>
                <Text
                  className="text-gray-800 text-lg text-right"
                  size="txtCeraProMedium18"
                >
                  $2,683.00
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Coupon Discount
                </Text>
                <Text
                  className="text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  (-) 00.00
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-2/5 md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
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
                  className="sm:ml-[0] ml-[263px] sm:mt-0 mt-[5px] text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Phone Number
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-start w-[95%] md:w-full">
                <Input
                  name="rectangleSixtySix"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-10 w-[78%] sm:w-full"
                ></Input>
                <div className="h-10 relative w-[18%] sm:w-full">
                  <Text
                    className="ml-2.5 my-auto text-[15px] text-gray-800"
                    size="txtCeraProRegular15"
                  >
                    +966
                  </Text>
                  <Input
                    name="group118"
                    placeholder=""
                    className="justify-center p-0 w-full"
                    wrapClassName="flex inset-[0] m-auto w-full"
                    suffix={
                      <Img
                        className="h-[18px] ml-[35px] left-[45%] absolute my-auto"
                        src="images/img_arrowdown_gray_800.svg"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[5px] items-end justify-start w-[61%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="mb-2 text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl"
                  size="txtCeraProRegular22"
                >
                  *
                </Text>
                <Text
                  className="sm:ml-[0] ml-[390px] sm:mt-0 mt-4 text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Shiping
                </Text>
                <Text
                  className="sm:ml-[0] ml-[214px] sm:mt-0 mt-[13px] text-gray-800 text-lg text-right"
                  size="txtCeraProMedium18"
                >
                  $16.00
                </Text>
              </div>
              <Text
                className="text-green-500 text-xs"
                size="txtCeraProRegular12"
              >
                View shipping charge
              </Text>
            </div>
          </div>
          <Line className="bg-green-500_7f h-px md:ml-[0] ml-[879px] w-[27%]" />
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3 w-full">
            <Radio
              value="Shiptoadifferentaddress"
              className="font-medium sm:mt-0 mt-[18px] text-[15px] text-gray-800 text-left"
              inputClassName="border-2 border-green-500 border-solid h-[15px] mr-[5px] w-[15px]"
              checked={false}
              name="shiptoadifferenOne"
              label="Ship to a different address"
              id="Shiptoadifferentaddress"
            ></Radio>
            <Text
              className="sm:ml-[0] ml-[665px] text-base text-gray-800"
              size="txtCeraProBold16"
            >
              Total
            </Text>
            <Text
              className="mb-[13px] sm:ml-[0] ml-[200px] text-green-500 text-lg text-right"
              size="txtCeraProBold18Green500"
            >
              $2,699.00
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[26px] w-full">
            <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:mt-0 mt-[23px] w-[30%] md:w-full">
              <Text
                className="text-[15px] text-gray-800"
                size="txtCeraProRegular15"
              >
                Order notes (optional)
              </Text>
              <TextArea
                className="bg-transparent border border-gray-200 border-solid rounded-[3px] w-full"
                name="rectangleEightySix"
                placeholder=""
              ></TextArea>
            </div>
            <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[27%] md:w-full">
              <Text
                className="text-[17px] text-gray-800"
                size="txtCeraProBold17"
              >
                Payment Method
              </Text>
              <div className="border border-gray-200 border-solid flex flex-row gap-2.5 items-center justify-start p-2 rounded-[3px] w-full">
                <div className="border border-green-500 border-solid h-4 ml-[3px] rounded-[50%] w-4"></div>
                <Img
                  className="h-[26px] md:h-auto mt-[3px] object-cover w-[74%]"
                  src="images/img_image16.png"
                  alt="imageSeventeen"
                />
              </div>
              <div className="md:h-11 h-[45px] relative w-full">
                <Text
                  className="ml-[37px] my-auto text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Dorect bank transfer
                </Text>
                <div className="absolute border border-gray-200 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[11px] rounded-[3px] w-full">
                  <div className="border border-green-500 border-solid h-4 my-[3px] rounded-[50%] w-4"></div>
                </div>
              </div>
              <div className="flex md:h-11 h-[45px] justify-end relative w-full">
                <Text
                  className="mb-[11px] ml-[37px] mt-auto text-[15px] text-gray-800"
                  size="txtCeraProRegular15"
                >
                  Cash on delivery
                </Text>
                <div className="absolute border border-green-500 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[11px] rounded-[3px] w-full">
                  <div className="border border-green-500 border-solid flex flex-col h-4 items-center justify-start my-[3px] p-[3px] rounded-[50%] w-4">
                    <div className="bg-green-500 h-2.5 rounded-[50%] w-2.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[321px] md:ml-[0] ml-[879px] mt-[49px] rounded-[3px] text-[15px] text-center"
            color="green_500"
            size="sm"
            variant="fill"
          >
            Place Order
          </Button>
          <div className="flex flex-col gap-3 items-center justify-start mt-[210px] w-full">
            <div className="md:h-[1511px] sm:h-[521px] h-[574px] relative w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start w-full">
                  <div className="bg-gray-50 sm:h-[201px] h-[250px] md:h-[633px] p-[23px] sm:px-5 relative w-full">
                    <div className="flex flex-row h-full items-center justify-between ml-[238px] my-auto w-[22%]">
                      <Line className="bg-green-500_19_01 h-[187px] w-px" />
                      <Line className="bg-green-500_19_01 h-[187px] w-px" />
                    </div>
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[96%]">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[18%] md:w-full">
                          <div className="md:h-[74px] h-[95px] relative w-[38%]">
                            <div className="absolute bg-green-500_21 bottom-[0] flex flex-col h-[74px] inset-x-[0] items-end justify-end mx-auto pl-0.5 py-0.5 rounded-[50%] w-[74px]">
                              <Img
                                className="h-12 mt-[22px]"
                                src="images/img_frame.svg"
                                alt="frame"
                              />
                            </div>
                            <Img
                              className="absolute h-[46px] right-[0] top-[0]"
                              src="images/img_frame.svg"
                              alt="frame_One"
                            />
                          </div>
                          <Text
                            className="mt-2.5 text-[17px] text-gray-800"
                            size="txtCeraProBold17"
                          >
                            Garden Care
                          </Text>
                          <Text
                            className="leading-[22.00px] mt-[7px] text-gray-600 text-sm w-full"
                            size="txtCeraProRegular14"
                          >
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants.
                          </Text>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[62px] grid sm:grid-cols-1 grid-cols-2 w-[41%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="md:h-[87px] h-[90px] relative w-[41%]">
                              <div className="absolute bg-green-500_21 bottom-[0] h-[74px] left-[0] rounded-[50%] w-[74px]"></div>
                              <Img
                                className="absolute h-[87px] inset-y-[0] my-auto right-[0]"
                                src="images/img_group18_87x68.svg"
                                alt="groupEighteen"
                              />
                            </div>
                            <Text
                              className="mt-2.5 text-[17px] text-gray-800"
                              size="txtCeraProBold17"
                            >
                              Plant Renovation
                            </Text>
                            <Text
                              className="leading-[22.00px] mt-[7px] text-gray-600 text-sm w-full"
                              size="txtCeraProRegular14"
                            >
                              We are an online plant shop offering a wide range
                              of cheap and trendy plants.
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="md:h-[85px] h-[89px] relative w-[90px]">
                              <div className="absolute bg-green-500_21 bottom-[0] h-[74px] left-[0] rounded-[50%] w-[74px]"></div>
                              <Img
                                className="absolute h-[85px] right-[0] top-[0]"
                                src="images/img_group19_85x83.svg"
                                alt="groupNineteen"
                              />
                            </div>
                            <Text
                              className="mt-3 text-[17px] text-gray-800"
                              size="txtCeraProBold17"
                            >
                              Watering Graden
                            </Text>
                            <Text
                              className="leading-[22.00px] mt-[5px] text-gray-600 text-sm w-full"
                              size="txtCeraProRegular14"
                            >
                              We are an online plant shop offering a wide range
                              of cheap and trendy plants.
                            </Text>
                          </div>
                        </List>
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[31%] md:w-full">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtCeraProBold18"
                          >
                            Would you like to join newsletters?
                          </Text>
                          <div className="bg-white-A700 flex flex-row items-center justify-between mt-[13px] pl-[11px] rounded-md shadow-bs w-full">
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtCeraProRegular14Gray50001"
                            >
                              enter your email address...
                            </Text>
                            <Button
                              className="cursor-pointer font-bold min-w-[85px] rounded-br-md rounded-tr-md text-center text-lg"
                              color="green_500"
                              size="sm"
                              variant="fill"
                            >
                              Join
                            </Button>
                          </div>
                          <Text
                            className="leading-[22.00px] mt-[17px] text-[13px] text-gray-600 w-full"
                            size="txtCeraProRegular13"
                          >
                            We usually post offers and challenges in newsletter.
                            We’re your online houseplant destination. We offer a
                            wide range of houseplants and accessories shipped
                            directly from our (green)house to yours!{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-col items-center justify-end w-full">
                    <div className="flex flex-col gap-[27px] justify-start mt-[27px] w-full">
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[86%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                          <Text
                            className="md:mt-0 mt-0.5 text-gray-800 text-lg"
                            size="txtCeraProBold18"
                          >
                            My Account
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[166px] text-gray-800 text-lg"
                            size="txtCeraProBold18"
                          >
                            Help & Guide
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[154px] text-gray-800 text-lg"
                            size="txtCeraProBold18"
                          >
                            Categories
                          </Text>
                          <Text
                            className="mb-0.5 md:ml-[0] ml-[173px] text-gray-800 text-lg"
                            size="txtCeraProBold18"
                          >
                            Social Media
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-full">
                          <Text
                            className="leading-[30.00px] text-gray-800 text-sm"
                            size="txtCeraProRegular14Gray800"
                          >
                            <>
                              My Account
                              <br />
                              Our stores
                              <br />
                              Contact us
                              <br />
                              Career
                              <br />
                              Specials
                            </>
                          </Text>
                          <Text
                            className="leading-[30.00px] md:ml-[0] ml-[185px] text-gray-800 text-sm"
                            size="txtCeraProRegular14Gray800"
                          >
                            <>
                              Help Center
                              <br />
                              How to Buy
                              <br />
                              Shipping & Delivery
                              <br />
                              Product Policy
                              <br />
                              How to Return
                            </>
                          </Text>
                          <Text
                            className="leading-[30.00px] md:ml-[0] ml-[129px] text-gray-800 text-sm"
                            size="txtCeraProRegular14Gray800"
                          >
                            <>
                              House Plants
                              <br />
                              Potter Plants
                              <br />
                              Seeds
                              <br />
                              Small Plants
                              <br />
                              Accessories
                            </>
                          </Text>
                          <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[173px] md:mt-0 mt-3 w-[22%] md:w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-[85%] md:w-full">
                              <Button
                                className="flex h-[30px] items-center justify-center rounded w-[30px]"
                                shape="round"
                                color="green_500_33"
                                size="sm"
                                variant="outline"
                              >
                                <Img
                                  src="images/img_group36.svg"
                                  alt="group132"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded w-[30px]"
                                shape="round"
                                color="green_500_33"
                                size="sm"
                                variant="outline"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_group35.svg"
                                  alt="group131"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded w-[30px]"
                                shape="round"
                                color="green_500_33"
                                size="sm"
                                variant="outline"
                              >
                                <Img
                                  src="images/img_group34.svg"
                                  alt="group130"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded w-[30px]"
                                shape="round"
                                color="green_500_33"
                                size="sm"
                                variant="outline"
                              >
                                <Img
                                  src="images/img_group33.svg"
                                  alt="group129"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded w-[30px]"
                                shape="round"
                                color="green_500_33"
                                size="xs"
                                variant="outline"
                              >
                                <Img
                                  src="images/img_group32.svg"
                                  alt="group128"
                                />
                              </Button>
                            </div>
                            <Text
                              className="mt-[31px] text-gray-800 text-lg"
                              size="txtCeraProBold18"
                            >
                              We accept
                            </Text>
                            <Img
                              className="h-[26px] md:h-auto mt-[7px] object-cover w-full"
                              src="images/img_image16.png"
                              alt="imageSixteen_One"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-green-500_33 h-px w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-green-500_19_01 h-[88px] inset-[0] justify-center m-auto w-full"></div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-5 w-full"
                style={{ backgroundImage: "url('images/img_group47.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[3px] mt-1.5 w-[79%] md:w-full">
                  <Img
                    className="h-[34px]"
                    src="images/img_logo.svg"
                    alt="logo_One"
                  />
                  <Img
                    className="h-5 md:ml-[0] ml-[87px] w-5"
                    src="images/img_iconlycurvedlocation.svg"
                    alt="iconlycurvedloc"
                  />
                  <Text
                    className="leading-[22.00px] md:ml-[0] ml-[9px] text-gray-800 text-sm"
                    size="txtCeraProRegular14Gray800"
                  >
                    <>
                      70 West Buckingham Ave.
                      <br />
                      Farmingdale, NY 11735
                    </>
                  </Text>
                  <Img
                    className="h-5 md:ml-[0] ml-[60px] w-5"
                    src="images/img_iconlycurvedmessage.svg"
                    alt="iconlycurvedmes"
                  />
                  <a
                    href="mailto:contact@besa.com"
                    className="ml-2.5 md:ml-[0] text-gray-800 text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>contact@greenshop.com</Text>
                  </a>
                  <Img
                    className="h-5 md:ml-[0] ml-[73px] w-5"
                    src="images/img_iconlycurvedcalling.svg"
                    alt="iconlycurvedcal"
                  />
                  <Text
                    className="ml-2 md:ml-[0] text-gray-800 text-sm"
                    size="txtCeraProRegular14Gray800"
                  >
                    +88 01911 717 490
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="text-gray-800 text-sm"
              size="txtCeraProRegular14Gray800"
            >
              © 2021 GreenShop. All Rights Reserved.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCheckoutPage;
