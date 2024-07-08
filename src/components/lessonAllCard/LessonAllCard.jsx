import React from 'react';
const LessonAllCard = ()  => {
  return (
    <div className="flex flex-col bg-gray-100">
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
            alt="Mountain"
            className="w-full h-[180px] object-cover"
          />
          <div className="p-[10px]">
            <h2 className="text-[18px] font-bold text-gray-800 mb-2">
              Beautiful Mountain View
            </h2>
            <p className="text-gray-700 text-[14px] leading-tight mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu sapien porttitor ......
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex justify-center">
                  <button
                    className="h-[30px] mt-4 rounded-md bg-gradient-to-r bg-blue-600 p-4 px-3 py-1 text-white text-[14px]"
                  >
                    Let's Go
                  </button>
                </div>
              </div>
              <span className="text-gray-600 mt-4">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
  )
}
export default LessonAllCard;
