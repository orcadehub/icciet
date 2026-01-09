document.getElementById('header').innerHTML = `
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        
        <!-- Logo -->
        <a href="/" class="navbar-brand d-flex align-items-center">
          <img src="./images/mbulogo.png" width="100" height="60" alt="home" class="rounded" />
          <h1 class="text-white mx-3 mb-0">
            ICCIET <strong style="color: #F0C38E;">2026</strong>
          </h1>
        </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu Items -->
        <div class="collapse navbar-collapse bg-dark" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-evenly align-items-center w-100 flex-column flex-lg-row py-2">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="about-dropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="about-dropdown">
                <li><a class="dropdown-item" href="Institution.html">About University</a></li>
                <li><a class="dropdown-item" href="department.html">About SET</a></li>
                <li><a class="dropdown-item" href="conference.html">About Conference</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="callforpapers.html" class="nav-link text-white">Call For Papers</a></li>
            <li class="nav-item"><a href="submissions.html" class="nav-link text-white">Submit Paper</a></li>
            <li class="nav-item"><a href="publication.html" class="nav-link text-white">Publication</a></li>
            <li class="nav-item"><a href="registration.html" class="nav-link text-white">Registration</a></li>
            <li class="nav-item"><a href="keynotespeakers.html" class="nav-link text-white">Keynote Speakers</a></li>
            <li class="nav-item"><a href="imp_dates.html" class="nav-link text-white">Important Dates</a></li>
            <li class="nav-item"><a href="sessions.html" class="nav-link text-white">Special Sessions</a></li>
            <li class="nav-item"><a href="cnf_team.html" class="nav-link text-white">Conference Team</a></li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
`;
