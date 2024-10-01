const Header = document.getElementById("headerNavbar");

Header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="index.html"><img class="logo" src="./images/ابناء المقاولون .jpg" alt="" /></a>
    <button class="navbar-toggler border border-secondary border-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon d-flex align-items-center justify-content-center ">
      <i class="bi bi-list"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">CONTACT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Services.html">SERVICES</a>
        </li>
    </div>
  </div>
  </nav>
`;

AOS.init();
