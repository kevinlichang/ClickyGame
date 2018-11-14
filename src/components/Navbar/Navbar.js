import React from 'react';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse my-2" id="navbarNav">

  
          <h4 className="mr-auto"><a href="/">Clicky Game</a></h4>
      
  
          <h4 className="mx-auto">{props.message}</h4>
      
  
          <h4 className="ml-auto">Score: {props.score} | Top Score: {props.topScore}</h4>
      

    </div>
  </nav>
)

export default Navbar;