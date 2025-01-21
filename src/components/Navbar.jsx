// import React from 'react';

const Navbar = () => {
  return (
    // const backendUrl = process.env.REACT_APP_BACKEND_URL;

    <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      <a href="https://google-calendar-backend-sand.vercel.app/auth/google" style={{ marginRight: '15px' }}>Login with Google</a>
      <a href="https://google-calendar-backend-sand.vercel.app/auth/logout">Logout</a>
    </nav>
  );
};

export default Navbar;
