import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import mainImage from './main-image.jpg'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img
          src={mainImage}
          className="Home__main-image"
          alt="Michał flying over Tokyo"
        />
        <div className="Home__name">
          Michał Wrzosek
        </div>
        <div className="Home__subtitle">
          Entrepreneur, Web Consultant & Programmer
        </div>
        <div className="Home__links">
          <a
            href="https://github.com/michal-wrzosek"
            taget="_blank"
            title="My GitHub"
            className="Home__links__link"
          >
            <i className="fab fa-github-square" />
          </a>

          <a
            href="https://www.facebook.com/xfor.artworks"
            taget="_blank"
            title="My Facebook"
            className="Home__links__link"
          >
            <i className="fab fa-facebook-square" />
          </a>

          <a
            href="https://www.linkedin.com/in/michal-wrzosek-cv/"
            taget="_blank"
            title="My LinkedIn"
            className="Home__links__link"
          >
            <i className="fab fa-linkedin" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC7BOX17vTKwd6sYqwf96rNQ"
            taget="_blank"
            title="My YouTube"
            className="Home__links__link"
          >
            <i className="fab fa-youtube-square" />
          </a>

          <a
            href="https://www.instagram.com/xfor/"
            taget="_blank"
            title="My Instagram"
            className="Home__links__link"
          >
            <i className="fab fa-instagram" />
          </a>

          <a
            href="https://twitter.com/xforartworks"
            taget="_blank"
            title="My Twitter"
            className="Home__links__link"
          >
            <i className="fab fa-twitter-square" />
          </a>

          <a
            href="https://medium.com/@xfor"
            taget="_blank"
            title="My Medium"
            className="Home__links__link"
          >
            <i className="fab fa-medium" />
          </a>
        </div>

        <div className="Home__contact">
          <div className="Home__contact__detail">
            <div className="Home__contact__detail__icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="Home__contact__detail__text">
              michal@wrzosek.pl
            </div>
          </div>

          <div className="Home__contact__detail">
            <div className="Home__contact__detail__icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="Home__contact__detail__text">
              Im Tale 8<br />
              20251 Hamburg, GERMANY
            </div>
          </div>
        </div>

        <div className="Home__buttons">
          <Link
            to="/cv"
            title="CV"
            className="Home__buttons__button"
          >
            Show CV
          </Link>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  match: PropTypes.object.isRequired
}

export default Home;
