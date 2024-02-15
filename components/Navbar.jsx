import React, { useState } from "react";

function Navbar(props) {

  const [Place, SetPlace] = useState("Sydney");
  function EventHandler(event) {
    SetPlace(event.target.value)
    return SetPlace;
  }



  function Submission(event){
    event.preventDefault();
    props.getData(Place);
  }
  return (
    <div className="mlm">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <img
                  style={{ width: "40px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVO41eBhNJ0GA7I5cks5i99A0bT5oX6xXrfG0vnlVuc1cDC3Nbeug26tBq0EThHp0wig&usqp=CAU"
                  alt="Logo"
                />
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Bloom Weather
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/about">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                id="inputfield"
                className="form-control me-2"
                onChange={EventHandler}
                type="search"
                placeholder="Enter City name"
                aria-label="Search"
              />
              <button
                id="Search"
                className="btn btn-outline-primary"
                type="submit"
                onClick={Submission}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
