import React from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode.react'
import { Link } from 'react-router-dom'
import './index.css'

const CV = ({ data }) => (
  <div className="CV">
    <div className="CV__buttons">
      <Link
        to="/"
        title="Home"
        className="CV__buttons__button"
      >
        Back to homepage
      </Link>
    </div>
    <div className="CV__paper">
      <div className="CV__person">
        <div className="CV__person__avatar">
          <img
            src={data.person.avatarImg}
            className="CV__person__avatar__img"
            alt="Avatar"
          />
        </div>
        <div className="CV__person__details">

          <div className="CV__person__details__full-name">
            {data.person.fullName}
          </div>

          <div className="CV__person__details__cv-label">
            Curriculum Vitae
          </div>

          <div className="CV__person__details__other">
            <div className="CV__person__details__other__side">
              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <i className="fas fa-calendar-alt fa-fw" />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.dateOfBirth}
                  </div>
                </div>
              </div>

              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <i className="fas fa-flag fa-fw" />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.nationality}
                  </div>
                </div>
              </div>

              {data.person.phoneNumber &&
                <div className="CV__person__details__other__side__detail">
                  <span className="CV__person__details__other__side__detail__icon">
                    <i className="fas fa-mobile-alt fa-fw" />
                  </span>
                  <div className="CV__person__details__other__side__detail__lines">
                    <div className="CV__person__details__other__side__detail__lines__line">
                      {data.person.phoneNumber}
                    </div>
                  </div>
                </div>
              }

              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <i className="fas fa-at fa-fw" />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.email}
                  </div>
                </div>
              </div>

              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <i className="fas fa-globe fa-fw" />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <a
                    className="CV__person__details__other__side__detail__lines__line"
                    href={data.person.website}
                    target="_blank"
                  >
                    {data.person.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="CV__person__details__other__side">
              <div className="CV__person__details__other__side__detail">
                <div className="CV__person__details__other__side__detail__icon">
                  <i className="fas fa-map-marked-alt fa-fw" />
                </div>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.addressLine1}
                  </div>
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.addressLine2}
                  </div>
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.addressLine3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CV__section">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">
            WORK EXPERIENCE:
          </div>
        </div>
        <div className="CV__section__content">
          <div className="CV__jobs">
            {data.jobs.map((job, jobIndex) =>
              <div
                key={jobIndex}
                className="CV__jobs__job"
              >
                <div className="CV__jobs__job__dates">
                  <div className="CV__jobs__job__dates__wrapper">
                    <div className="CV__jobs__job__dates__wrapper__date">
                      {job.dateFinished}
                    </div>
                    <div className="CV__jobs__job__dates__wrapper__date">
                      {job.dateStarted}
                    </div>
                  </div>
                </div>

                <div className="CV__jobs__details">
                  <div className="CV__jobs__job__details__position">
                    {job.position}
                  </div>
                  <div className="CV__jobs__job__details__location">
                    {job.company}, {job.location}
                  </div>
                  <div className="CV__jobs__job__details__description">
                    {job.description.map((description, descriptionIndex) =>
                      <div
                        key={descriptionIndex}
                        className="CV__jobs__job__details__description__paragraph"
                      >
                        {description}
                      </div>
                    )}
                  </div>
                  <div className="CV__jobs__job__details__buzzwords">
                    {job.buzzwords.map((buzzword, buzzwordIndex) =>
                      <div
                        key={buzzwordIndex}
                        className="CV__jobs__job__details__buzzwords__buzzword"
                      >
                        {buzzword}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="CV__section">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">
            SIDE PROJECTS:
          </div>
        </div>
        <div className="CV__section__content">
          <div className="CV__side-projects">
            {data.sideProjects.map((sideProject, sideProjectIndex) =>
              <a
                key={sideProjectIndex}
                href={sideProject.url}
                target="_blank"
                className="CV__side-projects__side-project"
              >
                <div className="CV__side-projects__side-project__title">
                  {sideProject.title}
                </div>
                <div className="CV__side-projects__side-project__url">
                  {sideProject.url}
                </div>
                <div className="CV__side-projects__side-project__description">
                  {sideProject.description}
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="CV__section CV__section_small">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">
            EDUCATION:
          </div>
        </div>
        <div className="CV__section__content">
          <div className="CV__education">
            {data.education.map((study, studyIndex) =>
              <div
                key={studyIndex}
                className="CV__education__study"
              >
                <div className="CV__education__study__dates">
                  <div className="CV__education__study__dates__wrapper">
                    <div className="CV__education__study__dates__wrapper__date">
                      {study.dateFinished}
                    </div>
                    <div className="CV__education__study__dates__wrapper__date">
                      {study.dateStarted}
                    </div>
                  </div>
                </div>
                <div className="CV__education__study__details">
                  <div className="CV__education__study__details__university">
                    {study.university}
                  </div>
                  <div className="CV__education__study__details__faculty">
                    {study.faculty}
                  </div>
                  <div className="CV__education__study__details__field-of-study">
                    {study.fieldOfStudy}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="CV__section CV__section_small">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">
            PERSONAL SKILLS:
          </div>
        </div>
        <div className="CV__section__content">
          <div className="CV__skills">
            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <i className="fas fa-globe fa-fw" />
                </div>
              </div>
              <div className="CV__skills__skill__label">
                Languages:
              </div>
              <div className="CV__skills__skill__list">
                {data.skills.languages.map((language, languageIndex) =>
                  <div
                    key={languageIndex}
                    className="CV__skills__skill__list__item"
                  >
                    {language.name} - {language.level}
                  </div>
                )}
              </div>
            </div>

            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <i className="far fa-user-circle fa-fw" />
                </div>
              </div>
              <div className="CV__skills__skill__label">
                I am:
              </div>
              <div className="CV__skills__skill__list">
                <div className="CV__skills__skill__list__item">
                  {data.skills.iAm.join(', ')}
                </div>
              </div>
            </div>

            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <i className="fas fa-heart fa-fw" />
                </div>
              </div>
              <div className="CV__skills__skill__label">
                I love:
              </div>
              <div className="CV__skills__skill__list">
                {data.skills.iLove.map((love, loveIndex) =>
                  <div
                    key={loveIndex}
                    className="CV__skills__skill__list__item"
                  >
                    {love}
                  </div>
                )}
              </div>
            </div>

            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <i className="fas fa-plus-circle fa-fw" />
                </div>
              </div>
              <div className="CV__skills__skill__label">
                Other:
              </div>
              <div className="CV__skills__skill__list">
                {data.skills.other.map((skill, skillLove) =>
                  <div
                    key={skillLove}
                    className="CV__skills__skill__list__item"
                  >
                    {skill}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="CV__qrcode">
            <QRCode value={data.qrCodeValue} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

CV.propTypes = {
  data: PropTypes.shape({
    qrCodeValue: PropTypes.string.isRequired,
    person: PropTypes.shape({
      avatarImg: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string,
      email: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      addressLine1: PropTypes.string.isRequired,
      addressLine2: PropTypes.string.isRequired,
      addressLine3: PropTypes.string.isRequired
    }).isRequired,
    jobs: PropTypes.arrayOf(PropTypes.shape({
      dateStarted: PropTypes.string.isRequired,
      dateFinished: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      buzzwords: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired,
    sideProjects: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    education: PropTypes.arrayOf(PropTypes.shape({
      dateStarted: PropTypes.string.isRequired,
      dateFinished: PropTypes.string.isRequired,
      university: PropTypes.string.isRequired,
      faculty: PropTypes.string.isRequired,
      fieldOfStudy: PropTypes.string.isRequired
    })),
    skills: PropTypes.shape({
      languages: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired
      })).isRequired,
      iAm: PropTypes.arrayOf(PropTypes.string).isRequired,
      iLove: PropTypes.arrayOf(PropTypes.string).isRequired,
      other: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }).isRequired
}

export default CV
