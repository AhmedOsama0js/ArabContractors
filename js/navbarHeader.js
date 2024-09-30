const Header = document.getElementById("headerNavbar");

const ServicesLocation = () => {
  const location = window.location.pathname;
  if (location === "/index.html") {
    return ` <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICES
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#AboutOurApartment">About Our Apartment</a></li>
            <li><a class="dropdown-item" href="#services">Services</a></li>
            <li><a class="dropdown-item" href="#DealForHouse">Deal For House</a></li>
            <li><a class="dropdown-item" href="#client">clients</a></li>
            <li><a class="dropdown-item" href="#GetInTouch">Get In Touch</a></li>
        </li>`;
  } else {
    return `<li>`;
  }
};

Header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="index.html"><img class="logo" src="../images/ابناء المقاولون .jpg" /></a>
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
        ${ServicesLocation()}
      </ul>
    </div>
  </div>
  </nav>
`;

AOS.init();
