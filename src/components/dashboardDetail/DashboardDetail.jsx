import React, { useState, useEffect } from 'react';
import { MdOutlinePostAdd } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiTwotoneLike } from "react-icons/ai";

const DashboardDetail = ({ targetPercent }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const startTime = Date.now();

    const animateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const duration = 2000; // 2 seconds
      const newPercent = Math.min((elapsedTime / duration) * targetPercent, targetPercent);

      setPercent(newPercent);

      if (newPercent < targetPercent) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    animateProgress();

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPercent]);

  return (
    <section className="max-w-screen-xl mx-auto mt-5 gap-[100]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center">
            <div className="progress-circle" data-progress="34">
              <div className="relative">
                <svg width="150" height="150">
                  <circle className="bg" cx="75" cy="75" r="60"></circle>
                  <circle className="progress text-blue-500" cx="75" cy="75" r="60" style={{ stroke: "currentColor" }}></circle>
                </svg>
                <MdOutlinePostAdd className="absolute top-[50%] left-[50%] -ml-4 -mt-3 text-[30px]" />
              </div>
            </div>
            <p className="text-center text-[25px] font-semibold mt-4">84</p>
            <p className="text-center text-sm text-gray-600 mt-1">Total Posts</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center">
            <div className="progress-circle" data-progress="90">
              <div className="relative ">
                <svg width="150" height="150">
                  <circle className="bg" cx="75" cy="75" r="60"></circle>
                  <circle className="progress text-green-400" cx="75" cy="75" r="60" style={{ stroke: "currentColor" }}></circle>
                </svg>
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-90">
                  <IoCheckmarkCircleSharp className="text-[30px]" />
                </div>
              </div>
            </div>
            <p className="text-center text-[25px] font-semibold mt-4">50</p>
            <p className="text-center text-sm text-gray-600 mt-1">Total Posts</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center">
            <div className="progress-circle" data-progress="70">
              <div className="relative ">
                <svg width="150" height="150">
                  <circle className="bg" cx="75" cy="75" r="60"></circle>
                  <circle className="progress text-yellow-400" cx="75" cy="75" r="60" style={{ stroke: "currentColor" }}></circle>
                </svg>
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-90">
                  <AiTwotoneLike className="text-[30px]" />
                </div>
              </div>
            </div>
            <p className="text-center text-[25px] font-semibold mt-4">70</p>
            <p className="text-center text-sm text-gray-600 mt-1">Total Posts</p>
          </div>
        </div>
      </div>
    </section>
  );


};

export default DashboardDetail;
