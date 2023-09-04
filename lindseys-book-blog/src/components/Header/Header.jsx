import React from "react";
import './Header.css'

function Header() {
  return (
    <header>
        <a href="/"><h2>Lindsey's Book Blog</h2></a>
        <nav>
            <section>
                <a href='/fantasy'><span>Fantasy</span></a>
                <a href='/romance'><span>Romance</span></a>
                <a href='/young-adult'><span>Young Adult</span></a>
                <a href='/thriller'><span>Thriller</span></a>
                <a href='/horror'><span>Horror</span></a>
            </section>
        </nav>
    </header>
  );
}

export default Header;