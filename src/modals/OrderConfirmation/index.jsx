import React from "react";
import { default as ModalProvider } from "react-modal";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const OrderConfirmationModal = (props) => {
  const tableData = React.useRef([
    { products: "SKU: 1995751877966", qty: "(x 2)", subtotal: "$238.00" },
    { products: "SKU: 19957518757065", qty: "(x 6)", subtotal: "$834.00" },
    { products: "SKU: 1995751877786", qty: "(x 9)", subtotal: "$1,611.00" },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("products", {
        cell: (info) => (
          <div className="flex flex-row gap-[11px] items-center justify-start px-[3px]">
            <Img
              className="h-[70px] md:h-auto object-cover w-[70px]"
              src="images/img_image1.png"
              alt="imageEleven"
            />
            <div className="flex flex-col items-start justify-start">
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
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[303px] pb-0.5 text-base text-gray-800"
            size="txtCeraProMedium16Gray800"
          >
            Products
          </Text>
        ),
      }),
      tableColumnHelper.accessor("qty", {
        cell: (info) => (
          <Text
            className="py-[25px] text-gray-600 text-right text-sm"
            size="txtCeraProRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[103px] pl-[5px] pt-0.5 text-base text-gray-800 text-right"
            size="txtCeraProMedium16Gray800"
          >
            Qty
          </Text>
        ),
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <Text
            className="pl-1.5 py-[23px] text-green-500 text-lg text-right"
            size="txtCeraProBold18Green500"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[88px] pb-0.5 pl-[15px] text-base text-gray-800 text-right"
            size="txtCeraProMedium16Gray800"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_3f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[665px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:h-[154px] h-[156px] justify-end relative w-full">
              <Line className="bg-green-500_33 h-px mt-auto mx-auto w-full" />
              <div className="absolute bg-green-500_0f flex flex-col h-full inset-[0] items-end justify-center m-auto p-[13px] w-full">
                <div className="flex flex-col gap-3 justify-start mt-[3px] w-[70%] md:w-full">
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[69px] w-[83%] md:w-full">
                    <Img
                      className="h-20 mt-3 w-20"
                      src="images/img_thankyou1.svg"
                      alt="thankyouOne"
                    />
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_x.svg"
                      alt="x"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-gray-600"
                    size="txtCeraProRegular16Gray600"
                  >
                    Your order has been received
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3 w-[86%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtCeraProRegular14"
                >
                  Order Number
                </Text>
                <Text
                  className="text-[15px] text-gray-600"
                  size="txtCeraProBold15Gray600"
                >
                  19586687
                </Text>
              </div>
              <Line className="bg-green-500_33 h-[31px] sm:h-px sm:ml-[0] ml-[22px] sm:mt-0 my-1 sm:w-full w-px" />
              <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[22px]">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtCeraProRegular14"
                >
                  Date
                </Text>
                <Text
                  className="mt-0.5 text-[15px] text-gray-600"
                  size="txtCeraProBold15Gray600"
                >
                  15 Sep, 2021
                </Text>
              </div>
              <Line className="bg-green-500_33 h-[31px] sm:h-px sm:ml-[0] ml-[27px] sm:mt-0 my-1 sm:w-full w-px" />
              <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[18px]">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtCeraProRegular14"
                >
                  Total
                </Text>
                <Text
                  className="mt-0.5 text-[15px] text-gray-600"
                  size="txtCeraProBold15Gray600"
                >
                  2,699.00
                </Text>
              </div>
              <Line className="bg-green-500_33 h-[31px] sm:h-px ml-6 sm:ml-[0] sm:mt-0 my-1 sm:w-full w-px" />
              <div className="flex flex-col items-start justify-start ml-5 sm:ml-[0]">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtCeraProRegular14"
                >
                  Payment Method
                </Text>
                <Text
                  className="text-[15px] text-gray-600"
                  size="txtCeraProBold15Gray600"
                >
                  Cash on delivery
                </Text>
              </div>
            </div>
            <Line className="bg-green-500_33 h-px mt-3 w-full" />
            <Text
              className="mt-[15px] text-[15px] text-gray-800"
              size="txtCeraProBold15Gray800"
            >
              Order Details
            </Text>
            <div className="overflow-auto w-[86%]">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={"bg-gray-50"}
                headerClass=""
              />
            </div>
            <Line className="bg-green-500_7f h-px mt-[38px] w-[86%]" />
            <div className="flex flex-row items-start justify-between mt-4 w-[56%] md:w-full">
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
            <div className="flex flex-row items-start justify-between mt-[17px] w-[56%] md:w-full">
              <Text className="text-base text-gray-800" size="txtCeraProBold16">
                Total
              </Text>
              <Text
                className="text-green-500 text-lg text-right"
                size="txtCeraProBold18Green500"
              >
                $2,699.00
              </Text>
            </div>
            <Line className="bg-green-500_7f h-px mt-4 w-[86%]" />
            <Text
              className="leading-[22.00px] mt-[17px] text-center text-gray-600 text-sm w-[84%] sm:w-full"
              size="txtCeraProRegular14"
            >
              Your order is currently being processed. You will receive an order
              confirmation email shortly with the expected delivery date for
              your items.
            </Text>
            <Button
              className="cursor-pointer font-bold min-w-[162px] mt-[49px] rounded-[5px] text-base text-center"
              shape="round"
              color="green_500"
              size="md"
              variant="fill"
            >
              Track your order
            </Button>
            <div className="bg-green-500 h-2.5 mt-12 w-full"></div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default OrderConfirmationModal;
