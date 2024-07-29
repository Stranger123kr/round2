import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import {
  BsPersonDown,
  BsFillQuestionCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  IoCheckmarkCircleOutline,
  IoChevronDownCircleOutline,
  IoReload,
} from "react-icons/io5";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineFileDownload,
} from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
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

  return (
    <>
      <div className="Razorpay flex">
        <div className="leftSidebar basis-[10%] h-screen bg-red-200">
          <h3>nav</h3>
        </div>
        <div className="mainContent basis-[100%]">
          {/* {payout list} */}
          <div className="payout text-white bg-[#080d29] h-[5rem] px-[2rem] flex justify-between items-center">
            <div className="payoutOption">
              <ul className="flex items-center gap-5">
                <HiArrowTopRightOnSquare className="text-2xl" />
                <li className="first-letter:text-[1.2rem]">
                  Payouts <span className="ml-2">/</span>
                </li>
                <li className="bg-[#0b1a3e] first-letter:text-[1.2rem] text-[#6dbbff] p-[0.4rem] rounded-[0.3rem]">
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
              <button className="flex items-center bg-[#4e7fff] text-white px-4 py-[0.4rem] font-medium text-sm rounded-sm relative">
                <span className="mr-2">+ PAYOUT</span>
                <span className="border-l-[1px] border-red-500 p-2">
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

          <div className="payout text-white bg-[#111739] h-[5.5rem] px-[2rem] flex items-center justify-between">
            <div className="quickList flex items-center gap-2">
              <span className="text-[#8e9bad]">Quick Filter</span> :
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

          <div className="paymentData bg-[#1d2345] h-screen relative">
            <div className="dataLayout px-[3%] py-5">
              {/* {first part} */}
              <div className="payout text-white bg-[#282d4d] relative top-0 h-[4rem] w-full z-50  flex items-center">
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
                  <span className="text-[#8e9bad]">
                    Sort by{" "}
                    <span className="text-[#729ad6]">latest creation date</span>
                  </span>
                  <IoIosArrowDown className="text-[#729ad6]" />
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

              <div className="min-w-full py-8 border-b-[1px] border-[#2c3c52] overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr className="text-white">
                      <th className="px-5 py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Created At
                      </th>
                      <th className="px-5 py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-5 py-3  text-left text-xs font-semibold uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-5 py-3  text-left text-xs font-semibold uppercase tracking-wider">
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
                        <td className="px-5 py-5 text-white text-sm">
                          {item.amount}
                        </td>
                        <td className="px-5 py-5 text-white text-sm">
                          {item.status}
                        </td>
                        <td className="px-5 py-5 text-white text-sm">
                          {item.contact}
                        </td>
                        <td className="px-5 py-5 text-white text-sm">
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

            <div className="lowerSection bg-[#1d2345] h-[15rem]">
              <div className="rowPages absolute right-[5rem]">
                <button className="text-[#428cd6] border-[1px] py-[0.2rem] px-[1.5rem] border-none bg-[#2d3540]">
                  10
                  <FaCaretDown className="inline text-white mb-3 ml-2" />
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
