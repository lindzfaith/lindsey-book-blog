import React from "react";
import { Rating } from "@mui/material";
import './Article.css';

function Article(props) {
  return (
    <a href={`./book/${props.slug}`}>
        <article>
            <img src={require('../../images/' + props.img)}/>
            <h3>{props.title}</h3>
            <Rating value={ props.rating } readOnly={true} />
        </article>
    </a>
  );
}

export default Article;