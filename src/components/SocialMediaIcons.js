import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0 8px !important;
  @media only screen and (max-width: 768px) {
    margin-top: -4rem;
  }
  .container {
    @media only screen and (max-width: 768px) {
      justify-content: center;
      display: contents;
      justify-items: center;
    }
  }
  .columns {
    @media only screen and (max-width: 768px) {
      justify-content: center;
      display: contents;
    }
  }
  .column {
  }
  .is-two-thirds {
    justify-content: left;
    display: flex;
    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  .container {
    margin-left: -0.5rem !important;
  }
  .link {
    margin-right: 2.6rem !important;
  }
  .dis {
    margin-right: 2.6rem !important;
    @media only screen and (max-width: 768px) {
      margin-right: 0rem !important;
      margin-top: -10px;
    }
  }
  .discord img {
    height: 22px;
    color: rgb(78, 72, 72);
  }
  img {
    @media only screen and (max-width: 768px) {
      width: 100% !important;
    }
  }
  .level-item:last-child {
    @media only screen and (max-width: 768px) {
      margin-top: -10px;
    }
  }
`;

const SocialIcons = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-two-thirds">
          <p className="level-item has-text-centered">
            <a className="dis discord is-info" href="https://dexpay.me/discord">
              <img src="/images/social/discord.svg" alt="discord" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://t.me/joindexlab">
              <img src="/images/social/icon_telegram.svg" alt="telegram" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://medium.com/dexlab-io">
              <img src="/images/social/icon_medium.svg" alt="medium" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://twitter.com/dexlab_io">
              <img src="/images/social/icon_twitter.svg" alt="twitter" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://github.com/dexlab-io">
              <img src="/images/social/icon_github.svg" alt="github" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default SocialIcons;
