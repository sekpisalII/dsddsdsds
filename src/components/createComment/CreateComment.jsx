import { useEffect, useState } from "react";
import { Button, Label, Textarea } from "flowbite-react";
import { useParams } from "react-router-dom";
import { fetchForumByid } from "../../services/fetchForumByid";
import FooterCard from "../footer/FooterCard";
import ReplyCard from "../rpCrad/ReplyCard";
import axios from "axios";
import { AUTH_HEADER } from "../../services/constants";

const CreateComment = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [forum, setForum] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [formData, setFormData] = useState({
    forum_id: id,
    content: "",
  });
  useEffect(() => {
    const fetchForumData = async () => {
      try {
        const bookData = await fetchForumByid(encodeURIComponent(bookId));
        setForum(bookData);
        const date = new Date(bookData.updated_at);
        setFormattedDate(
          date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        );
      } catch (error) {
        console.error("Error fetching forums data:", error);
      }
    };

    fetchForumData();
  }, [bookId]);

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = () => {
    // Handle the reply submission logic here
    console.log("Reply text:", replyText);
    setReplyText("");
    setShowReplyForm(false);
  };

  if (!forum) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://136.228.158.126:50001/api/comments/",
        formData,
        {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Post created successfully!");
    } catch (error) {
      console.error(
        `Error creating post: ${error.response.status} - ${error.response.data}`
      );
    }
  };

  const handleFormDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-10 px-4 sm:px-0">
        <div className="w-full sm:w-[1240px] h-auto sm:h-[215px] relative bg-white rounded-xl border border-black/opacity-30">
          <h1 className="left-[30px] top-[30px] absolute text-zinc-800 text-[32px] font-semibold font-suwannaphum">
            ចូលរួមជាមួយយើងដើម្បីបង្កើតសហគមន៍សិក្សា
          </h1>
          <p className="w-full sm:w-[655px] h-auto sm:h-[26px] left-[30px] top-[70px] absolute text-zinc-800 text-[20px] text-base font-normal font-suwannaphum">
            រីករាយក្នុងការសួរ
            និងឆ្លើយសំណួរទាក់ទងនឹងជំនាញផ្សេងៗដើម្បីចែករំលែកចំណេះដឹងឲ្យគ្នាទៅវិញទៅមក
          </p>
          <div className="w-full sm:w-[255px] h-auto sm:h-[205px] left-[949px] top-[-6px] absolute">
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
        {/*  */}
        <section className="max-w-screen-xl mx-auto mt-10 px-4 sm:px-0 shadow-md rounded-xl font-suwannaphum">
          <div className="relative">
            <div className="flex items-center mb-6">
              <img
                src={
                  forum.profileUser ||
                  "https://wallpapers.com/images/hd/smiling-close-up-oggy-and-the-cockroaches-71njhqoakbau7nbm.jpg"
                }
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4 ml-5"
              />
              <div>
                <div className="text-lg font-medium text-gray-800 ml-5">
                  {forum.author}
                </div>
                <div className="text-gray-500 ml-5"> {formattedDate}</div>
              </div>
            </div>
            <h3 className="text-[20px] leading-relaxed mb-6 font-bold ml-5">
              {forum.title}
            </h3>
            <p className="text-lg leading-relaxed mb-6 ml-5">
              {" "}
              {forum.description}
            </p>
            <div className="flex justify-end items-center mr-5">
              <div className="ml-5 mb-5">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 mr-4 mb-2"
                >
                  <i className="far fa-thumbs-up"></i> Like
                </a>

                <a
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleReplyClick}
                >
                  <i className="far fa-comment-alt "></i> Reply
                </a>
                {showReplyForm && (
                  <div className="mt-4">
                    <Label className="font-suwannaphum">Your Reply</Label>
                    <form onSubmit={handleSubmit}>
                      <Textarea
                        type="text"
                        name="content"
                        value={formData.content}
                        onChange={handleFormDataChange}
                      />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div>
          <ReplyCard forumId={id} />
        </div>
        <img
          className="h-[300px] w-[500px] rounded-lg shadow-xl dark:shadow-gray-800 mt-7"
          src={forum.image}
          alt="image description"
        />
      </main>
      <div>
        <FooterCard />
      </div>
    </>
  );
};

export default CreateComment;
