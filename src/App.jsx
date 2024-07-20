import { useState } from "react";
import { ArticleList, ButtonList } from './components';
import data from './data/data';
import './App.css';

function App() {
  const allCategories = [
    'All', ...new Set(data.map(article => article.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    if (category === 'All') {
      setArticles(data);
      return
    }
    const filteredData = data.filter(article => article.category === category);
    setArticles(filteredData);
  }

  return (
    <div>
      <div className="title">
        <h1>Filter <span>Blog</span> Basics</h1>
        <img src="https://w0.peakpx.com/wallpaper/740/955/HD-wallpaper-tour-across-world-attractions-culture-travel-visit.jpg" alt="imagen-header" />
      </div>
      <ButtonList categories={categories} filterCategory={filterCategory} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
