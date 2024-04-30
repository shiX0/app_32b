import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">MeoW!</a>
    <form class="d-flex" role="search">
      <Link to={'/login'} class="btn btn-outline-success me-3" type="submit" >Login</Link>
      <Link to={'/register'} class="btn btn-outline-danger" type="submit">Register</Link>
    </form>
  </div>
</nav>        </>
    )
}

export default Navbar
