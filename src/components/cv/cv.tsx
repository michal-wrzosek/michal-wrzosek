import { QRCodeSVG } from "qrcode.react";
import React from "react";

import "./index.scss";
import type { CvData } from "./types";
import Link from "next/link";
import { CalendarIcon, FlagIcon } from "@heroicons/react/16/solid";
import {
  AtSymbolIcon,
  GlobeAltIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

interface Props {
  readonly data: CvData;
}

export const CV = ({ data }: Props) => (
  <div className="CV">
    <div className="CV__buttons">
      <Link className="CV__buttons__button" title="Home" href="/">
        Back to homepage
      </Link>
    </div>
    <div className="CV__paper">
      <div className="CV__person">
        <div className="CV__person__avatar">
          <img
            alt="Avatar"
            className="CV__person__avatar__img"
            src={data.person.avatarImg}
          />
        </div>
        <div className="CV__person__details">
          <div className="CV__person__details__full-name">
            {data.person.fullName}
          </div>

          <div className="CV__person__details__cv-label">Curriculum Vitae</div>

          <div className="CV__person__details__other">
            <div className="CV__person__details__other__side">
              <div className="CV__person__details__other__side__detail">
                <div className="CV__person__details__other__side__detail__icon">
                  <CalendarIcon width={12} height={12} />
                </div>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.dateOfBirth}
                  </div>
                </div>
              </div>

              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <FlagIcon width={12} height={12} />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.nationality}
                  </div>
                </div>
              </div>

              {data.person.phoneNumber && (
                <div className="CV__person__details__other__side__detail">
                  <span className="CV__person__details__other__side__detail__icon">
                    <PhoneIcon width={12} height={12} />
                  </span>
                  <div className="CV__person__details__other__side__detail__lines">
                    <div className="CV__person__details__other__side__detail__lines__line">
                      {data.person.phoneNumber}
                    </div>
                  </div>
                </div>
              )}

              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <AtSymbolIcon width={12} height={12} />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <div className="CV__person__details__other__side__detail__lines__line">
                    {data.person.email}
                  </div>
                </div>
              </div>

              <div className="CV__person__details__other__side__detail">
                <span className="CV__person__details__other__side__detail__icon">
                  <GlobeAltIcon width={12} height={12} />
                </span>
                <div className="CV__person__details__other__side__detail__lines">
                  <a
                    className="CV__person__details__other__side__detail__lines__line"
                    href={data.person.website}
                    rel="noreferrer"
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
                  <MapPinIcon width={12} height={12} />
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
          <div className="CV__section__header__wrapper">WORK EXPERIENCE:</div>
        </div>
        <div className="CV__section__content">
          <div className="CV__jobs">
            {data.jobs.map((job, jobIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={jobIndex} className="CV__jobs__job">
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
                    {job.description.map((description, descriptionIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div
                        key={descriptionIndex}
                        className="CV__jobs__job__details__description__paragraph"
                      >
                        {description}
                      </div>
                    ))}
                  </div>
                  <div className="CV__jobs__job__details__buzzwords">
                    {job.buzzwords.map((buzzword, buzzwordIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div
                        key={buzzwordIndex}
                        className="CV__jobs__job__details__buzzwords__buzzword"
                      >
                        {buzzword}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="CV__section">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">SIDE PROJECTS:</div>
        </div>
        <div className="CV__section__content">
          <div className="CV__side-projects">
            {data.sideProjects.map((sideProject, sideProjectIndex) => (
              <a
                // eslint-disable-next-line react/no-array-index-key
                key={sideProjectIndex}
                className="CV__side-projects__side-project"
                href={sideProject.url}
                rel="noreferrer"
                target="_blank"
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
            ))}
          </div>
        </div>
      </div>
      <div className="CV__section CV__section_small">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">EDUCATION:</div>
        </div>
        <div className="CV__section__content">
          <div className="CV__education">
            {data.education.map((study, studyIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={studyIndex} className="CV__education__study">
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
            ))}
          </div>
        </div>
      </div>
      <div className="CV__section CV__section_small">
        <div className="CV__section__header">
          <div className="CV__section__header__wrapper">PERSONAL SKILLS:</div>
        </div>
        <div className="CV__section__content">
          <div className="CV__skills">
            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <GlobeAltIcon width={62} height={62} />
                </div>
              </div>
              <div className="CV__skills__skill__label">Languages:</div>
              <div className="CV__skills__skill__list">
                {data.skills.languages.map((language, languageIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div
                    key={languageIndex}
                    className="CV__skills__skill__list__item"
                  >
                    {language.name} - {language.level}
                  </div>
                ))}
              </div>
            </div>

            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <UserCircleIcon width={62} height={62} />
                </div>
              </div>
              <div className="CV__skills__skill__label">I am:</div>
              <div className="CV__skills__skill__list">
                <div className="CV__skills__skill__list__item">
                  {data.skills.iAm.join(", ")}
                </div>
              </div>
            </div>

            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <HeartIcon width={62} height={62} />
                </div>
              </div>
              <div className="CV__skills__skill__label">I love:</div>
              <div className="CV__skills__skill__list">
                {data.skills.iLove.map((love, loveIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div
                    key={loveIndex}
                    className="CV__skills__skill__list__item"
                  >
                    {love}
                  </div>
                ))}
              </div>
            </div>

            <div className="CV__skills__skill">
              <div className="CV__skills__skill__icon">
                <div className="CV__skills__skill__icon__wrapper">
                  <PlusCircleIcon width={62} height={62} />
                </div>
              </div>
              <div className="CV__skills__skill__label">Other:</div>
              <div className="CV__skills__skill__list">
                {data.skills.other.map((skill, skillLove) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div
                    key={skillLove}
                    className="CV__skills__skill__list__item"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="CV__qrcode">
            <QRCodeSVG value={data.qrCodeValue} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
