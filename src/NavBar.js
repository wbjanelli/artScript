import React from 'react';

function NavBar({ websiteTitle = "needs title" }) {
  return (
    <div className="NavBar">
      <h1>{websiteTitle}</h1>
    </div>
  );
}

export default NavBar;
