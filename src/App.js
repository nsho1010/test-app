import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/posts/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
