import React from "react";
import './Header.css'
import { MenuOutlined } from "@mui/icons-material";

function Header() {
  return (
    <header>
        <a href="/"><h2>Lindsey's Book Blog</h2></a>
        <nav>
            <section className="long">
                <a href='/fantasy'><span>Fantasy</span></a>
                <a href='/romance'><span>Romance</span></a>
                <a href='/young-adult'><span>Young Adult</span></a>
                <a href='/thriller'><span>Thriller</span></a>
                <a href='/horror'><span>Horror</span></a>
            </section>
            <div className="short-group">
              <MenuOutlined class="short"/>
              <ul className="menu">
                <a href='/fantasy'><li>Fantasy</li></a>
                <a href='/romance'><li>Romance</li></a>
                <a href='/young-adult'><li>Young Adult</li></a>
                <a href='/thriller'><li>Thriller</li></a>
                <a href='/horror'><li>Horror</li></a>
              </ul>
            </div>
        </nav>
    </header>
  );
}

export default Header;