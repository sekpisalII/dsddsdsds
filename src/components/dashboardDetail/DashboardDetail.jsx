import React from 'react'
const DashboardDetail = () =>{
  return (
    <section className="max-w-screen-xl mx-auto mt-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
                <div className="progress-circle" data-progress="34">
                <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress text-blue-500" cx="50" cy="50" r="40" style={{stroke: "currentColor"}}></circle>
                </svg>
                </div>
                <p className="text-center text-lg font-semibold mt-4">34</p>
                <p className="text-center text-sm text-gray-600 mt-1">ចំណាយ សរុប</p>
            </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
                <div className="progress-circle" data-progress="25">
                <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress text-green-500" cx="50" cy="50" r="40" style={{stroke: "currentColor"}}></circle>
                </svg>
                </div>
                <p className="text-center text-lg font-semibold mt-4">25</p>
                <p className="text-center text-sm text-gray-600 mt-1">ចំណាយ សរុប</p>
            </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
                <div className="progress-circle" data-progress="35">
                <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress text-teal-500" cx="50" cy="50" r="40" style={{stroke:"currentColor"}}></circle>
                </svg>
                </div>
                <p className="text-center text-lg font-semibold mt-4">35</p>
                <p className="text-center text-sm text-gray-600 mt-1">ចំណាយ សរុប</p>
            </div>
            </div>
        </div>
    </section>
  )
}
export default DashboardDetail;