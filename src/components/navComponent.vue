<template>
  <div class="container col-12">
    <nav class="navbar ps-5 pe-5 row sticky-top">
      <div class="col-3">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="33"
            data-name="Layer 1"
            id="logo"
            y="499"
            class="d-none d-md-block"
          >
            <path
              fill="#db3327"
              d="M43.3 1.2H12.4a3.6 3.6 0 00-3.6 3.6V26l-4 6.9h35a3.6 3.6 0 003.6-3.6V8l4-6.8zM21.4 13.6c-1.3.1-2.5 1.2-2.5 3.8v6.2h-3.4V10.4h.5a2.6 2.6 0 012.8 2 3.8 3.8 0 013.8-2.1h1l-1.9 3.3zM36.6 17v6.8h-.5c-1.9 0-3-1-3-3.4v-3.8c0-1.9-.9-3.1-2.6-3.1s-2.7 1.1-2.7 3.8v6.3h-3.5v-7c0-1.5-.5-2.6-1.7-3l1.9-3.2a4.6 4.6 0 012.7 2.2 5.3 5.3 0 014.6-2.3c3.4 0 4.8 2.5 4.8 5.8z"
            />
            <path
              fill="#6d6d6d"
              d="M148.3 11.5a6.4 6.4 0 016.7 6.6 6.7 6.7 0 01-13.4 0 6.4 6.4 0 016.7-6.6zm0 10.1a3.4 3.4 0 003.5-3.5 3.5 3.5 0 10-6.9 0 3.4 3.4 0 003.4 3.5zm11.6 1.6a6.1 6.1 0 01-3.4 5.8l-2-2.2a3.8 3.8 0 002.1-3.5V11.9h3.3zm-1.7-16.5c1.2 0 1.9.4 1.9 1.6s-.7 1.7-1.9 1.7-1.9-.5-1.9-1.7.8-1.6 1.9-1.6zm10.3 4.8a6.4 6.4 0 016.7 6.6 6.7 6.7 0 01-13.4 0 6.4 6.4 0 016.7-6.6zm0 10.1a3.4 3.4 0 003.5-3.5 3.5 3.5 0 10-6.9 0 3.4 3.4 0 003.4 3.5zm-88 1.4a8.3 8.3 0 01-5.2 1.7c-4.7 0-6.8-2.9-6.8-6.5a6.3 6.3 0 016.6-6.6c3.8 0 5.6 2.3 5.6 5.2a11.5 11.5 0 01-.3 2.4h-8.5a3.1 3.1 0 003.4 2.7 6.8 6.8 0 003.1-.8.9.9 0 011.2.4zm-3.1-6.8c0-1-.8-1.9-2.4-1.9a2.8 2.8 0 00-3 2.3h5.4a2.6 2.6 0 00.1-.4zm23.1-7.5v3.2h5.4a11.7 11.7 0 00-1.6 2.6h-3.8v5.1c0 1.5.6 2.4 1.7 2.4a4.6 4.6 0 002.3-.6 5.3 5.3 0 001.2 2.1 8.7 8.7 0 01-4.6 1.1c-2.4 0-4-1.5-4-4.4v-5.7h-2a11.3 11.3 0 00-1.2-2.6h3.2l.4-3.2zm-6.6 11.8v-3.3c0-3.1-1.4-5.5-4.6-5.5a5.2 5.2 0 00-4 1.7v-1.5H82v12.4h3.3v-5.7c0-2.4 1.4-3.9 2.8-3.9s2.5 1.1 2.5 3v3.6c0 2.3 1 3.3 2.9 3.3h.5z"
            />
            <path
              fill="#6d6d6d"
              d="M111.9 11.5a6.4 6.4 0 016.7 6.6 6.7 6.7 0 01-13.4 0 6.4 6.4 0 016.7-6.6zm0 10.1a3.4 3.4 0 003.5-3.5 3.5 3.5 0 10-6.9 0 3.4 3.4 0 003.4 3.5zm-42.6-9.1a4.2 4.2 0 00-2.4-.9 3.2 3.2 0 00-3.1 1.9 2.5 2.5 0 00-2.8-1.8h-.5v12.6h3.3v-6c0-2.6 1.3-3.6 2.7-3.6h1.1a9.1 9.1 0 011.7-2.2zm66.2-.8a5 5 0 00-4.4 2.2c-.6-1.5-2.4-2.2-4.5-2.2h-.2a4 4 0 00-3.5 1.9 2.5 2.5 0 00-2.7-1.9h-.5v12.6h3.3v-6c0-2.6 1.3-3.6 2.7-3.6s2.5 1.1 2.5 2.9v6.6h3.3v-6c0-2.5 1.2-3.6 2.6-3.6s2.5 1.1 2.5 3v3.6c0 2.3 1 3.3 2.9 3.3h.5v-7.3c.1-3.1-1.2-5.5-4.5-5.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="34"
            height="26"
            class="d-block d-md-none"
            viewBox="0 0 34 26"
          >
            <defs>
              <path id="a" d="M0 .31h38.596v28.368H0z" />
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(-2 -1.988)">
              <mask id="b" fill="#fff">
                <use xlink:href="#a" />
              </mask>
              <path
                fill="#DC3226"
                d="M27.466 14.486h-.009v5.364c-.13.009-.262.014-.391.014-1.538 0-2.397-.79-2.397-2.726v-2.964c0-1.521-.7-2.47-2.078-2.47-1.139 0-2.178.895-2.178 2.978v4.985h-2.797v-5.513c0-1.206-.426-2.054-1.319-2.341l1.485-2.543.003.001c1.037.27 1.677.925 2.189 1.703.7-1.067 1.958-1.818 3.676-1.818 2.697 0 3.816 2.015 3.816 4.564v.766zm-12.16-2.688c-1.07.105-1.985.96-1.985 2.975v4.894h-2.768V9.277c.124-.008.25-.012.376-.012 1.186 0 1.957.47 2.253 1.544.495-.958 1.314-1.673 3.038-1.673.274 0 .469.008.612.025 0 0 .081.004.206.015l-1.517 2.598a1.68 1.68 0 0 0-.215.024zM32.818 2H8.098c-1.585 0-2.87 1.27-2.87 2.838v16.737L2 27h27.948c1.586 0 2.87-1.27 2.87-2.838V7.347L36 2h-3.182z"
                mask="url(#b)"
              />
            </g>
          </svg>
        </router-link>
      </div>
      <form class="col-6 ps-3">
        <input
          type="text"
          class="form-control bg-light"
          placeholder="Search for products"
        />
      </form>
      <div class="cartBox col-1">
        <router-link class="text-black-50 d-none d-md-block" to="/cart">
          <i class="fa-solid fa-cart-shopping me-1"></i>
          <span>Cart</span>
        </router-link>
        <router-link class="text-black-50 d-block d-md-none" to="/cart">
          <i class="fa-solid fa-cart-shopping me-1"></i>
        </router-link>
      </div>
      <div class="col-2 d-none d-md-block">
        <router-link to="/login">
          <input
            type="button"
            class="btn-login text-uppercase ps-4 pe-4 pt-2 pb-2"
            value="login / signup"
          />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-toggler {
  font-size: 21.9px;
}
.navbar-toggler:focus {
  box-shadow: none;
}
a {
  text-decoration: none;
}
.btn-login {
  background-color: orangered;
  border: 1px solid orangered;
  border-radius: 7px;
  color: white;
  transition: 0.2s;
  font-size: 13px;
}
.btn-login:hover {
  background-color: white;
  color: orangered;
}
.search i {
  position: absolute;
  top: 4px;
}
</style>
