// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// export default function CardForum({ forums }) {
//   const [formattedDate, setFormattedDate] = useState("");
//   useEffect(() => {
//     const date = new Date(forums.updated_at);
//     setFormattedDate(
//       date.toLocaleString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//       })
//     );
//   }, [forums.updated_at]);

//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => setIsExpanded(!isExpanded);
//   return (
//     <div>
//       {
//         <main className="max-w-7xl mx-auto p-4">
//           <Link to={`/createComment/${forums.id}`} className="block">
//             <div className="bg-white shadow rounded-lg px-4 py-2 hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-3">
//                 <img
//                   src={
//                     forums.profileUser ||
//                     "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
//                   }
//                   alt="Avatar"
//                   className="h-12 w-12 rounded-full object-cover"
//                 />
//                 <div className="flex flex-col -mt-4">
//                   <p className="ml-3 mr-2 rounded px-2.5 py-0.5 text-gray-600 font-semibold hover:text-indigo-600 font-suwannaphum text-[16px]">
//                     {forums.author}
//                   </p>
//                   <p className="text-gray-600 font-suwannaphum text-sm ml-5 mt-1">
//                     {formattedDate}
//                   </p>
//                 </div>
//               </div>
//               <h2 className="text-xl font-semibold text-gray-900 font-suwannaphum line-clamp-2">
//                 {forums.title}
//               </h2>
//               <p
//                 className={`text-base text-gray-700 font-suwannaphum ${
//                   isExpanded ? "" : "line-clamp-1"
//                 }`}
//               >
//                 {forums.description}
//               </p>
//               <button
//                 onClick={handleToggle}
//                 className="mt-2 text-indigo-600 hover:underline focus:outline-none text-sm"
//               >
//                 {isExpanded ? "See less" : "See more"}
//               </button>
//             </div>
//           </Link>
//         </main>
//       }
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function CardForum({ forums }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(forums.updated_at);
    setFormattedDate(
      date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    );
  }, [forums.updated_at]);

  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="card bg-white shadow rounded-lg hover:shadow-md transition-shadow duration-300">
      <Link to={`/createComment/${forums.id}`} className="block">
        <div className="flex items-center mb-3">
          <img
            src={
              forums.profileUser ||
              "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
            }
            alt="Avatar"
            className="h-10 w-10 rounded-full object-cover"  // Slightly smaller avatar
          />
          <div className="flex flex-col ml-3">
            <p className="text-gray-600 font-semibold hover:text-indigo-600 font-suwannaphum text-[14px]">
              {forums.author}
            </p>
            <p className="text-gray-600 font-suwannaphum text-xs mt-1">
              {formattedDate}
            </p>
          </div>
        </div>
        <h2 className="card-title">
          {forums.title}
        </h2>
        <p
          className={`text-base text-gray-700 font-suwannaphum ${
            isExpanded ? "" : "line-clamp-2"
          }`}  // Adjusted to clamp at 2 lines
        >
          {forums.description}
        </p>
        <button
          onClick={handleToggle}
          className="mt-2 text-indigo-600 hover:underline focus:outline-none text-sm"
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      </Link>
    </div>
  );
}

