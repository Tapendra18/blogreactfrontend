import "./App.css";
import Header from "./components/Header";
import Category from "./components/Category";
import Post from "./components/Post";
import Footer from "./components/Footer";
import FullPost from "./components/FullPost";
import Admin from "./components/Admin";
import { Route, Routes } from "react-router-dom";
import DeletePost from "./components/DeletePost";
function App() {
  return (
    <>
      <Header />
      <Category />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/detailpost/:slug" element={<FullPost />} />
        <Route path="/detailpost" element={<FullPost />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/deletepost" element={<DeletePost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
