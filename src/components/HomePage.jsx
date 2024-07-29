import React, { useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import {
  BsPersonDown,
  BsFillQuestionCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { IoCheckmarkCircleOutline, IoReload } from "react-icons/io5";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineFileDownload,
} from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import "../App.css";
const HomePage = () => {
  // some dummy data
  const data = [
    {
      createdAt: "Fri9Feb,2:32PM",
      amount: "₹10,000",
      status: "Queued",
      contact: "John Doe",
      createdBy: "Aditya Sharma",
      utr: "__",
    },
    {
      createdAt: "Fri9Feb,2:32PM",
      amount: "₹10,200",
      status: "Queued",
      contact: "Jane Smith",
      createdBy: "Aditya Sharma",
      utr: "__",
    },
    {
      createdAt: "Fri9Feb,2:32PM",
      amount: "₹10,300",
      status: "Queued",
      contact: "Alice Johnson",
      createdBy: "Aditya Sharma",
      utr: "__",
    },
    {
      createdAt: "Thu8Feb,3:52PM",
      amount: "₹10,400",
      status: "Queued",
      contact: "Bob Brown",
      createdBy: "Aditya Sharma",
      utr: "__",
    },
    {
      createdAt: "Ths6Feb,4:09PM",
      amount: "₹10,500",
      status: "Queued",
      contact: "Charlie Davis",
      createdBy: "Aditya Sharma",
      utr: "__",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="Razorpay flex">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`leftSidebar sticky  z-50 hover:basis-[20%] hover:pr-[5rem] basis-[5%]  hover:pl-[1rem] pl-[1rem] pr-[0rem] bg-[#242a4a]
          
            ${isHovered ? "basis-[20%]" : "basis-[5%]"} 
                  transition-all duration-300 bg-gray-800 text-white`}
        >
          <div>
            <img
              src="https://play-lh.googleusercontent.com/ogqO48I-0brEz5-HMRuwPIFf8J3FPkK4H46NY501ONkdQDMFtBn_g2uPvrbP9OskHAGp=w240-h480-rw"
              alt="Default Image"
              className={`mt-5 w-[3rem]  transition-opacity duration-300 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src="https://x.razorpay.com/dist/assets/img/RazorpayX-logo.svg"
              alt="Hover Image"
              className={`mt-4 w-[15rem] transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <div
            className={`${
              isHovered ? "pr-[3rem]" : ""
            }options flex  mt-[3rem] flex-col gap-[2rem]`}
          >
            <div className="">
              <FiHome className="text-[1.5rem] inline" />
              <span
                className={`transition-opacity duration-200 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Home
              </span>
            </div>
            <div className="flex">
              <MdOutlineAccountBalanceWallet className="text-[1.5rem] inline" />
              <span
                className={`transition-opacity duration-200 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Home
              </span>
            </div>
            <div className="flex">
              <MdOutlineAccountBalanceWallet className="text-[1.5rem] inline" />
              <span
                className={`transition-opacity duration-200 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Home
              </span>
            </div>
            <div className="flex">
              <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
            </div>
          </div>
          <span className="border-t-[1px] border-[#2c3c52]"></span>
          <div className="options border-t-[1px] border-[#2c3c52] mt-[2rem] flex flex-col gap-10">
            <div className="flex mt-5">
              <FiHome className="text-[1.5rem]" />
            </div>
            <div className="flex">
              <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
            </div>
            <div className="flex">
              <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
            </div>
            <div className="flex">
              <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
            </div>
          </div>
        </div>
        <div className="mainContent basis-[100%]">
          {/* {payout list} */}
          <div className="payout text-white bg-[#080d29] h-[5rem] px-[2rem] flex justify-between items-center">
            <div className="payoutOption">
              <ul className="flex items-center font-[500] gap-5">
                <HiArrowTopRightOnSquare className="text-2xl" />
                <li className="first-letter:text-[1.2rem]">
                  Payouts <span className="ml-2">/</span>
                </li>
                <li className="bg-[#0b1a3e] first-letter:text-[1.2rem] text-[#6dbbff] p-[0.5rem] rounded-[0.3rem]">
                  Single
                </li>

                <li>Bulk</li>
                <span className="bg-green-400 relative right-3 px-[0.7rem] py-[0.2rem] text-white font-[600] text-[0.5rem] rounded-full">
                  NEW
                </span>
                <li className="first-letter:text-[1.2rem]">Tally</li>
                <li className="first-letter:text-[1.2rem]">Payout Links</li>
              </ul>
            </div>
            <div className="payoutAdOption  flex items-center gap-5">
              <button className="flex items-center bg-transparent border-[#428cd6] text-[#428cd6] border-[1px] px-4 py-[0.4rem] font-medium text-sm rounded-sm relative">
                <span className="mr-2">+ PAYOUT</span>
                <span className="border-l-[1px] border-[#2c3c52] p-2">
                  <IoIosArrowDown className="ml-2" />
                </span>
              </button>
              <div className="search text-[#428cd6]">
                <IoIosSearch className="text-[1.4rem]" />
              </div>
              <div className="Speakerphone text-[#bd7a03]">
                <TbSpeakerphone className="text-[1.4rem] rotate-[-45deg]" />
              </div>
              <div className="PersonDown">
                <BsPersonDown className="text-[1.4rem]" />
              </div>
            </div>
          </div>

          {/* {payout quick filter} */}

          <div className="payout text-white bg-[#1d2345] h-[5.5rem] px-[2rem] flex items-center justify-between">
            <div className="quickList flex items-center gap-2">
              <span className="text-white">Quick Filter</span> :
              <div className="list1 flex items-center text-[#339dff] ml-3 w-auto px-[1rem] py-[0.5rem] bg-[#13234c] relative">
                <IoCheckmarkCircleOutline className="text-white bg-[#339dff] rounded-full" />
                <span className="ml-3">All Payouts</span>
              </div>
              <div className="list2 flex items-center text-[#339dff] ml-3 w-auto px-[1rem] py-[0.5rem] bg-[#13234c] relative">
                <MdOutlineRadioButtonUnchecked className="text-[#339dff] text-[1.2rem]" />
                <span className="ml-3 text-white">
                  Scheduled for next 2 days
                </span>
              </div>
              <div className="list2 flex items-center text-[#339dff] ml-3 w-auto px-[1rem] py-[0.5rem] bg-[#13234c] relative">
                <MdOutlineRadioButtonUnchecked className="text-[#339dff] text-[1.2rem]" />
                <span className="ml-3 text-white">
                  Queued (RazorpayX A/c) <span className="ml-[0.6rem]">1</span>
                </span>
              </div>
            </div>
            <div className="flex text-[#99c2ff]">
              View More Filter
              <IoIosArrowDown />
            </div>
          </div>

          {/* {Main data of payment} */}

          <div className="paymentData bg-[#1d2345] relative">
            <div className="dataLayout px-[3%] py-5">
              {/* {first part} */}
              <div className="payout text-white bg-[#282d4d] relative top-0 h-[4rem] w-full z-30  flex items-center">
                <span className="bg-[#bd7a03] mx-[1rem] px-[0.7rem] py-[0.2rem] text-black font-[600] text-[0.6rem]">
                  TEST
                </span>
                These are test payouts and do not affect the actual balance.
                They are used only for the purpose of integration events.{" "}
                <span className="ml-5 text-[#658bc6]">LearnMore</span>
              </div>

              {/* {second part} */}

              <div className="payout text-white bg-transparent border-b-[1px] border-[#2c3c52] h-[5.5rem] flex items-center justify-between">
                <div className="quickList flex items-center gap-2">
                  <BiSquareRounded />
                  <span className="text-[#5783b4]">Showing 1-5 payouts</span>
                  <GoDotFill />
                  <div className="sortBy flex gap-0">
                    <span className="text-[#8e9bad]">
                      Sort by{" "}
                      <span className="text-[#729ad6]">
                        latest creation date
                      </span>
                    </span>
                    <IoIosArrowDown className="text-[#729ad6]" />
                  </div>
                </div>
                <div className="flex gap-3 text-[#99c2ff]">
                  <div className="options1 flex gap-3 items-center">
                    <IoReload />
                    <BsThreeDotsVertical />
                  </div>
                  <div className="options2 flex gap-3 items-center">
                    <button className="text-[#428cd6] flex gap-1 items-center border-[1px] rounded-sm py-[0.4rem] px-[1.2rem] border-[#428cd6] bg-transparent">
                      <MdOutlineFileDownload className="text-[1.4rem]" />
                      Export
                    </button>
                    <button className="flex items-center bg-[#4e7fff] text-white px-4 py-[0.4rem] font-medium text-sm rounded-sm relative">
                      <span className="mr-2">+ PAYOUT</span>
                      <span className="border-l-[1px] border-red-500 p-2">
                        <IoIosArrowDown className="ml-2" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* {third part} */}

              <div className="min-w-full py-8 overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-white">
                      <th className="px-5 py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Created At
                      </th>
                      <th className="pl-[10rem] py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-[3rem] py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-5 py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-[6rem] py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Created By
                      </th>
                      <th className="px-5 py-3 flex gap-1 items-center text-xs font-semibold uppercase tracking-wider">
                        UTR
                        <BsFillQuestionCircleFill className="text-[#575c72]" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="px-5 py-5 text-white text-sm">
                          {item.createdAt}
                        </td>
                        <td className="pl-[10rem] py-5 text-white text-sm">
                          {item.amount}
                        </td>
                        <td className="px-[3rem]  py-5">
                          <span className="bg-[#cb733d] text-sm px-2 py-[0.1rem] rounded-full text-yellow-300">
                            {" "}
                            {item.status}
                          </span>
                        </td>
                        <td className="px-5 py-5 text-white text-sm">
                          {item.contact}
                        </td>
                        <td className="px-[6rem] py-5 text-white text-sm">
                          {item.createdBy}
                        </td>
                        <td className="px-5 py-5 text-white text-sm">
                          {item.utr}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* {row/pages} */}

            <div className="lowerSection border-t-[1px] border-[#2c3c52] bg-[#1d2345] h-[15rem]">
              <div className="rowPages mt-4 absolute right-[5rem]">
                <button className="text-[#428cd6] shadow-inner border-[1px] py-[0.2rem] px-[1.2rem] border-none bg-[#2d3540]">
                  10
                  <FaCaretDown className="inline text-white mb-3 ml-4" />
                </button>

                <span className="text-white ml-3"> rows/pages</span>
              </div>
              {/* {help btn} */}
              <div className="fixed right-[4rem] bottom-4">
                <button className="flex items-center bg-[#6d6ed8] text-white rounded-full px-4 py-2 font-medium text-sm">
                  <img
                    src={"https://x.razorpay.com/dist/assets/img/x-help/rx.svg"}
                    alt="Razorpay Logo"
                    className="w-4 h-4 mr-2"
                  />
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
