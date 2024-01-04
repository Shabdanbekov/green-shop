import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import Header from "components/Header";

const ProductViewPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cerapro items-center justify-end mx-auto p-[15px] w-full">
        <div className="flex flex-col items-start justify-start max-w-[1200px] mt-[9px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center w-full" />
          <Text
            className="mt-8 text-[15px] text-gray-800"
            size="txtCeraProRegular15"
          >
            Home / Shop
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between mt-8 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start w-[18%] sm:w-full">
                  <div className="bg-gray-50 flex flex-col h-[100px] items-center justify-start rounded-md w-[100px]">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-[100px]"
                      src="images/img_product20320x320.png"
                      alt="product20320xThirtyTwo"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col h-[100px] items-center justify-start rounded-md w-[100px]">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-[100px]"
                      src="images/img_image1.png"
                      alt="imageEleven"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col h-[100px] items-center justify-start rounded-md w-[100px]">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-[100px]"
                      src="images/img_product20320x320.png"
                      alt="product20320xThirtyTwo_One"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col h-[100px] items-center justify-start rounded-md w-[100px]">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-[100px]"
                      src="images/img_image1.png"
                      alt="imageTwelve"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 sm:h-[406px] md:h-[408px] h-[444px] sm:mt-0 my-0.5 p-[13px] relative rounded-md w-[444px] sm:w-full">
                  <Img
                    className="absolute h-[404px] inset-[0] justify-center m-auto object-cover w-[404px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <Button
                    className="absolute flex h-[30px] items-center justify-center right-[3%] top-[3%] w-[30px]"
                    shape="circle"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start mb-0.5 w-[48%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800"
                  size="txtCeraProBold28"
                >
                  Barberton Daisy
                </Text>
                <div className="flex flex-row sm:gap-10 items-end justify-between mt-[3px] w-full">
                  <Text
                    className="text-[22px] text-green-500 sm:text-lg md:text-xl"
                    size="txtCeraProBold22"
                  >
                    $119.00
                  </Text>
                  <div className="flex flex-row items-center justify-evenly mb-0.5 mt-1.5">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_iconlyboldstar.svg"
                      alt="iconlyboldstar"
                    />
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_iconlyboldstar.svg"
                      alt="iconlyboldstar_One"
                    />
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_iconlyboldstar.svg"
                      alt="iconlyboldstar_Two"
                    />
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_iconlyboldstar.svg"
                      alt="iconlyboldstar_Three"
                    />
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_iconlyboldstar_gray_400_01.svg"
                      alt="iconlyboldstar_Four"
                    />
                    <Text
                      className="text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      19 Customer Review
                    </Text>
                  </div>
                </div>
                <Line className="bg-green-500_7f h-px mt-[7px] w-full" />
                <Text
                  className="mt-[13px] text-[15px] text-gray-800"
                  size="txtCeraProMedium15"
                >
                  Short Description:
                </Text>
                <Text
                  className="leading-[24.00px] mt-[7px] text-gray-600 text-sm w-full"
                  size="txtCeraProRegular14"
                >
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground.{" "}
                </Text>
                <Text
                  className="mt-4 text-[15px] text-gray-800"
                  size="txtCeraProMedium15"
                >
                  Size:
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-1/4 md:w-full">
                  <Input
                    name="groupNinety"
                    placeholder="S"
                    className="font-bold p-0 placeholder:text-green-500 text-left text-lg w-full"
                    wrapClassName="h-7 w-7"
                    shape="circle"
                    color="green_500"
                    size="xs"
                  ></Input>
                  <Text
                    className="border border-gray-200 border-solid flex h-7 items-center justify-center rounded-[50%] text-center text-gray-600 text-sm w-7"
                    size="txtCeraProMedium14Gray600"
                  >
                    M
                  </Text>
                  <Text
                    className="border border-gray-200 border-solid flex h-7 items-center justify-center rounded-[50%] text-center text-gray-600 text-sm w-7"
                    size="txtCeraProMedium14Gray600"
                  >
                    L
                  </Text>
                  <Text
                    className="border border-gray-200 border-solid flex h-7 items-center justify-center rounded-[50%] text-center text-gray-600 text-sm w-7"
                    size="txtCeraProMedium14Gray600"
                  >
                    XL
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[23px] w-[82%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-[26%] sm:w-full">
                    <div className="bg-gradient3  flex flex-col items-center justify-end p-2.5 rounded-[16px]">
                      <Line className="bg-white-A700 h-0.5 mb-[5px] mt-[11px] w-[93%]" />
                    </div>
                    <Text
                      className="mt-[7px] text-gray-800 text-xl"
                      size="txtCeraProRegular20"
                    >
                      1
                    </Text>
                    <Text
                      className="bg-gradient3  px-2 rounded-[16px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCeraProRegular28"
                    >
                      +
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[130px] sm:ml-[0] ml-[26px] text-center text-sm uppercase"
                    shape="round"
                    color="green_500"
                    size="sm"
                    variant="fill"
                  >
                    Buy NOW
                  </Button>
                  <Button
                    className="cursor-pointer font-bold min-w-[130px] ml-2.5 sm:ml-[0] text-center text-sm uppercase"
                    shape="round"
                    color="green_500"
                    size="sm"
                    variant="outline"
                  >
                    Add to cart
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center ml-2.5 sm:ml-[0] w-10"
                    shape="round"
                    color="green_500"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-5"
                      src="images/img_heart1_green_500.svg"
                      alt="heartOne"
                    />
                  </Button>
                </div>
                <Text
                  className="mt-[22px] text-[15px] text-gray-600"
                  size="txtCeraProRegular15Gray600"
                >
                  SKU: 1995751877966
                </Text>
                <Text
                  className="mt-[7px] text-[15px] text-gray-600"
                  size="txtCeraProRegular15Gray600"
                >
                  Categories: Potter Plants
                </Text>
                <Text
                  className="mt-2 text-[15px] text-gray-600"
                  size="txtCeraProRegular15Gray600"
                >
                  Tags: Home, Garden, Plants
                </Text>
                <div className="flex flex-row items-start justify-start mt-3.5 w-[47%] md:w-full">
                  <Text
                    className="text-[15px] text-gray-800"
                    size="txtCeraProMedium15"
                  >
                    Share this products:
                  </Text>
                  <Img
                    className="h-[15px] ml-4 mt-0.5"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-3 ml-5 mt-1"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-3.5 ml-5 mt-0.5 w-[15px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Img
                    className="h-[18px] ml-4 mt-0.5 w-[18px]"
                    src="images/img_message.svg"
                    alt="message"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[88px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[30px] items-center justify-start w-[24%] md:w-full">
                <Text
                  className="text-[17px] text-green-500"
                  size="txtCeraProBold17Green500"
                >
                  Product Description
                </Text>
                <Text
                  className="text-[17px] text-gray-800"
                  size="txtCeraProRegular17"
                >
                  Reviews (19)
                </Text>
              </div>
              <div className="flex flex-col mt-2 relative w-full">
                <Line className="bg-green-500_7f h-px mx-auto w-full" />
                <Line className="bg-green-500 h-[3px] mb-auto mt-[-0.3px] w-[14%] z-[1]" />
              </div>
              <Text
                className="leading-[24.00px] mt-[15px] text-gray-600 text-sm"
                size="txtCeraProRegular14"
              >
                <>
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam fringilla augue nec est tristique auctor.
                  Donec non est at libero vulputate rutrum. Morbi ornare lectus
                  quis justo gravida semper. Nulla tellus mi, vulputate
                  adipiscing cursus eu, suscipit id nulla.
                  <br />
                  <br />
                  Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                  feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                  tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                  eget sagittis vulputate, sapien libero hendrerit est, sed
                  commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tempor, lorem et placerat
                  vestibulum, metus nisi posuere nisl, in accumsan elit odio
                  quis mi. Cras neque metus, consequat et blandit et, luctus a
                  nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                  euismod eget. The ceramic cylinder planters come with a wooden
                  stand to help elevate your plants off the ground.{" "}
                </>
              </Text>
              <Text
                className="mt-[19px] text-gray-800 text-sm"
                size="txtCeraProBold14"
              >
                Living Room:
              </Text>
              <Text
                className="leading-[24.00px] mt-0.5 text-gray-600 text-sm w-full"
                size="txtCeraProRegular14"
              >
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
              <Text
                className="mt-[19px] text-gray-800 text-sm"
                size="txtCeraProBold14"
              >
                Dining Room:
              </Text>
              <Text
                className="leading-[24.00px] mt-0.5 text-gray-600 text-sm w-full"
                size="txtCeraProRegular14"
              >
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every room
                of your home with houseplants and their restorative qualities
                will improve your life.
              </Text>
              <Text
                className="mt-[17px] text-gray-800 text-sm"
                size="txtCeraProBold14"
              >
                Office:
              </Text>
              <Text
                className="leading-[24.00px] mt-1 text-gray-600 text-sm w-full"
                size="txtCeraProRegular14"
              >
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[120px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-[17px] text-green-500"
                size="txtCeraProBold17Green500"
              >
                Releted Products
              </Text>
              <Line className="bg-green-500_7f h-px mt-2.5 w-full" />
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
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[9px] w-[93%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[34%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
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
                  <div className="flex flex-row items-center justify-between w-4/5 md:w-full">
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
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[116px] w-[32%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
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
                  <div className="flex flex-row items-center justify-between w-[84%] md:w-full">
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
                  </div>
                  <PagerIndicator
                    className="flex h-3 md:ml-[0] ml-[78px] mt-[58px] w-14"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-green-500 w-3"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 border-green-500 border border-solid w-3"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[133px]">
                  <Text
                    className="text-[15px] text-gray-800"
                    size="txtCeraProRegular15"
                  >
                    Chinese Evergreen
                  </Text>
                  <Text
                    className="text-base text-green-500"
                    size="txtCeraProBold16Green500"
                  >
                    $39.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start mt-32 w-full">
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
                                src="images/img_group18_gray_600.svg"
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
                                src="images/img_group19_gray_600.svg"
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
                                  alt="groupSeventyThree"
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
                                  alt="groupSeventyTwo"
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
                                  alt="groupSeventyOne"
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
                                  alt="groupSeventy"
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
                                  alt="groupSixtyNine"
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
      </div>
    </>
  );
};

export default ProductViewPage;
