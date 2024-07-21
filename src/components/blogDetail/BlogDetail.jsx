import React, { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/fetchBlogById";
import { useParams } from "react-router-dom";
const BlogDetail = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [blog, setblog] = useState(null);

  useEffect(() => {
    const fetchlessonData = async () => {
      try {
        const bookData = await fetchBlogById(encodeURIComponent(bookId));
        setblog(bookData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchlessonData();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <section className="mt-8 w-[80%] h-auto mx-auto flex flex-col md:flex-row justify-between gap-8 font-suwannaphum">
      <div className=" md:w-[60%]  grid grid-row-[auto_auto] ">
        <div className="w-full h-auto bg-[#F5F5F5] p-8 flex">
          <img
            className=" rounded-full w-[90px] h-[90px]"
            src={
              blog.profileUser ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK2libct1ti7CliA65qLEOpjZutZy6penfA&s"
            }
            alt=""
          />
          <span className="ml-8 mt-8 font-bold">
            {blog.author}
            <div className="mt-8 -ml-4 w-[120px] h-[40px] bg-[#16A1DF] rounded-lg p-2 text-center font-medium">
              <button>តាមដាន</button>
            </div>
          </span>
        </div>
        <div className="mt-8 p-4 w-full h-auto bg-[#F5F5F5]">
          <h3>{blog.title}</h3>
          <img className="mt-4 mb-4" src={blog.image} />
          <span className="text-black text-base font-light font-suwannaphum">
            {blog.content}
          </span>
        </div>
      </div>
      <div className="md:w-[40%] bg-[#F5F5F5] p-4">
        <ul>
          <li className="font-bold mb-4">អត្ថបទដែលពាក់ព័ន្ធ</li>
          <li className="flex items-center space-x-6">
            <div className="w-[60px] h-[60px] ">
              <img
                src="https://tono.edu.vn/wp-content/uploads/2023/08/STEM-mBot.png"
                alt=""
              />
            </div>
            <div>
              <span className="block">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </span>
              <div className="text-[14px]">ថ្ងៃបង្ហោះ : 15 April 2024</div>
            </div>
          </li>

          <li className="flex items-center space-x-6">
            <div className="w-[60px] h-[60px]">
              <img
                src="https://tono.edu.vn/wp-content/uploads/2023/08/STEM-mBot.png"
                alt=""
              />
            </div>
            <div>
              <span className="block">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </span>
              <div className="text-[14px]">ថ្ងៃបង្ហោះ : 15 April 2024</div>
            </div>
          </li>

          <li className="flex items-center space-x-6">
            <div className="w-[60px] h-[60px]">
              <img
                src="https://tono.edu.vn/wp-content/uploads/2023/08/STEM-mBot.png"
                alt=""
              />
            </div>
            <div>
              <span className="block">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </span>
              <div className="text-[14px]">ថ្ងៃបង្ហោះ : 15 April 2024</div>
            </div>
          </li>

          <li className="flex items-center space-x-6">
            <div className="w-[60px] h-[60px] ">
              <img
                src="https://tono.edu.vn/wp-content/uploads/2023/08/STEM-mBot.png"
                alt=""
              />
            </div>
            <div>
              <span className="block">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </span>
              <div className="text-[14px]">ថ្ងៃបង្ហោះ : 15 April 2024</div>
            </div>
          </li>

          <li className="flex items-center space-x-6">
            <div className="w-[60px] h-[60px] ">
              <img
                src="https://tono.edu.vn/wp-content/uploads/2023/08/STEM-mBot.png"
                alt=""
              />
            </div>
            <div>
              <span className="block">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </span>
              <div className="text-[14px]">ថ្ងៃបង្ហោះ : 15 April 2024</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default BlogDetail;
