// import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      <a href="/auth/google" style={{ marginRight: '15px' }}>Login with Google</a>
      <a href="/auth/logout">Logout</a>
    </nav>
  );
};

export default Navbar;
