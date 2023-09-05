import React from "react";
import './Blog.css'
import { articles } from "../../articles";
import { Rating } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const path = window.location.href.split('/');
const slug = path[path.length - 1];
let article = articles[0];

for (let i = 0; i < articles.length; i++) {
  if (slug === articles[i].slug) {
    article = articles[i];
  }
}

function Blog(props) {
  return (
    <article className='blog'>
      <div className="content">
        <span>{article.date}</span>
        <h1>{article.title}</h1>
        <section>
         <h2>Review:</h2>
          <p>{article.content}</p>
        </section>
        <h2>Summary:</h2>
        <p>{article.summary}</p>
      </div>
      <aside>
        <label>Rating: </label>
        <Rating value={article.rating} />
        <label>Mature Content: </label>
        <Rating icon={<FavoriteIcon/>} emptyIcon={<FavoriteIcon/>} value={article.spice} />
        <label>Tags</label>
          <ul>
            {article.genre.map(gen => <li>{gen.replace('-', ' ')}</li>)}
          </ul>
      </aside>
    </article>
  );
}

export default Blog;