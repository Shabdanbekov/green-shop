import React from "react";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import Header from "components/Header";

const ProductCartPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cerapro items-center justify-end mx-auto p-4 w-full">
        <Header className="flex md:flex-col md:gap-5 items-center justify-center mt-2 md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1200px] mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              Home / Shop / Shopping Cart{" "}
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-11 w-4/5 md:w-full">
              <Text
                className="text-base text-gray-800"
                size="txtCeraProMedium16Gray800"
              >
                Products
              </Text>
              <Text
                className="md:ml-[0] ml-[245px] text-base text-gray-800"
                size="txtCeraProMedium16Gray800"
              >
                Price
              </Text>
              <Text
                className="md:ml-[0] ml-[108px] md:mt-0 mt-0.5 text-base text-gray-800"
                size="txtCeraProMedium16Gray800"
              >
                Quantity
              </Text>
              <Text
                className="md:ml-[0] ml-[97px] text-base text-gray-800"
                size="txtCeraProMedium16Gray800"
              >
                Total
              </Text>
              <Text
                className="md:ml-[0] ml-[210px] text-gray-800 text-lg"
                size="txtCeraProBold18"
              >
                Cart Totals
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[7px] w-full">
              <Line className="bg-green-500_7f h-px w-[66%]" />
              <Line className="bg-green-500_7f h-px w-[28%]" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[9px] w-full">
              <List
                className="flex flex-col gap-2.5 w-[66%]"
                orientation="vertical"
              >
                <div className="bg-gray-50 flex flex-col items-center justify-start px-0.5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[70px]"
                      src="images/img_image1.png"
                      alt="imageEleven"
                    />
                    <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0]">
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
                      className="md:ml-[0] ml-[98px] text-base text-gray-600"
                      size="txtCeraProMedium16Gray600"
                    >
                      $119.00
                    </Text>
                    <div className="flex flex-row items-start justify-center md:ml-[0] ml-[92px] w-[11%] md:w-full">
                      <div className="bg-gradient3  flex flex-col items-center justify-start p-[7px] rounded-[10px] w-[27%]">
                        <Line className="bg-white-A700 h-0.5 mb-0.5 mt-[7px] w-full" />
                      </div>
                      <Text
                        className="ml-4 text-[17px] text-gray-800"
                        size="txtCeraProRegular17"
                      >
                        2
                      </Text>
                      <div className="h-[25px] md:h-[26px] ml-[11px] relative w-[27%]">
                        <div className="absolute bg-gradient3  h-[25px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                          size="txtCeraProRegular20WhiteA700"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[82px] text-base text-green-500"
                      size="txtCeraProBold16Green500"
                    >
                      $238.00
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[50px] w-6"
                      src="images/img_iconlycurveddelete.svg"
                      alt="iconlycurveddel"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-0.5 w-[97%] md:w-full">
                    <Img
                      className="h-[66px] md:h-auto object-cover w-[66px]"
                      src="images/img_image7.png"
                      alt="imageFifteen"
                    />
                    <div className="flex flex-col items-start justify-start ml-4 md:ml-[0]">
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
                      className="md:ml-[0] ml-[82px] text-base text-gray-600"
                      size="txtCeraProMedium16Gray600"
                    >
                      $139.00
                    </Text>
                    <div className="flex flex-row items-start justify-center md:ml-[0] ml-[90px] w-[11%] md:w-full">
                      <div className="bg-gradient3  flex flex-col items-center justify-start p-[7px] rounded-[10px] w-[27%]">
                        <Line className="bg-white-A700 h-0.5 mb-0.5 mt-[7px] w-full" />
                      </div>
                      <Text
                        className="ml-4 text-[17px] text-gray-800"
                        size="txtCeraProRegular17"
                      >
                        6
                      </Text>
                      <div className="h-[26px] ml-[11px] relative w-[27%]">
                        <div className="absolute bg-gradient3  h-[25px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                          size="txtCeraProRegular20WhiteA700"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[82px] text-base text-green-500"
                      size="txtCeraProBold16Green500"
                    >
                      $834.00
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[50px] w-6"
                      src="images/img_iconlycurveddelete.svg"
                      alt="iconlycurveddel"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[3px] w-[97%] md:w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src="images/img_image8.png"
                      alt="imageSixteen"
                    />
                    <div className="flex flex-col items-start justify-start ml-4 md:ml-[0]">
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
                      className="md:ml-[0] ml-[99px] text-base text-gray-600"
                      size="txtCeraProMedium16Gray600"
                    >
                      $179.00
                    </Text>
                    <div className="flex flex-row items-start justify-center md:ml-[0] ml-[90px] w-[11%] md:w-full">
                      <div className="bg-gradient3  flex flex-col items-center justify-start p-[7px] rounded-[10px] w-[27%]">
                        <Line className="bg-white-A700 h-0.5 mb-0.5 mt-[7px] w-full" />
                      </div>
                      <Text
                        className="ml-4 text-[17px] text-gray-800"
                        size="txtCeraProRegular17"
                      >
                        9
                      </Text>
                      <div className="h-[26px] ml-[11px] relative w-[27%]">
                        <div className="absolute bg-gradient3  h-[25px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                          size="txtCeraProRegular20WhiteA700"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[77px] text-base text-green-500 text-right"
                      size="txtCeraProBold16Green500"
                    >
                      $1,611.00
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[50px] w-6"
                      src="images/img_iconlycurveddelete.svg"
                      alt="iconlycurveddel"
                    />
                  </div>
                </div>
              </List>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[28%] md:w-full">
                <Text
                  className="text-gray-800 text-sm"
                  size="txtCeraProRegular14Gray800"
                >
                  Coupon Apply
                </Text>
                <div className="flex h-10 md:h-[46px] justify-end mt-1.5 relative w-full">
                  <Text
                    className="mb-[9px] ml-[9px] mt-auto text-gray-500 text-sm"
                    size="txtCeraProRegular14Gray500"
                  >
                    Enter coupon code here...
                  </Text>
                  <div className="absolute border border-green-500 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[230px] rounded-[3px] w-full">
                    <Button
                      className="cursor-pointer font-bold min-w-[102px] rounded-br-[3px] rounded-tr-[3px] text-[15px] text-center"
                      color="green_500"
                      size="sm"
                      variant="fill"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[27px] w-full">
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
                <div className="flex flex-row items-center justify-between mt-[9px] w-full">
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
                <div className="flex flex-row items-start justify-between mt-[15px] w-full">
                  <Text
                    className="mt-0.5 text-[15px] text-gray-800"
                    size="txtCeraProRegular15"
                  >
                    Shiping
                  </Text>
                  <Text
                    className="text-gray-800 text-lg text-right"
                    size="txtCeraProMedium18"
                  >
                    $16.00
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[211px] mt-[5px] text-green-500 text-xs"
                  size="txtCeraProRegular12"
                >
                  View shipping charge
                </Text>
                <div className="flex flex-row items-start justify-between mt-[21px] w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtCeraProBold16"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-green-500 text-lg text-right"
                    size="txtCeraProBold18Green500"
                  >
                    $2,699.00
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[332px] mt-6 rounded-[3px] text-[15px] text-center"
                  color="green_500"
                  size="sm"
                  variant="fill"
                >
                  Proceed To Checkout
                </Button>
                <Text
                  className="md:ml-[0] ml-[104px] mt-[13px] text-[15px] text-green-500"
                  size="txtCeraProRegular15Green500"
                >
                  Continue Shopping
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[1534px] h-[451px] md:h-[691px] max-w-[1200px] mt-[81px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
            <Text
              className="text-[17px] text-green-500"
              size="txtCeraProBold17Green500"
            >
              You may be interested in
            </Text>
            <Line className="bg-green-500_7f h-px mt-2 w-full" />
            <List
              className="sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-[43px] w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[5px] w-full">
                <Img
                  className="h-[243px] md:h-auto mb-0.5 object-cover w-[91%]"
                  src="images/img_013.png"
                  alt="Thirteen"
                />
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-1 w-full">
                <Img
                  className="h-[212px] md:h-auto mb-[19px] mt-4 object-cover w-[212px]"
                  src="images/img_image7.png"
                  alt="imageSeven"
                />
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[3px] w-full">
                <Img
                  className="h-[212px] md:h-auto mb-5 mt-[17px] object-cover w-[212px]"
                  src="images/img_image8.png"
                  alt="imageEight"
                />
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[3px] w-full">
                <Img
                  className="h-[213px] md:h-auto mb-6 mt-3 object-cover w-[213px]"
                  src="images/img_image9.png"
                  alt="imageNine"
                />
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[3px] w-full">
                <Img
                  className="h-[213px] md:h-auto mb-[23px] mt-[13px] object-cover w-[213px]"
                  src="images/img_image10.png"
                  alt="imageTen"
                />
              </div>
            </List>
          </div>
          <div className="absolute bottom-[20%] flex flex-row items-center justify-between left-[0] w-[32%]">
            <Text
              className="text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              Beach Spider Lily
            </Text>
            <Text
              className="text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              Blushing Bromeliad
            </Text>
          </div>
          <div className="absolute bottom-[21%] flex flex-row items-center justify-between right-[29%] w-[30%]">
            <Text
              className="text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              Aluminum Plant
            </Text>
            <Text
              className="text-[15px] text-gray-800"
              size="txtCeraProRegular15"
            >
              <>Bird&#39;s Nest Fern</>
            </Text>
          </div>
          <Text
            className="absolute bottom-[20%] right-[7%] text-[15px] text-gray-800"
            size="txtCeraProRegular15"
          >
            Chinese Evergreen
          </Text>
          <div className="absolute bottom-[0] flex flex-col gap-[58px] justify-start left-[0] w-[86%]">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-base text-green-500"
                size="txtCeraProBold16Green500"
              >
                $129.00
              </Text>
              <Text
                className="text-base text-green-500"
                size="txtCeraProBold16Green500"
              >
                $139.00
              </Text>
              <Text
                className="text-base text-green-500"
                size="txtCeraProBold16Green500"
              >
                $179.00
              </Text>
              <Text
                className="text-base text-green-500"
                size="txtCeraProBold16Green500"
              >
                $99.00
              </Text>
              <Text
                className="text-base text-green-500"
                size="txtCeraProBold16Green500"
              >
                $39.00
              </Text>
            </div>
            <PagerIndicator
              className="flex h-3 md:ml-[0] ml-[571px] w-14"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-green-500 w-3"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 border-green-500 border border-solid w-3"
              selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-start max-w-[1200px] mt-32 mx-auto md:px-5 w-full">
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
                              src="images/img_group18_gray_600_87x68.svg"
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
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants.
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="md:h-[85px] h-[89px] relative w-[90px]">
                            <div className="absolute bg-green-500_21 bottom-[0] h-[74px] left-[0] rounded-[50%] w-[74px]"></div>
                            <Img
                              className="absolute h-[85px] right-[0] top-[0]"
                              src="images/img_group19_gray_600_85x83.svg"
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
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants.
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
                                alt="groupNinetyNine"
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
                                alt="groupNinetyEight"
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
                                alt="groupNinetySeven"
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
                                alt="groupNinetySix"
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
                                alt="groupNinetyFive"
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
                            alt="imageSixteen"
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
    </>
  );
};

export default ProductCartPage;
