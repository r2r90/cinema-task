import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';
import cover from '../assets/FeaturedCoverImage.png';
import { BiPlay } from 'react-icons/bi';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import data from '../data.json';

const Home = () => {
  const [movie, setmovie] = useState(data.Featured);

  const handleClick = () => {
   
  }

 

  const scrollLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="container">
      <div className="cover">
        <img src={cover} alt="cover" />
      </div>
      <div className="info">
        <div className="genre">
          <span>{movie.ategory}</span>
        </div>

        <div className="title-img">
          <img src={require(`../assets/${movie.TitleImage}`)} alt="title" />
        </div>
        <div className="year-age-time">
          <span>{movie.ReleaseYear}</span>
          <span>{movie.MpaRating}</span>
          <span>{movie.Duration}</span>
        </div>
        <div className="about">
          <p>{movie.Description}</p>
        </div>
        <div className="buttons">
          <button>
            <BiPlay />
            Play
          </button>
          <button>More</button>
        </div>
      </div>
      <div className="carousel">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={scrollLeft}
          size={40}
          color="grey"
        />
        <div id="slider" className="scrollbar-hide">
          {data.TendingNow.map((item) => (
            <img
            //   onClick={(id) => handleClick()}
              src={require(`../assets/${item.CoverImage}`)}
              alt="/"
              key={item.id}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 "
          onClick={scrollRight}
          size={40}
          color="grey"
        />
      </div>
    </div>
  );
};

export default Home;
