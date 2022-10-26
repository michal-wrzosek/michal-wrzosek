/* eslint-disable react/jsx-max-depth */
import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import mainImage from './main-image.jpg';

const name = 'Michał Wrzosek';
const subTitle = 'Entrepreneur, Web Consultant & Programmer';

export const Home: React.VFC = () => (
  <div className="Home">
    <img alt="Michał flying over Tokyo" className="Home__main-image" src={mainImage} />
    <div className="Home__name">{name}</div>
    <div className="Home__subtitle">{subTitle}</div>
    <div className="Home__links">
      <a
        className="Home__links__link"
        href="https://github.com/michal-wrzosek"
        rel="noreferrer"
        target="_blank"
        title="My GitHub"
      >
        <i className="fab fa-github-square" />
      </a>

      <a
        className="Home__links__link"
        href="https://www.facebook.com/xfor.artworks"
        rel="noreferrer"
        target="_blank"
        title="My Facebook"
      >
        <i className="fab fa-facebook-square" />
      </a>

      <a
        className="Home__links__link"
        href="https://www.linkedin.com/in/michal-wrzosek-cv/"
        rel="noreferrer"
        target="_blank"
        title="My LinkedIn"
      >
        <i className="fab fa-linkedin" />
      </a>

      <a
        className="Home__links__link"
        href="https://www.youtube.com/channel/UC7BOX17vTKwd6sYqwf96rNQ"
        rel="noreferrer"
        target="_blank"
        title="My YouTube"
      >
        <i className="fab fa-youtube-square" />
      </a>

      <a
        className="Home__links__link"
        href="https://www.instagram.com/xfor/"
        rel="noreferrer"
        target="_blank"
        title="My Instagram"
      >
        <i className="fab fa-instagram" />
      </a>

      <a
        className="Home__links__link"
        href="https://twitter.com/xforartworks"
        rel="noreferrer"
        target="_blank"
        title="My Twitter"
      >
        <i className="fab fa-twitter-square" />
      </a>

      <a
        className="Home__links__link"
        href="https://medium.com/@xfor"
        rel="noreferrer"
        target="_blank"
        title="My Medium"
      >
        <i className="fab fa-medium" />
      </a>
    </div>

    <div className="Home__contact">
      <div className="Home__contact__detail">
        <div className="Home__contact__detail__icon">
          <i className="fas fa-envelope" />
        </div>
        <div className="Home__contact__detail__text">michal@wrzosek.pl</div>
      </div>

      <div className="Home__contact__detail">
        <div className="Home__contact__detail__icon">
          <i className="fas fa-map-marker-alt" />
        </div>
        <div className="Home__contact__detail__text">
          Galvanistraat 707
          <br />
          3029 AD Rotterdam, THE NETHERLANDS
        </div>
      </div>
    </div>

    <div className="Home__buttons">
      <Link className="Home__buttons__button" title="CV" to="/cv">
        Show CV
      </Link>
    </div>
  </div>
);
