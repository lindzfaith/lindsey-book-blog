import React from "react";
import Article from "../Article/Article";
import { articles } from "../../articles";
import './Genre.css'

const path = window.location.href.split('/');
const genre = path[path.length - 1];
let genreArticles = [];

for (let i = 0; i < articles.length; i++) {
  if (articles[i].genre.includes(genre)) {
    genreArticles.push(articles[i]);
  }
}

function Home() {
  return (
    <section className='book-section'>
      {genreArticles.map((article)=>{
        return <Article 
        title={article.title} 
        rating={article.rating} 
        img={article.img}
        slug={article.slug} />
      })}
    </section>
  );
}

export default Home;