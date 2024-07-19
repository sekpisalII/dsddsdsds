import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
const DashboardDetail = () =>{
  return (
    <div>
        <section className="max-w-screen-md mx-auto">
            <div className="w-full h-[290px] relative">
                <div className=" left-0 top-0 absolute">
                    <div className="w-[276px] h-[290px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[186.67px] h-[183.37px] left-[44.67px] top-[63.27px] absolute">
                        <div className="w-[170.59px] h-[167.58px] left-[8.04px] top-[7.90px] absolute bg-slate-200 rounded-full" />
                        <div className="w-[186.67px] h-[183.37px] left-0 top-0 absolute bg-blue-600 rounded-full flex justify-center items-center">
                            <FaBookOpen className="text-black text-3xl" />
                        </div>
                    </div>
                    <div className="w-[97px] h-[32.42px] left-[90px] top-[27.15px] absolute justify-start items-start gap-[5px] inline-flex">
                        <span className=" text-blue-600 drop-shadow-sm text-2xl font-normal font-suwannaphum">Posts</span>
                    </div> 
                    <div className="w-[41px] h-[35.36px] left-[108px] top-[154.95px] absolute text-white text-center text-2xl font-bold font-suwannaphum mt-5 ml-3">34</div>
                </div>
                <div className="w-[276px] h-[290px] left-[407px] top-0 absolute">
                    <div className="w-[276px] h-[290px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[186.67px] h-[186.67px] left-[44.67px] top-[64.40px] absolute">
                        <div className="w-[170.59px] h-[170.59px] left-[8.04px] top-[8.04px] absolute bg-slate-200 rounded-full" />
                        <div className="w-[186.67px] h-[186.67px] left-0 top-0 absolute bg-green-400 rounded-full flex justify-center items-center">
                            <MdOutlineOndemandVideo className="text-black text-3xl" />
                        </div>
                    </div>
                    <div className="w-[69px] h-[33px] left-[104px] top-[27.64px] absolute justify-start items-start gap-[10px] inline-flex">
                        <span className=" text-blue-600 text-2xl font-normal font-suwannaphum "> Lessons</span>
                    </div>
                    <div className="left-[120px] top-[158px] absolute text-white text-2xl font-bold font-suwannaphum mt-5">25</div>
                </div>
                <div className="w-[276px] h-[290px] left-[813px] top-0 absolute">
                    <div className="w-[276px] h-[290px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[186.67px] h-[186.67px] left-[44.67px] top-[64.40px] absolute">
                        <div className="w-[170.59px] h-[170.59px] left-[8.04px] top-[8.04px] absolute bg-slate-200 rounded-full" />
                        <div className="w-[186.67px] h-[186.67px] left-0 top-0 absolute bg-teal-400 rounded-full flex justify-center items-center">
                            <BiSolidLike className="text-black text-3xl" />
                        </div>
                    </div>
                    <div className="w-[97px] h-[33px] left-[90px] top-[27.64px] absolute justify-start items-start gap-[5px] inline-flex">
                        <span className=" text-2xl text-blue-600 font-normal font-suwannaphum">Likes</span>
                    </div>
                    <div className="left-[108px] top-[157.74px] absolute text-white text-2xl font-bold font-suwannaphum mt-5 ml-2">350</div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default DashboardDetail;