import React, { useEffect, useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { FaCommentDots } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchForumByid } from "../../services/fetchForumByid";
import FooterCard from "../footer/FooterCard";

const CreateComment = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [forum, setforum] = useState(null);

  useEffect(() => {
    const fetchlessonData = async () => {
      try {
        const bookData = await fetchForumByid(encodeURIComponent(bookId));
        setforum(bookData);
      } catch (error) {
        console.error("Error fetching forums data:", error);
      }
    };
    fetchlessonData();
  }, []);

  if (!forum) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-10">
        <div className="w-[1240px] h-[215px] relative bg-white rounded-xl border border-black/opacity-30">
          <h1 className="left-[30px] top-[30px] absolute text-zinc-800 text-[32px] font-semibold font-suwannaphum">
            ចូលរួមជាមួយយើងដើម្បីបង្កើតសហគមន៍សិក្សា
          </h1>
          <p className="w-[655px] h-[26px] left-[30px] top-[70px] absolute text-zinc-800 text-[20px] text-base font-normal font-suwannaphum">
            រីករាយក្នុងការសួរ
            និងឆ្លើយសំណួរទាក់ទងនឹងជំនាញផ្សេងៗដើម្បីចែករំលែកចំណេះដឹងឲ្យគ្នាទៅវិញទៅមក
          </p>
          <div className="w-[255px] h-[205px] left-[949px] top-[-6px] absolute">
            {/* Your image goes here */}
            <img
              className="w-full h-full rounded-xl object-cover p-5"
              src="../src/assets/Online learning (2).gif"
              alt="Learing by yourself "
            />
          </div>
          <div className="px-[15px] py-2 left-[30px] top-[148px] absolute bg-sky-500 rounded-lg justify-start items-start gap-[5px] inline-flex">
            <button className="text-zinc-800 text-base font-normal font-suwannaphum">
              សួរសំណួរ
            </button>
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </main>
      <section className="max-w-screen-xl mx-auto mt-10">
        <div className="  relative">
          <div className="w-[211px] h-[60px] left-[43px] top-0 absolute">
            <img
              className="w-[60px] h-[60px] left-0 top-0 absolute rounded-[100px]"
              src="../src/assets/profileForumComment.jpg"
            />
            <div className="left-[79px] top-[9px] absolute text-black text-2xl font-normal font-suwannaphum">
              {forum.author}
            </div>
          </div>
          <div className="w-[681px] h-[158px] p-5 left-[90px] top-[60px] absolute bg-white rounded-lg flex-col justify-start items-start gap-5 inline-flex">
            <div className=" text-zinc-800 text-xl font-semibold font-suwannaphum">
              {forum.title}
            </div>

            <div className="w-[635px] h-[18px] text-zinc-500 text-lg font-normal font-suwannaphum ">
              {forum.description}
              <br />
            </div>

            <button className="text-blue-900 text-base font-normal font-suwannaphum underline mt-6">
              See more
            </button>

            <div className="max-w-md w-[900px] ">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your comment" />
              </div>
              <Textarea
                id="comment"
                placeholder="Here is comment"
                required
                rows={1}
              />
            </div>
          </div>
          <div className=" px-10 pb-10 left-0 top-[233px] absolute flex-col justify-start items-start gap-[30px] inline-flex"></div>
        </div>
      </section>
      <div className="mt-[400px]">
        <FooterCard />
      </div>
    </>
  );
};

export default CreateComment;
