import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props)

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">TextUtils</Link> */}
          <a className="navbar-brand" href="#">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">Abut</Link> */}
                <a className="nav-link" href="#">Abut</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div>
              <button onClick={props.toggleSecondaryMode} type="button" class="btn btn-secondary mx-2">Secondary</button>
              <button onClick={props.toggleSuccessMode} type="button" class="btn btn-success mx-2" >Success</button>
              <button onClick={props.toggleDangerMode} type="button" class="btn btn-danger mx-2">Danger</button>
              <button onClick={props.toggleWarningMode} type="button" class="btn btn-warning mx-2">Warning</button>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input checked={props.mode !== "light" } className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar