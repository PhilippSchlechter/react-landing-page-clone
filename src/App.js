/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import googleCal from './images/Google-calendar-logo.webp';
import logo from './images/logo.svg';
import notion from './images/Notion-logo.webp';
import outlookCal from './images/Outlook-mail-logo.webp';
import outlookMail from './images/Outlook-mail-logo.webp';
import pflanzer from './images/planzer-io-platform.svg';
import trello from './images/Trello-logo.webp';

const mainStyles = css`
  background: #f3f5ff;
`;
const headerStyles = css`
  display: flex;
  justify-content: space-between;
  width: 1198px;
  height: 50px;
  padding: 30px 24px 29px 24px;
  margin: 0px 648px 0px 648px;
`;
const navStylesCenter = css`
  display: flex;
  margin-left: 36px;
  a {
    margin-right: 42px;
    margin-top: 20px;
    font-size: 15px;
    font-weight: 520;
    line-height: 1.125em;
  }
`;
const navStylesRight = css`
  margin-top: 16px;
  margin-left: 40px;
  a:first-child {
    margin-right: 18px;
  }
`;
const buttonStyles = css`
  background-color: #5335d9;
  border-radius: 1e9px;
  padding: 16px 24px;
  font-size: 16px;
  color: #fff;
`;

const section1Styles = css`
  width: 2543px;
  height: 1355px;
  padding-top: 130px;
  padding-bottom: 132px;
  display: block;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 56px;
    line-height: 1.276em;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-align: center;
  }

  p {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #7a7d9c;
    font-size: 18px;
    line-height: 1.667em;
    font-weight: 500;
  }

  a {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 40px 1117px 0px 1117px;
    font-weight: 700;
  }
`;
const imgPflanzerStyles = css`
  margin: 100px 0px 150px 670px;
  width: 1198px;
  height: 674px;
`;
const nativeIntegrationStyles = css`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding-bottom: 80px;
  img + img {
    margin-left: 80px;
  }
`;

export default function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <img src={logo} width="150" height="43" alt="logo planzerio" />
        <nav css={navStylesCenter}>
          <a href="#aaa">Pricing</a>
          <a href="#aaa">Features</a>
          <a href="#aaa">Use Cases</a>
        </nav>
        <div css={navStylesRight}>
          <a href="#aaa">Sign in</a>
          <a css={buttonStyles} href="#aaa">
            Get started ➔
          </a>
        </div>
      </header>
      <main>
        <section css={section1Styles}>
          <h1>
            Stop losing track of <br /> your tasks
          </h1>
          <p>
            Planzer.io lets you plan your day with tasks from multiple project
            management <br /> tools in one simple view, to help you be more
            productive.
          </p>
          <a css={buttonStyles} href="#aaasa">
            Start planning your day ➔
          </a>
          <img
            css={imgPflanzerStyles}
            src={pflanzer}
            alt="planzer-io-platform"
          />
          <p>Here are some of our native integrations</p>
          <br />
          <div css={nativeIntegrationStyles}>
            <img src={notion} alt="notion-logo" />
            <img src={trello} alt="trello-logo" />
            <img src={outlookMail} alt="outlook-logo" />
            <img src={googleCal} alt="google Calender-logo" />
            <img src={outlookCal} alt="outlook Calender-logo" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </main>
    </div>
  );
}
