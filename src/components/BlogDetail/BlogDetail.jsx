import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { selectBlogs } from "../../redux/slices/blogSlice";
import './BlogDetail.css';

export const BlogDetail = () => {
  const { id } = useParams();
  const blogs = useSelector(selectBlogs);
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="blog-details-main">
      <Link onClick={() => navigate(-1)} className="back-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>{" "}
      </Link>
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt="Blog Cover"
          style={{ maxWidth: "300px" }}
        />
      )}
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};