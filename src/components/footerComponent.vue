<template>
  <div class="footer">
    <div class="container text-center text-md-start">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
        <div class="col">
          <div class="item">
            <h5>Rentomojo</h5>
            <ul class="list-unstyled">
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Culture</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Investors</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Careers</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Contact</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Our Benefits</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Sitemap</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="item">
            <h5>Information</h5>
            <ul class="list-unstyled">
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Blog</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >FAQ</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Documents Recuired</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="item">
            <h5>Profiles</h5>
            <ul class="list-unstyled">
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Shipping Policy</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Cancellation & Return</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Privacy Policy</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Rental Terms & Conditions</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="text-decoration-none text-black-50 py-1 d-block"
                  >Referral Terms & Conditions</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="item">
            <h5>Heed Help</h5>
            <button class="btn btn-outline-dark">
              Chat With Us (9AM - 6PM)
            </button>
            <h6 class="text-uppercase mt-4">Download App</h6>
            <div class="download-app">
              <a href="/" class="play-store d-inline-block me-2"></a>
              <a href="/" class="app-store d-inline-block"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: lightblue;
}
.footer .container {
  padding: 90px;
}
.footer .container a {
  font-size: 15px;
  transition: 0.5s;
}
.footer .container a:hover {
  text-decoration: underline !important;
  padding-left: 10px;
}
.footer .download-app a {
  background-image: url(../assets/icons__sprite-v2.svg);
  background-repeat: no-repeat;
  height: 32px;
}
.footer .download-app .app-store {
  background-position: 0 0;
  width: 106px;
}
.footer .download-app .play-store {
  background-position: 0 -958px;
  width: 110px;
}
</style>
