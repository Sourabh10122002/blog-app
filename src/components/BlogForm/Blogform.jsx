import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog, selectBlogs } from "../../redux/slices/blogSlice";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import './Blogform.css';

export const BlogForm = ({ isEditing }) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector(selectBlogs);

  useEffect(() => {
    if (isEditing && id) {
      const existingBlog = blogs.find((blog) => blog.id === id);
      if (existingBlog) {
        setTitle(existingBlog.title);
        setDescription(existingBlog.description);
        setCoverImage(existingBlog.coverImage || null);
      } else {
        navigate("/");
      }
    }
  }, [isEditing, id, blogs, navigate]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, description, coverImage };
    if (isEditing) {
      dispatch(updateBlog({ id, updatedBlog: blogData }));
    } else {
      dispatch(addBlog({ id: uuidv4(), ...blogData }));
    }
    navigate("/");
  };

    return (
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-create-your-blog">
          <div className="blog-form-heading">
            <h1>Create your blog</h1>
          </div>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {coverImage && (
            <div>
              <h4>Cover Image Preview:</h4>
              <img
                src={coverImage}
                alt="Cover Preview"
                style={{ maxWidth: "200px" }}
              />
            </div>
          )}

          <button type="submit">{isEditing ? "Update" : "Submit"} Blog</button>
        </form>
      </div>
    );
};
