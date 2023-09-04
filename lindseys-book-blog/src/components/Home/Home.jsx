import React from "react";
import Article from "../Article/Article";
import { articles } from "../../articles";
import './Home.css'

function Home() {
  return (
    <section className='book-section'>
      {articles.map((article)=>{
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