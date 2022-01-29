import React from 'react';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">receipts.sg</a>
        <ul className="right">
          <li>
            <a>Login With Google</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Header;
