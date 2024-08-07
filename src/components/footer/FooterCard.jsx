import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterCard = () => {
  return (
    <>
      <Footer container className=" bg-slate-100 mt-10">
        <div className="w-full h-auto mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
            <Footer.Brand
                src="../src/assets/STEM_LOGO_TUTOR.png"
                className="w-16 h-16 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full object-cover m-4"
                alt="Stem Logo"
              />
              <p className="text-base font-suwannaphum text-gray-500/90">
                STEM website
                ​ដែល​រចនា​ឡើង​សម្រាប់​សិស្សដើម្បី​ចូល​រួម​ក្នុង​ការ​សិក្សា​សហការ
                និង​ការ​ចែក​រំលែក​ចំណេះដឹង <br />
                អ្នកប្រើប្រាស់មានការគ្រប់គ្រងពេញលេញលើការធ្វើដំណើររបស់ពួកគេនិងបង្កើតមេរៀននៅក្នុងវេទិកា។
              </p>
            </div>

            <div className="mt-5 grid gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
              <div>
                <Footer.Title
                  title="គេហទំព័រ"
                  className="font-suwannaphum text-lg font-bold text-black/90"
                />
                <Footer.LinkGroup
                  col
                  className="text-base font-suwannaphum"
                >
                  <Footer.Link href="#">មេរៀន</Footer.Link>
                  <Footer.Link href="#">ប្លុក</Footer.Link>
                  <Footer.Link href="#">វេទិកា</Footer.Link>
                  <Footer.Link href="#">វីដេអូ</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="ព័ត៌មាន"
                  className="font-suwannaphum text-lg font-bold text-black/90"
                />
                <Footer.LinkGroup
                  col
                  className="text-base font-suwannaphum"
                >
                  <Footer.Link href="#">លក្ខខណ្ឌប្រើប្រាស់</Footer.Link>
                  <Footer.Link href="#">សាកសួរព័ត៌មាន</Footer.Link>
                  <Footer.Link href="#">អំពីយើង</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="ទំនាក់ទំនងមកពួកយើង"
                  className="font-suwannaphum text-lg font-bold text-black/90"
                />
                <Footer.LinkGroup
                  col
                  className="text-base font-suwannaphum"
                >
                  <Footer.Link href="#">អាសយដ្ធាន</Footer.Link>
                  <Footer.Link href="#">ក្រុមការងារ</Footer.Link>
                  <Footer.Link href="#">ផ្សេងៗ</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by=" 2024 Stem. All Rights Reserved" />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterCard;
