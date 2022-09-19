/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './images/logo.svg';

const mainStyles = css`
  background: #f3f5ff;
`;
const headerStyles = css`
  display: flex;
  justify-content: space-between;
`;
const navStyles = css``;

export default function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <img src={logo} width="80" height="60" alt="logo planzerio" />
        <nav css={navStyles}>
          <a href="#aaa">Pricing</a>
          <a href="#aaa">Features</a>
          <a href="#aaa">Use Cases</a>
        </nav>
        <div>
          <a href="#aaa">Sign in</a>
          <a href="#aaa">Get started</a>
        </div>
      </header>
    </div>
  );
}
