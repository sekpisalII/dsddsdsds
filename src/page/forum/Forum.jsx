import React, { useEffect, useState } from "react";
import ForumContent from "../../components/forum/ForumContent";
import FooterCard from "../../components/footer/FooterCard";
import { fetchFurum } from "../../services/fetchFurom";
import CardForum from "../../components/forumCardForm/CardForum";
import Spinner from "../../components/appSpinner/Spinner";

const Forum = () => {
  const [forums, setForums] = useState([{}]);
  const [isloading, setIsloading] = useState(true);
  const onFurumsFetch = (pageNum, pageSize) => {
    fetchFurum(pageNum, pageSize).then((json) => {
      //handle ui
      console.log(json);
      //upadte State
      setForums(json.results);
      setIsloading(false);
    });
  };
  useEffect(() => {
    onFurumsFetch(1, 10);
  }, []);
  return (
    <div>
      <ForumContent />
      {isloading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className=" p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {forums &&
            forums.map((forums, index) => (
              <section key={index}>
                <CardForum forums={forums} />
              </section>
            ))}
        </section>
      )}{" "}
      {/* <section className=" flex justify-center items-center  ">
        <Pagination />
      </section> */}
      <FooterCard />
    </div>
  );
};

export default Forum;
