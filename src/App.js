/** @jsxImportSource @emotion/react */
// import emotion and images
import { css } from '@emotion/react';
import googleCal from './images/Google-calendar-logo.webp';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
import icon6 from './images/icon6.svg';
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
// global buttonstyles
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
// big image in section1
const imgPflanzerStyles = css`
  margin: 100px 0px 150px 670px;
  width: 1198px;
  height: 674px;
`;
// logos at the bottom of section1
const nativeIntegrationStyles = css`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  width: auto;
  padding-bottom: 80px;
  margin-bottom: 500px;
  img + img {
    margin-left: 80px;
  }
`;
const section2Styles = css`
  margin-top: 500px;
  h2 {
    display: flex;
    justify-content: center;
    font-size: 40px;
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
`;
const badgeStyles = css`
  display: flex;
  justify-content: center;
  color: #5335d9;
  font-size: 16px;
  line-height: 1.125em;
  font-weight: 700;
  background-color: rgba(83, 53, 217, 0.07);
  border-radius: 1e9px;
  border: none;
  margin: 400px auto 30px auto;
  padding: 20px;
`;

const cardTemplateStyles = css`
  display: grid;
  grid-template-columns: 380px 380px 380px;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 38px;
  grid-column-gap: 38px;
  margin-top: 150px;
  justify-content: center;
  justify-items: center;

  h3 {
    color: #0b0a33;
    font-size: 28px;
    line-height: 1.5em;
    font-weight: 700;
  }
  p {
    color: #7a7d9c;
    font-size: 17px;
    line-height: 1.667em;
    font-weight: 500;
  }
  img {
    border-radius: 25px;
    max-width: 86px;
    margin-bottom: 32px;
  }
`;
const cardStyles = css`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const button2Styles = css`
  background-color: #5335d9;
  border-radius: 1e9px;
  border: none;
  padding: 16px 24px;
  font-size: 16px;
  color: #fff;
  margin: 40px auto 30px auto;
  display: flex;
  justify-content: center;
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
        </section>
        <section css={section2Styles}>
          <button css={badgeStyles}>Benefits</button>
          <h2>You'll never miss a deadline!</h2>
          <p>
            With Planzer.io, you will never miss a deadline because you lost
            track <br /> of your tasks. You can easily organize your day, track
            your goals <br /> and become more productive.
          </p>
        </section>

        <div css={cardTemplateStyles}>
          <div css={cardStyles}>
            <img src={icon1} alt="" />
            <h3>Organize your day</h3>
            <p>
              Organize your tasks across multiple <br /> applications, and don't
              loose track of <br /> your day.
            </p>
          </div>
          <div css={cardStyles}>
            <img src={icon2} alt="" />
            <h3>Track progress</h3>
            <p>
              Planzer.io can easily track your goals <br /> by assigning tasks.
              Of course, you <br /> will follow your progress as well.
            </p>
          </div>
          <div css={cardStyles}>
            <img src={icon3} alt="" />
            <h3>Set goals</h3>
            <p>
              Once you set specific goals with time <br /> frames, you can
              organize and <br />
              manage your workload.
            </p>
          </div>
          <div css={cardStyles}>
            <img src={icon4} alt="" />
            <h3>Limit distractions</h3>
            <p>
              Concentrating on work for extended <br /> periods in an organized
              workspace is <br /> much easier.
            </p>
          </div>
          <div css={cardStyles}>
            <img src={icon5} alt="" />
            <h3>Calender overview</h3>
            <p>
              Planzer.io keeps you aware of what <br /> meetings and due dates
              you have <br />
              coming up in your schedule.
            </p>
          </div>
          <div css={cardStyles}>
            <img src={icon6} alt="" />
            <h3>Practice accountability</h3>
            <p>
              Accountability includes keeping your <br /> to-do list in mind.
              You should <br /> evaluate your goal list, reflect on <br /> your
              progress and identify the steps <br /> you need to take.
            </p>
          </div>
        </div>

        <button css={button2Styles} href="#aaa">
          Plan your work ➔
        </button>

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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}
