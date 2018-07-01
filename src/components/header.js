import React from 'react'
import Link from 'gatsby-link'

const NavLink = ({to, label}) => (
    <Link
        className="plainlink"
        to={to}
    >
        {label}
    </Link>
);

const links = [
    {
        to: "/blog",
        label: "Blog",
    },
    {
        to: "/podcasts",
        label: "Podcasts",
    },
    {
        to: "/books",
        label: "Library",
    },
    {
        to: "/portfolio",
        label: "Portfolio",
    },
];

const Header = ({siteTitle}) => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
      <div
          style={{
              margin: '0 auto',
              maxWidth: 980,
          }}
      >
      <header className="site__header">
          <h1 style={{margin: 0, paddingLeft: 10, textAlign: 'center', fontSize: '18px'}}>
              <Link to="/" >
                  Tony Faieta
              </Link>
          </h1>
          <nav>
              <ul className="nav">
                  {links.map(({to, label}) => <li>
                      <h5>
                      <NavLink to={to} label={label} />
                      </h5>
                  </li>)}
              </ul>
          </nav>
      </header>
      </div>
  </div>
);

export default Header


