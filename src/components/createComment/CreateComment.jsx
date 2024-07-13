import React from 'react';
import { Label, Textarea } from "flowbite-react";
import { FaCommentDots } from "react-icons/fa";
const CreateComment = () => {
  return (
    <>
    <main className="max-w-screen-xl mx-auto mt-10">
      <div className="w-[1240px] h-[215px] relative bg-white rounded-xl border border-black/opacity-30">
        <h1 className="left-[30px] top-[30px] absolute text-zinc-800 text-[32px] font-semibold font-suwannaphum">
          ចូលរួមជាមួយយើងដើម្បីបង្កើតសហគមន៍សិក្សា
        </h1>
        <p className="w-[655px] h-[26px] left-[30px] top-[70px] absolute text-zinc-800 text-[20px] text-base font-normal font-suwannaphum">
          រីករាយក្នុងការសួរ និងឆ្លើយសំណួរទាក់ទងនឹងជំនាញផ្សេងៗដើម្បីចែករំលែកចំណេះដឹងឲ្យគ្នាទៅវិញទៅមក
        </p>
        <div className="w-[255px] h-[205px] left-[949px] top-[-6px] absolute">
          {/* Your image goes here */}
          <img className="w-full h-full rounded-xl object-cover p-5" src="../src/assets/Online learning (2).gif" alt="Learing by yourself " />
        </div>
        <div className="px-[15px] py-2 left-[30px] top-[148px] absolute bg-sky-500 rounded-lg justify-start items-start gap-[5px] inline-flex">
          <button className="text-zinc-800 text-base font-normal font-suwannaphum">សួរសំណួរ</button>
          <div className="w-5 h-5 relative" />
        </div>
      </div>
    </main>
    <section className="max-w-screen-xl mx-auto mt-10">
    <div className="w-[1204px] h-[1068px] relative">
  <div className="w-[211px] h-[60px] left-[43px] top-0 absolute">
    <img className="w-[60px] h-[60px] left-0 top-0 absolute rounded-[100px]" src="../src/assets/profileForumComment.jpg" />
    <div className="left-[79px] top-[9px] absolute text-black text-2xl font-normal font-suwannaphum">ឈ្មោះរបស់អ្នក</div>
  </div>
  <div className="w-[681px] h-[158px] p-5 left-[90px] top-[60px] absolute bg-white rounded-lg flex-col justify-start items-start gap-5 inline-flex">
    <div className="w-[92px] h-[26px] text-zinc-800 text-xl font-semibold font-suwannaphum">ចំណងជើង</div>

    <div className="w-[635px] h-[18px] text-zinc-500 text-xs font-normal font-suwannaphum">កំណត់ជាក់លាក់ ហើយស្រមៃថាអ្នកកំពុងសួរសំណួរទៅមនុស្សម្នាក់ទៀត។<br/></div>
    <div className="max-w-md w-[900px]">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Here is comment" required rows={1} />
    </div>

  </div>
  <div className="w-[1204px] h-[835px] px-10 pb-10 left-0 top-[233px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
    <div className="w-[751px] h-[226px] relative">
      <div className="w-[610.03px] h-[226px] left-0 top-0 absolute">
        <div className="w-56 h-[60px] left-0 top-0 absolute">
          <img className="w-[63.70px] h-[60px] left-0 top-0 absolute rounded-[100px]" src="../src/assets/profileForumComment.jpg" />
          <div className="w-[140.13px] left-[83.87px] top-[9px] absolute text-black text-2xl font-normal font-suwannaphum">ឈ្មោះរបស់អ្នក</div>
        </div>
        <div className="w-[329.79px] h-[26px] left-[67.50px] top-[84px] absolute text-zinc-800 text-xl font-normal font-suwannaphum">តើព័ត៌មានលម្អិតនៃបញ្ហារបស់អ្នកមានអ្វីខ្លះ?</div>
        <div className="w-[542.53px] h-[18px] left-[67.50px] top-[128px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">ណែនាំបញ្ហា និងបន្ថែមលើអ្វីដែលអ្នកដាក់ក្នុងចំណងជើង។ យ៉ាងហោចណាស់ 20 តួអក្សរ។ណែនាំបញ្ហា និងបន្ថែមលើអ្វីដែលអ្នកដាក់ក្នុងចំណងជើង។ យ៉ាងហោចណាស់ 20 តួអក្សរ។</div>
        <div className="w-[542.53px] h-11 left-[67.50px] top-[182px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">បង្ហោះនៅ ខែមករា​ ទី២២​ ឆ្នាំ២០២៤ </div>
      </div>
      <div className="w-[187.11px] h-6 left-[563.89px] top-[180px] absolute bg-white justify-start items-start gap-5 inline-flex">
        <div className="w-[67px] h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-[19px] h-3.5 left-[32px] top-[7px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">120</div>
        </div>
        <div className="w-[65px] h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-[19px] h-3.5 left-[32px] top-[7px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">120</div>
        </div>
        <div className="w-[39px] h-6 relative">
          <div className="w-[18px] h-[18px] left-0 top-[3px] absolute" />
          <div className="w-[7px] h-[13px] left-[32px] top-[6px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">3</div>
        </div>
      </div>
    </div>
    <div className="w-[751px] h-[226px] relative">
      <div className="w-[610.03px] h-[226px] left-0 top-0 absolute">
        <div className="w-56 h-[60px] left-0 top-0 absolute">
          <img className="w-[63.70px] h-[60px] left-0 top-0 absolute rounded-[100px]" src="../src/assets/profileForumComment.jpg" />
          <div className="w-[140.13px] left-[83.87px] top-[9px] absolute text-black text-2xl font-normal font-suwannaphum">ឈ្មោះរបស់អ្នក</div>
        </div>
        <div className="w-[329.79px] h-[26px] left-[67.50px] top-[84px] absolute text-zinc-800 text-xl font-normal font-suwannaphum">តើព័ត៌មានលម្អិតនៃបញ្ហារបស់អ្នកមានអ្វីខ្លះ?</div>
        <div className="w-[542.53px] h-[18px] left-[67.50px] top-[128px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">ណែនាំបញ្ហា និងបន្ថែមលើអ្វីដែលអ្នកដាក់ក្នុងចំណងជើង។ យ៉ាងហោចណាស់ 20 តួអក្សរ។ណែនាំបញ្ហា និងបន្ថែមលើអ្វីដែលអ្នកដាក់ក្នុងចំណងជើង។ យ៉ាងហោចណាស់ 20 តួអក្សរ។</div>
        <div className="w-[542.53px] h-11 left-[67.50px] top-[182px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">បង្ហោះនៅ ខែមករា​ ទី២២​ ឆ្នាំ២០២៤ </div>
      </div>
      <div className="w-[187.11px] h-6 left-[563.89px] top-[180px] absolute bg-white justify-start items-start gap-5 inline-flex">
        <div className="w-[67px] h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-[19px] h-3.5 left-[32px] top-[7px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">120</div>
        </div>
        <div className="w-[65px] h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-[19px] h-3.5 left-[32px] top-[7px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">120</div>
        </div>
        <div className="w-[39px] h-6 relative">
          <div className="w-[18px] h-[18px] left-0 top-[3px] absolute" />
          <div className="w-[7px] h-[13px] left-[32px] top-[6px] absolute text-zinc-500 text-xs font-normal font-suwannaphum">3</div>
        </div>
      </div>
    </div>
    <div className="text-blue-900 text-base font-normal font-suwannaphum underline">See more</div>
    <div className="w-[688px] h-[37px] relative">
      <div className="w-[179px] h-[26px] left-0 top-0 absolute">
        <div className="w-6 h-6 left-0 top-0 absolute" />
        <div className="w-[147px] h-6 left-[32px] top-[2px] absolute ">
        <FaCommentDots />
          <div className="left-5  top-[0px] absolute text-zinc-800 text-sm font-semibold font-suwannaphum tracking-wide">Comment Section</div>
        </div>
      </div>
      <div className="w-[765.02px] h-[0px] left-[-0.01px] top-[34.52px] absolute border border-gray-200"></div>
    </div>
      {/* here is section for flowbite react */}
  </div>
</div>
    </section>
  </>
  );
};

export default CreateComment;
