import React from 'react';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className="collapse navbar-collapse container" id="navbarNav">
      
      <h3 className="navbar-nav mr-auto">

        Clicky Game

      </h3>
      <h3 className="navbar-nav mx-auto">
        {props.message}
      </h3>
      <h3 className="navbar-nav ml-auto">
        Score: {props.score}
      </h3>
    </div>
  </nav>
)

export default Navbar;