import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
    <nav class="navbar navbar-expand-lg"
     style={{backgroundColor:'#335c67'}}>

    <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Cine Data</a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto ">
            <li class="nav-item ">
                <Link class="nav-link active text-white" to={" "}>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to={"/create-movie/"}>Create Movies</Link>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Artists</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Login</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header