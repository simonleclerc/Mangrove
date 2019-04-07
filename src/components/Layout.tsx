import React, { FunctionComponent } from 'react';

import Header from 'src/components/Header';
import { rhythm } from '../utils/typography';

export type LayoutProps = {
  location: Location;
  title?: string;
};

const Layout: FunctionComponent<LayoutProps> = (props) => {
  const { title, children } = props;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Header title={title} />
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
