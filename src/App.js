import React, { Component } from 'react';
import mainImage from './main-image.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          src={mainImage}
          className="App__main-image"
          alt="Michał flying over Tokyo"
        />
        <div className="App__name">
          Michał Wrzosek
        </div>
        <div className="App__subtitle">
          Entrepreneur, Web Consultant & Programmer
        </div>
        <div className="App__links">
          <a
            href="https://github.com/michal-wrzosek"
            taget="_blank"
            title="My GitHub"
            className="App__links__link"
          >
            <i className="fab fa-github-square" />
          </a>

          <a
            href="https://www.facebook.com/xfor.artworks"
            taget="_blank"
            title="My Facebook"
            className="App__links__link"
          >
            <i className="fab fa-facebook-square" />
          </a>

          <a
            href="https://www.linkedin.com/in/michal-wrzosek-cv/"
            taget="_blank"
            title="My LinkeIn"
            className="App__links__link"
          >
            <i className="fab fa-linkedin" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC7BOX17vTKwd6sYqwf96rNQ"
            taget="_blank"
            title="My YouTube"
            className="App__links__link"
          >
            <i className="fab fa-youtube-square" />
          </a>

          <a
            href="https://www.instagram.com/xfor/"
            taget="_blank"
            title="My Instagram"
            className="App__links__link"
          >
            <i className="fab fa-instagram" />
          </a>

          <a
            href="https://twitter.com/xforartworks"
            taget="_blank"
            title="My Twitter"
            className="App__links__link"
          >
            <i className="fab fa-twitter-square" />
          </a>
        </div>

        <div className="App__contact">
          <div className="App__contact__detail">
            <div className="App__contact__detail__icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="App__contact__detail__text">
              michal@wrzosek.pl
            </div>
          </div>

          <div className="App__contact__detail">
            <div className="App__contact__detail__icon">
              <i className="fas fa-phone" />
            </div>
            <div className="App__contact__detail__text">
              +48 690-56-26-46
            </div>
          </div>

          <div className="App__contact__detail">
            <div className="App__contact__detail__icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="App__contact__detail__text">
              ul. Etiudy Rewolucyjnej 48 lok. 2<br />
              02-647 Warszawa, POLAND
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
