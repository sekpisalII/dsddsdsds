import React, { useEffect, useState } from "react";
import ForumContent from "../../components/forum/ForumContent";
import FooterCard from "../../components/footer/FooterCard";
import { fetchFurum } from "../../services/fetchFurom";
import CardForum from "../../components/forumCardForm/CardForum";
import NavbarComponent from "../../components/navbar/NavbarComponent";

const Forum = () => {
  const [forums, setForums] = useState([{}]);
  const onFurumsFetch = (pageNum, pageSize) => {
    fetchFurum(pageNum, pageSize).then((json) => {
      //handle ui
      console.log(json);
      //upadte State
      setForums(json.results);
    });
  };
  useEffect(() => {
    onFurumsFetch(1, 10);
  }, []);
  return (
    <div>
      <ForumContent />{" "}
      {forums &&
        forums.map((forums, index) => (
          <section key={index}>
            <CardForum forums={forums} />
          </section>
        ))}
      <FooterCard />
    </div>
  );
};

export default Forum;
