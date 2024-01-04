import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

const Home1Page = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cerapro items-center justify-end mx-auto p-[18px] w-full">
        <div className="flex flex-col items-start justify-start max-w-[1240px] mt-1.5 mx-auto md:px-5 w-full">
          <div className="md:h-[518px] h-[535px] md:ml-[0] ml-[29px] relative w-[98%] md:w-full">
            <div className="absolute h-14 sm:h-[109px] md:h-[49px] inset-x-[0] mx-auto top-[0] w-full">
              <Img className="h-[34px]" src="images/img_logo.svg" alt="logo" />
              <div className="absolute h-14 sm:h-[109px] md:h-[49px] inset-[0] justify-center m-auto w-full">
                <Line className="absolute bg-green-500_7f bottom-[4%] h-px inset-x-[0] mx-auto w-full" />
                <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 items-start justify-between right-[16%] w-[53%]">
                  <div className="flex flex-row items-start justify-between w-[56%] sm:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProBold16"
                      >
                        Home
                      </Text>
                      <Line className="bg-green-500 h-[3px] w-full" />
                    </div>
                    <Text
                      className="text-base text-gray-800"
                      size="txtCeraProRegular16"
                    >
                      Shop
                    </Text>
                    <Text
                      className="text-base text-gray-800"
                      size="txtCeraProRegular16"
                    >
                      Plant Care
                    </Text>
                    <Text
                      className="text-base text-gray-800"
                      size="txtCeraProRegular16"
                    >
                      Blogs
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
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
                  <div className="bg-green-500 flex flex-row items-center justify-center p-[5px] rounded-md w-[63%]">
                    <Img
                      className="h-5 ml-[11px] w-5"
                      src="images/img_iconlycurvedlogout.svg"
                      alt="iconlycurvedlog"
                    />
                    <a
                      href="javascript:"
                      className="ml-1 mr-[11px] mt-0.5 text-base text-white-A700"
                    >
                      <Text size="txtCeraProMedium16">Login</Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[518px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bottom-[4%] h-[450px] inset-x-[0] mx-auto w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="m-auto w-full"
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-gradient  flex flex-col items-start justify-start mx-2.5 p-10 sm:px-5">
                        <div className="flex flex-col items-start justify-start mb-[45px] mt-[26px] w-1/2 md:w-full">
                          <Text
                            className="md:ml-[0] ml-[3px] text-gray-800 text-sm tracking-[1.40px] uppercase"
                            size="txtCeraProMedium14"
                          >
                            Welcome to GreenShop
                          </Text>
                          <Text
                            className="leading-[70.00px] mt-1.5 md:text-5xl text-[70px] text-gray-800 uppercase"
                            size="txtCeraProBlack70"
                          >
                            <span className="text-gray-800 font-cerapro text-left font-black">
                              <>
                                Let’s Make a<br />
                                Better
                              </>
                            </span>
                            <span className="text-green-500 font-cerapro text-left font-black">
                              {" "}
                              Planet
                            </span>
                          </Text>
                          <Text
                            className="leading-[24.00px] md:ml-[0] ml-[3px] mt-[5px] text-gray-600 text-sm w-full"
                            size="txtCeraProRegular14"
                          >
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[140px] mt-[41px] text-base text-center uppercase"
                            shape="round"
                            color="green_500"
                            size="sm"
                            variant="fill"
                          >
                            SHOP NOW
                          </Button>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-green-500 w-2 relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2 bg-green-500_4c w-2 relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[4%] flex h-2 inset-x-[0] justify-center mx-auto w-10"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-green-500 w-2 relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-green-500_4c w-2 relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block mx-[4.00px]"
                  unselectedWrapperCss="inline-block mx-[4.00px]"
                />
              </div>
              <div className="absolute h-[518px] inset-y-[0] my-auto right-[0] w-[518px] sm:w-full">
                <Img
                  className="h-[518px] m-auto object-cover w-[518px]"
                  src="images/img_011.png"
                  alt="Eleven"
                />
                <Img
                  className="absolute bottom-[7%] h-[135px] left-[11%] object-cover w-[135px]"
                  src="images/img_011.png"
                  alt="Twelve"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between mt-[23px] w-full">
            <div className="h-[1244px] md:h-[768px] relative w-[31%] md:w-full">
              <div className="absolute bg-gray-50 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] top-[0] w-[84%]">
                <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] w-[94%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCeraProBold18"
                    >
                      Categories
                    </Text>
                    <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] mt-0.5 w-[96%] md:w-full">
                      <Text
                        className="leading-[40.00px] text-[15px] text-gray-800"
                        size="txtCeraProRegular15"
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
                          Big Plants
                          <br />
                          Succulents
                          <br />
                          Trerrariums
                          <br />
                          Gardening
                          <br />
                          Accessories
                        </>
                      </Text>
                      <Text
                        className="leading-[40.00px] text-[15px] text-gray-800 text-right"
                        size="txtCeraProRegular15"
                      >
                        <>
                          (33)
                          <br />
                          (12)
                          <br />
                          (65)
                          <br />
                          (39)
                          <br />
                          (23)
                          <br />
                          (17)
                          <br />
                          (19)
                          <br />
                          (13)
                          <br />
                          (18)
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-start ml-1.5 md:ml-[0] mt-[33px] w-[79%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtCeraProBold18"
                  >
                    Price Range
                  </Text>
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-3 md:ml-[0] w-[95%] md:w-full">
                    <div className="h-[15px] relative w-full">
                      <div className="absolute bottom-[13%] h-1 inset-x-[0] mx-auto overflow-hidden w-[98%]">
                        <div className="w-full h-full absolute bg-green_500_33"></div>
                        <div
                          className="h-full absolute bg-green_500"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                      <div className="absolute bg-green-500 h-[15px] inset-y-[0] left-[0] my-auto outline outline-[3px] outline-white-A700 rounded-[7px] w-[15px]"></div>
                      <div className="absolute bg-green-500 h-[15px] inset-y-[0] my-auto outline outline-[3px] outline-white-A700 right-[21%] rounded-[7px] w-[15px]"></div>
                    </div>
                    <Text
                      className="text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      <span className="text-gray-800 font-cerapro text-left font-normal">
                        Price:{" "}
                      </span>
                      <span className="text-green-500 font-cerapro text-left font-bold">
                        $39 - $1230
                      </span>
                    </Text>
                    <Button
                      className="cursor-pointer font-bold min-w-[90px] text-base text-center"
                      shape="round"
                      color="green_500"
                      size="sm"
                      variant="fill"
                    >
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[7px] ml-1.5 md:ml-[0] mt-[41px] w-[94%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCeraProBold18"
                    >
                      Size
                    </Text>
                    <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] mt-1 w-[96%] md:w-full">
                      <Text
                        className="leading-[40.00px] text-[15px] text-gray-800"
                        size="txtCeraProRegular15"
                      >
                        <>
                          Small
                          <br />
                          Medium
                          <br />
                          Large
                        </>
                      </Text>
                      <Text
                        className="leading-[40.00px] text-[15px] text-gray-800 text-right"
                        size="txtCeraProRegular15"
                      >
                        <>
                          (119)
                          <br />
                          (86)
                          <br />
                          (78)
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[470px] h-[484px] inset-x-[0] mx-auto w-full">
                <div className="absolute md:h-[470px] h-[484px] inset-[0] justify-center m-auto w-[84%]">
                  <div className="absolute bg-gradient1  h-[470px] inset-[0] justify-center m-auto w-full"></div>
                  <Text
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[65px] text-green-500 top-[0] w-max"
                    size="txtHangingLetters65"
                  >
                    Super Sale
                  </Text>
                  <Text
                    className="absolute inset-x-[0] mx-auto sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-800 top-[22%] w-max"
                    size="txtCeraProBold23"
                  >
                    UP TO 75% OFF
                  </Text>
                </div>
                <div className="absolute bottom-[0] h-[370px] inset-x-[0] mx-auto w-[370px] sm:w-full">
                  <Img
                    className="h-[370px] m-auto object-cover w-[370px]"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[179px] justify-start left-[12%] top-[1%] w-[10%]">
                    <div className="bg-gradient2  h-[15px] md:ml-[0] ml-[22px] rounded-[7px] w-[15px]"></div>
                    <div className="border-2 border-solid green_500_6c_green_500_6c_01_border h-[22px] mr-[15px] rounded-[7px] w-[22px]"></div>
                  </div>
                  <div className="absolute bg-gradient2  bottom-[22%] h-[45px] right-[13%] rounded-[22px] w-[45px]"></div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[69%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-green-500"
                      size="txtCeraProBold15"
                    >
                      All Plants
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[37px] text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      New Arrivals
                    </Text>
                    <Text
                      className="ml-10 md:ml-[0] text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      Sale
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[385px] text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      Short by:
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] text-[15px] text-gray-800"
                      size="txtCeraProRegular15"
                    >
                      Default sorting
                    </Text>
                    <div className="flex flex-col h-4 items-center justify-start md:ml-[0] ml-[5px] md:mt-0 mt-1 w-4">
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <Line className="bg-green-500 h-0.5 w-[8%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-end p-1 w-full">
                      <Img
                        className="h-[250px] md:h-auto mb-[15px] mt-[27px] object-cover w-[250px]"
                        src="images/img_image1.png"
                        alt="imageOne"
                      />
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col gap-6 items-center justify-start pb-[7px] w-full">
                      <Line className="bg-green-500 h-px w-full" />
                      <div className="flex flex-col relative w-[97%]">
                        <Img
                          className="h-[250px] mx-auto object-cover w-[250px]"
                          src="images/img_product21320x320.png"
                          alt="product21320xThirtyTwo"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-start mt-[-17px] mx-auto p-1.5 w-1/2 z-[1]"
                          style={{
                            backgroundImage: "url('images/img_group44.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-between w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_vector_green_500.svg"
                              alt="vector_Two"
                            />
                            <Img
                              className="h-5 w-5"
                              src="images/img_heart1.svg"
                              alt="heartOne"
                            />
                            <Img
                              className="h-5 w-[19px]"
                              src="images/img_vector.svg"
                              alt="vector_Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 md:h-[250px] h-[300px] pr-1 py-1 relative w-full">
                      <Img
                        className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-[250px]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                      <Button
                        className="absolute cursor-pointer font-medium left-[0] min-w-[80px] text-base text-center top-[5%]"
                        shape="square"
                        color="green_500"
                        size="xs"
                        variant="fill"
                      >
                        13% OFF
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2 w-[87%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[61%] sm:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-800"
                          size="txtCeraProRegular16"
                        >
                          Barberton Daisy
                        </Text>
                        <Text
                          className="text-base text-gray-800"
                          size="txtCeraProRegular16"
                        >
                          Angel Wing Begonia
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[81%] md:w-full">
                        <Text
                          className="text-green-500 text-lg"
                          size="txtCeraProBold18Green500"
                        >
                          $119.00
                        </Text>
                        <Text
                          className="text-green-500 text-lg"
                          size="txtCeraProBold18Green500"
                        >
                          $169.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[21%] sm:w-full">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProRegular16"
                      >
                        African Violet
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Text
                          className="text-green-500 text-lg"
                          size="txtCeraProBold18Green500"
                        >
                          $199.00
                        </Text>
                        <div className="h-[23px] relative w-[46%]">
                          <Text
                            className="m-auto text-gray-500 text-lg"
                            size="txtCeraProRegular18"
                          >
                            $229.00
                          </Text>
                          <Line className="absolute bg-gray-400 bottom-[39%] h-px inset-x-[0] mx-auto w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[66px] w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-1.5 w-full">
                      <Img
                        className="h-[286px] md:h-auto mb-0.5 object-cover w-[92%]"
                        src="images/img_013.png"
                        alt="Thirteen"
                      />
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-1 w-full">
                      <Img
                        className="h-[250px] md:h-auto mb-[23px] mt-[19px] object-cover w-[250px]"
                        src="images/img_image7.png"
                        alt="imageSeven"
                      />
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-1 w-full">
                      <Img
                        className="h-[250px] md:h-auto mb-[23px] mt-[19px] object-cover w-[250px]"
                        src="images/img_image8.png"
                        alt="imageEight"
                      />
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-2 w-[83%] md:w-full">
                    <div className="md:h-[22px] h-[43px] relative w-[19%] md:w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-base text-gray-800 top-[0] w-max"
                        size="txtCeraProRegular16"
                      >
                        Beach Spider Lily
                      </Text>
                      <Text
                        className="absolute bottom-[0] left-[0] text-green-500 text-lg"
                        size="txtCeraProBold18Green500"
                      >
                        $129.00
                      </Text>
                    </div>
                    <div className="md:h-[22px] h-[43px] md:ml-[0] ml-[164px] relative w-[21%] md:w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-base text-gray-800 top-[0] w-max"
                        size="txtCeraProRegular16"
                      >
                        Blushing Bromeliad
                      </Text>
                      <Text
                        className="absolute bottom-[0] left-[0] text-green-500 text-lg"
                        size="txtCeraProBold18Green500"
                      >
                        $139.00
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[149px]">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProRegular16"
                      >
                        Aluminum Plant
                      </Text>
                      <Text
                        className="text-green-500 text-lg"
                        size="txtCeraProBold18Green500"
                      >
                        $179.00
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[66px] w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-1 w-full">
                      <Img
                        className="h-[250px] md:h-auto mb-7 mt-3.5 object-cover w-[250px]"
                        src="images/img_image9.png"
                        alt="imageNine"
                      />
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-end p-1 w-full">
                      <Img
                        className="h-[250px] md:h-auto mb-[18px] mt-6 object-cover w-[250px]"
                        src="images/img_product20320x320.png"
                        alt="product20320xThirtyTwo"
                      />
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-1 w-full">
                      <Img
                        className="h-[250px] md:h-auto mb-[27px] mt-[15px] object-cover w-[250px]"
                        src="images/img_image10.png"
                        alt="imageTen"
                      />
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-2 w-[86%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProRegular16"
                      >
                        <>Bird&#39;s Nest Fern</>
                      </Text>
                      <Text
                        className="text-green-500 text-lg"
                        size="txtCeraProBold18Green500"
                      >
                        $99.00
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[175px]">
                      <Text
                        className="text-base text-gray-800"
                        size="txtCeraProRegular16"
                      >
                        Broadleaf Lady Palm
                      </Text>
                      <Text
                        className="text-green-500 text-lg"
                        size="txtCeraProBold18Green500"
                      >
                        $59.00
                      </Text>
                    </div>
                    <div className="md:h-[22px] h-[43px] md:ml-[0] ml-[141px] relative w-1/5 md:w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-base text-gray-800 top-[0] w-max"
                        size="txtCeraProRegular16"
                      >
                        Chinese Evergreen
                      </Text>
                      <Text
                        className="absolute bottom-[0] left-[0] text-green-500 text-lg"
                        size="txtCeraProBold18Green500"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[1014px] mt-[86px] w-[18%] md:w-full">
            <Button
              className="cursor-pointer font-bold h-[35px] rounded text-center text-lg w-[35px]"
              shape="round"
              color="green_500"
              size="xs"
              variant="fill"
            >
              1
            </Button>
            <Button
              className="cursor-pointer font-light h-[35px] rounded text-center text-lg w-[35px]"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            >
              2
            </Button>
            <Button
              className="cursor-pointer font-light h-[35px] rounded text-center text-lg w-[35px]"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            >
              3
            </Button>
            <Button
              className="cursor-pointer font-light h-[35px] rounded text-center text-lg w-[35px]"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            >
              4
            </Button>
            <Button
              className="flex h-[35px] items-center justify-center rounded w-[35px]"
              shape="round"
              color="gray_300"
              size="sm"
              variant="outline"
            >
              <Img
                className="h-[18px]"
                src="images/img_group21.svg"
                alt="groupTwentyOne"
              />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] mt-[94px] w-[98%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-7 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[292px] h-[302px] sm:ml-[0] relative w-full">
                <div className="md:h-[292px] h-[302px] m-auto w-full">
                  <div className="absolute bg-gray-50 bottom-[0] flex flex-col inset-x-[0] items-end justify-center mx-auto p-[30px] sm:px-5 w-full">
                    <Text
                      className="leading-[24.00px] mt-[7px] text-gray-800 text-lg text-right uppercase"
                      size="txtCeraProBlack18"
                    >
                      <>
                        Summer cactus
                        <br />& succulents
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-gray-600 text-right text-sm w-[56%] sm:w-full"
                      size="txtCeraProRegular14"
                    >
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants
                    </Text>
                    <div className="bg-green-500 flex flex-col items-center justify-end mb-4 mt-[22px] p-2.5 rounded-md w-[27%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[71%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtCeraProMedium14WhiteA700"
                          >
                            Find More
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_iconlycurvedarrow.svg"
                            alt="iconlycurvedarr"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[292px] inset-y-[0] left-[0] my-auto object-cover w-[292px]"
                    src="images/img_image7.png"
                    alt="imageFourteen"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[250px] inset-x-[0] mx-auto"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup"
                />
              </div>
              <div className="sm:h-[287px] md:h-[294px] h-[295px] sm:ml-[0] sm:mt-0 mt-[7px] relative w-full">
                <div className="absolute md:h-[287px] h-[295px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-gray-50 bottom-[0] flex flex-col md:gap-10 gap-[79px] inset-x-[0] items-end justify-start mx-auto p-[35px] sm:px-5 w-full">
                    <Text
                      className="leading-[24.00px] mt-0.5 text-gray-800 text-lg text-right uppercase"
                      size="txtCeraProBlack18"
                    >
                      <>
                        Styling Trends
                        <br />& much more
                      </>
                    </Text>
                    <div className="bg-green-500 flex flex-col items-center justify-end mb-[11px] p-2.5 rounded-md w-[28%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[71%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtCeraProMedium14WhiteA700"
                          >
                            Find More
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_iconlycurvedarrow.svg"
                            alt="iconlycurvedarr"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[287px] inset-y-[0] left-[0] my-auto object-cover w-[287px]"
                    src="images/img_image2.png"
                    alt="imageFifteen"
                  />
                </div>
                <Text
                  className="absolute bottom-[37%] leading-[24.00px] right-[7%] text-gray-600 text-right text-sm w-1/2 sm:w-full"
                  size="txtCeraProRegular14"
                >
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </Text>
                <Img
                  className="absolute bottom-[0] h-[250px] inset-x-[0] mx-auto"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup"
                />
              </div>
            </List>
            <div className="flex flex-col items-center justify-start mt-[127px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-800"
                  size="txtCeraProBold30"
                >
                  Our Blog Posts
                </Text>
                <Text
                  className="mt-1.5 text-center text-gray-600 text-sm"
                  size="txtCeraProRegular14"
                >
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants.{" "}
                </Text>
                <List
                  className="sm:flex-col flex-row gap-11 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-8 w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[359px] h-[362px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gray-400_01 h-[195px] w-full"></div>
                        <div className="bg-gray-50 flex flex-col items-center justify-start p-2 w-full">
                          <div className="flex flex-col items-center justify-start mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-green-500 text-sm"
                                size="txtCeraProMedium14Green500"
                              >
                                September 12 I Read in 6 minutes
                              </Text>
                              <Text
                                className="leading-[26.00px] mt-0.5 text-gray-800 text-xl"
                                size="txtCeraProBold20"
                              >
                                <>
                                  Cactus & Succulent <br />
                                  Care Tips
                                </>
                              </Text>
                              <Text
                                className="leading-[22.00px] mt-1 text-gray-600 text-sm w-full"
                                size="txtCeraProRegular14"
                              >
                                Cacti are succulents are easy care plants for
                                any home or patio.{" "}
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-1.5 w-[37%] md:w-full">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtCeraProMedium14"
                                >
                                  Read More
                                </Text>
                                <Img
                                  className="h-4 ml-[3px] mt-[3px] w-4"
                                  src="images/img_iconlylightoutlinearrow.svg"
                                  alt="iconlylightoutl"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[195px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                      src="images/img_01.png"
                      alt="One"
                    />
                  </div>
                  <div className="md:h-[359px] h-[362px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gray-400_01 h-[195px] w-full"></div>
                        <div className="bg-gray-50 flex flex-col items-center justify-start p-2 w-full">
                          <div className="flex flex-col items-center justify-start mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-green-500 text-sm"
                                size="txtCeraProMedium14Green500"
                              >
                                September 13 I Read in 2 minutes
                              </Text>
                              <Text
                                className="leading-[26.00px] mt-0.5 text-gray-800 text-xl"
                                size="txtCeraProBold20"
                              >
                                <>
                                  Top 10 Succulents for
                                  <br />
                                  Your Home
                                </>
                              </Text>
                              <Text
                                className="leading-[22.00px] mt-1 text-gray-600 text-sm w-full"
                                size="txtCeraProRegular14"
                              >
                                Best in hanging baskets. Prefers medium to high
                                light.
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-1.5 w-[37%] md:w-full">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtCeraProMedium14"
                                >
                                  Read More
                                </Text>
                                <Img
                                  className="h-4 ml-[3px] mt-[3px] w-4"
                                  src="images/img_iconlylightoutlinearrow.svg"
                                  alt="iconlylightoutl"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[195px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                      src="images/img_02.png"
                      alt="Two"
                    />
                  </div>
                  <div className="md:h-[359px] h-[362px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gray-400_01 h-[195px] w-full"></div>
                        <div className="bg-gray-50 flex flex-col items-center justify-start p-2 w-full">
                          <div className="flex flex-col items-center justify-start mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-green-500 text-sm"
                                size="txtCeraProMedium14Green500"
                              >
                                September 15 I Read in 3 minutes
                              </Text>
                              <Text
                                className="leading-[26.00px] mt-0.5 text-gray-800 text-xl"
                                size="txtCeraProBold20"
                              >
                                <>
                                  Cacti & Succulent <br />
                                  Care Tips
                                </>
                              </Text>
                              <Text
                                className="leading-[22.00px] mt-1 text-gray-600 text-sm w-full"
                                size="txtCeraProRegular14"
                              >
                                Cacti and succulents thrive in containers and
                                because most are..
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-1.5 w-[37%] md:w-full">
                                <Text
                                  className="text-green-500 text-sm"
                                  size="txtCeraProMedium14Green500"
                                >
                                  Read More
                                </Text>
                                <Img
                                  className="h-4 ml-[3px] mt-[3px] w-4"
                                  src="images/img_iconlylightoutlinearrow_green_500.svg"
                                  alt="iconlylightoutl"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[195px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                      src="images/img_03.png"
                      alt="Three"
                    />
                  </div>
                  <div className="md:h-[359px] h-[362px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gray-400_01 h-[195px] w-full"></div>
                        <div className="bg-gray-50 flex flex-col items-center justify-start p-2 w-full">
                          <div className="flex flex-col items-center justify-start mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-green-500 text-sm"
                                size="txtCeraProMedium14Green500"
                              >
                                September 15 I Read in 2 minutes
                              </Text>
                              <Text
                                className="capitalize leading-[26.00px] mt-0.5 text-gray-800 text-xl"
                                size="txtCeraProBold20"
                              >
                                <>
                                  Best Houseplants <br />
                                  Room by Room
                                </>
                              </Text>
                              <Text
                                className="leading-[22.00px] mt-1 text-gray-600 text-sm w-full"
                                size="txtCeraProRegular14"
                              >
                                The benefits of houseplants are endless. In
                                addition to..
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-1.5 w-[37%] md:w-full">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtCeraProMedium14"
                                >
                                  Read More
                                </Text>
                                <Img
                                  className="h-4 ml-[3px] mt-[3px] w-4"
                                  src="images/img_iconlylightoutlinearrow.svg"
                                  alt="iconlylightoutl"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[195px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                      src="images/img_04.png"
                      alt="Four"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start mt-[100px] w-full">
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
                              We are an online plant shop offering a wide range
                              of cheap and trendy plants.
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
                                  src="images/img_group18.svg"
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
                                We are an online plant shop offering a wide
                                range of cheap and trendy plants.
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="md:h-[85px] h-[89px] relative w-[90px]">
                                <div className="absolute bg-green-500_21 bottom-[0] h-[74px] left-[0] rounded-[50%] w-[74px]"></div>
                                <Img
                                  className="absolute h-[85px] right-[0] top-[0]"
                                  src="images/img_group19.svg"
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
                                We are an online plant shop offering a wide
                                range of cheap and trendy plants.
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
                              We usually post offers and challenges in
                              newsletter. We’re your online houseplant
                              destination. We offer a wide range of houseplants
                              and accessories shipped directly from our
                              (green)house to yours!{" "}
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
                                    alt="groupThirtySix"
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
                                    alt="groupThirtyFive"
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
                                    alt="groupThirtyFour"
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
                                    alt="groupThirtyThree"
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
                                    alt="groupThirtyTwo"
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
      </div>
    </>
  );
};

export default Home1Page;
