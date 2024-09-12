import { useSelector, useDispatch } from "react-redux";
import { selectBlogs, deleteBlog } from "../../redux/slices/blogSlice";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import "./Bloglist.css";

export const BlogList = () => {
  const blogs = useSelector(selectBlogs);
  const dispatch = useDispatch();

  const auth = getAuth();
  const [user] = useAuthState(auth);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Display 5 blogs per page

  // Calculate the indexes for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Handle page navigation
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div>
      <div className="create-new-blog">
        {user && (
          <Link to="/blogs/new">
            <button className="create-new-blog-btn">Create New Blog</button>
          </Link>
        )}
      </div>

      <div className="all-blogs-container">
        {blogs.length === 0 ? (
          <p className="no-blogs-available">No blogs available. Create one!</p>
        ) : (
          currentBlogs.map((blog) => (
            <div key={blog.id} className="blog-only">
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt="Blog Cover"
                  className="blog-only-image"
                />
              )}
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link to={`/blogs/${blog.id}`}>Read More</Link>
              <div className="edit-delete-btn">
                {user && (
                  <>
                    <button onClick={() => handleDelete(blog.id)}>
                      Delete
                    </button>
                    <Link to={`/blogs/edit/${blog.id}`}>
                      <button>Edit</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {blogs.length > 0 && totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
