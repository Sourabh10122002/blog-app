import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar,BlogForm,BlogDetail} from "./components";
import { HomePage, LoginPage, SignupPage } from "./pages";
import ProtectedRoute from "./routeList/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/blogs/new"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/edit/:id"
          element={
            <ProtectedRoute>
              <BlogForm isEditing />
            </ProtectedRoute>
          }
        />
        <Route path="/blogs/:id" element={
          <ProtectedRoute>
            <BlogDetail />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
