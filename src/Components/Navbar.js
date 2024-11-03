import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 navbar-${props.mode} bg-${props.mode}`}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className={`nav-item dropdown `}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className={`dropdown-menu  bg-${props.mode}`}>
            <li><a className={`dropdown-item text-${props.mode === 'light' ? 'dark' : 'light'} ${
        props.mode === 'dark' ? 'dropdown-item-dark-mode-hover' : 'dropdown-item-light-mode-hover'
      }`} href="/">{props.sub}</a></li>
            <li><a className={`dropdown-item text-${props.mode === 'light' ? 'dark' : 'light'} ${
        props.mode === 'dark' ? 'dropdown-item-dark-mode-hover' : 'dropdown-item-light-mode-hover'
      }`} href="/">Another action</a></li>
            <li><hr className={`dropdown-divider text-${props.mode==='light'?'dark':'light'}`}/></li>
            <li><a className={`dropdown-item text-${props.mode === 'light' ? 'dark' : 'light'} ${
        props.mode === 'dark' ? 'dropdown-item-dark-mode-hover' : 'dropdown-item-light-mode-hover'
      }`} href="/">Something else here</a></li>
          </ul>
        </li>
        <li>    <div className={`form-check form-switch my-2 ms-5 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
</li>
<li><button className='btn btn-primary mx-5' onClick={props.greenmode}>Color green</button></li>
      
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )

}

Navbar.prototype = {title: PropTypes.string.isRequired, sub: PropTypes.string.isRequired}

// Navbar.defaultProps = {

//     title: 'Not set yet',
//     sub: 'not set yet'
// }