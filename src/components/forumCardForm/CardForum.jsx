import React from "react";
import { Link } from "react-router-dom";

export default function CardForum({ forums }) {
  return (
    <div>
      {
        <main className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row justify-between lg:space-x-8">
          <Link to="/createComment">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={
                    forums.profileUser ||
                    "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
                  }
                  alt="Avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 font-suwannaphum">
                    {forums.author}
                  </p>
                  <p className="text-sm text-gray-500 font-suwannaphum">
                    {forums.updated_at}
                  </p>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 font-suwannaphum">
                {forums.title}
              </h2>
              <p className="text-gray-700 font-suwannaphum">
                {forums.description}
              </p>
            </div>
          </Link>
        </main>
      }
    </div>
  );
}
