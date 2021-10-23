import React from 'react';
import './info.css';

import {ContactContainer} from './InfoElements';

function InfoSection({
  lightText,
  lightBg,
  imgStart,
  years,
  headline,
  description,
  darkText,
  number,
  id,
  img,
  alt,
  dark,
  dark2,
  primary,
}) {
  return (
    <>
      <ContactContainer>
        <div id="info-container">
          <div className="contact-info">
            <div className="imageContainer">
              <img
                src={require('../images/about.png')}
                alt=""
                className="contactImage"
              />
            </div>
          </div>
          <div className="man">
            <h1 className="main">
              Award winning engineering and Management company
            </h1>
            <p className="cons">
              Maston George is a leading management and Engineering company with
              expertise in a lot of fields. Our clients include internatinal
              corporations, government agencies and private enterprises{' '}
            </p>
            <div className="experience">
              <div className="years">
                <p>YEARS EXPERIENCE</p>
                <h1>28y</h1>
              </div>
              <div className="years">
                <p>Completed projects</p>
                <h1>100+</h1>
              </div>
              <div className="years">
                <p>Ongoing projects</p>
                <h1>10+</h1>
              </div>
            </div>
          </div>
        </div>

        {/* </ContactWrapper> */}
      </ContactContainer>

      {/* <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <div className="experience">
                  <div className="years">
                    <p>YEARS EXPERIENCE</p>
                    <h1>28y</h1>
                  </div>
                  <div className="years">
                    <p>Completed projects</p>
                    <h1>100+</h1>
                  </div>
                  <div className="years">
                    <p>Ongoing projects</p>
                    <h1>10+</h1>
                  </div>
                </div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> */}
    </>
  );
}

export default InfoSection;
