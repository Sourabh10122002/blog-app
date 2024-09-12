import {BlogList} from "../../components";
import './Homepage.css';

export const HomePage = () => {
  return (
    <div>
      <h1 className="homepage-head">Welcome to the Blog App</h1>
      <BlogList />
    </div>
  );
};
