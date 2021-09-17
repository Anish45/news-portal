import React from "react";
import Logo from "./kantipurnews.png";
import './index.css'
import { useHistory } from "react-router";

function Header() {

    const history = useHistory();

    const userLogout = () => {
        console.clear();
        history.push("/logout");
        
      };
  return (
    <>
      {/* <div className="row pt-2">
        <div className="col-6">
          <div className="row">
            <div className="col-2">
              <img src={Logo} alt="logo" height="70px" width="110px" />
            </div>
            <div className="col-3 pt-4">
              <h5>Kantipur News</h5>
            </div>
          </div>
        </div>
        <div className="col-6">
            <p>thiifsns dfsd f dsfhbds fdshf dsfa  dasf sf</p>
        </div>
      </div> */}


<nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a className="navbar-brand mt-2 mt-lg-0" href='www.dsdsa.com'>
        <img
          src={Logo}
          height="45"
          alt=""
          loading="lazy"
        />
      </a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <h5>Kantipur News</h5>
      </ul>
     
    </div>
    

 
    <div class="d-flex align-items-center">
     
     

     
      <a
        class="text-reset me-3 dropdown-toggle hidden-arrow"
        href="dasdasdas.dssadasd"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fas fa-bell"></i>
        <span class="badge rounded-pill badge-notification bg-danger">1</span>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="dsadasdas.dassdasd">Some news</a>
        </li>
        <li>
          <a class="dropdown-item" href="dadasdasd.sdads">Another news</a>
        </li>
        <li>
          <a class="dropdown-item" href="dasdasd.sdadsad">Something else here</a>
        </li>
      </ul>

      
      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="dsadas"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="dsadsa">My profile</a>
        </li>
        <li>
          <a class="dropdown-item" href="dsadds">Settings</a>
        </li>
        <li>
          <a class="dropdown-item" href="dsadsad" onClick={userLogout}>Logout</a>
        </li>
      </ul>
    </div>
   
  </div>
 
</nav>

    </>
  );
}

export default Header;
