import React from 'react';
import Image from '../images/math.png';
import './styles/home.css';

const Home = () => (
  <div className="homePageContainer">
    <h2>Welcome to Our Page</h2>
    <p className="description">
      <span className="math">Math Magicians</span>
      {' '}
      is a website all for fun of Mathematics.
    </p>
    <p>It is a Single Page Application that allows you to:</p>
    <ul>
      <li>1. Make simple Mathematical Calculation</li>
      <li>2. Read a random  math-related quotes</li>
    </ul>
    <img src={Image} alt="mathemetics" className="homeImage" />
  </div>
);
export default Home;
