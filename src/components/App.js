import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <img src={blogData.image} alt={blogData.name} />
      <h3>Posts</h3>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
