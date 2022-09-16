<template>
  <div class="container pt-4">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../public/imgs/Paytm-Bank-Desktop-banner-(1).jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/imgs/Paytm-Offer-banner-for-web--copy-AA.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/imgs/WP-Web.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="Catigories mt-4">
      <ul class="list-unstyled row">
        <li class="col-lg-3 col-md-4 col-6">
          <router-link to="packages">
            <div class="text-center category-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 18 18"
                id="new-packages"
                y="806"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#434A54"
                  stroke-width=".4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6.114L8.991 3.5l4.992 2.614v.345L8.99 9.073 4 6.467z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6.45l4.991 2.638 4.992-2.639v5.432l-5.007 2.614L4 11.88z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.991 14.315V9.088L4.031 6.51 4 6.662v5.219z"
                  />
                  <path
                    fill="#4DDFD2"
                    d="M5.75 5.22l5.137 2.862 1.02-.54-5.289-2.793z"
                  />
                  <path
                    fill="#4DDFD2"
                    d="M10.75 8.153l1.05-.567-.036 1.684-.408-.056-.606.444V8.153z"
                  />
                </g></svg
              ><br />
              <label>Packages</label>
            </div>
          </router-link>
        </li>
        <li class="col-lg-3 col-md-4 col-6">
          <router-link to="/Electronics">
            <div class="text-center category-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 18 18"
                id="new-electronics"
                y="614"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#434A54"
                  stroke-width=".4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.092 14.193H6.958c-.462 0-.837-.362-.837-.808V4.563c0-.447.375-.808.837-.808h4.134c.462 0 .837.361.837.808v8.822c0 .446-.375.808-.837.808z"
                  />
                  <path
                    fill="#4DDFD2"
                    d="M9.377 12.84c0 .187-.157.34-.352.34a.346.346 0 01-.352-.34c0-.188.157-.34.352-.34.195 0 .352.152.352.34"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="bevel"
                    d="M8.228 3.946h1.795"
                  />
                </g></svg
              ><br />
              <label>Electronics</label>
            </div>
          </router-link>
        </li>
        <li class="col-lg-3 col-md-4 col-6">
          <router-link to="/fitness">
            <div class="text-center category-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                id="new-fitness"
                y="678"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#434A54"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.544"
                  transform="translate(13.534 14.324)"
                >
                  <path
                    d="M28.648 7.162l-1.79 14.324M6.088 9.694l2.865 8.211"
                  />
                  <path
                    fill="#FFF"
                    d="M34.271 24.313a5.388 5.388 0 013.582 5.077c0 2.974-2.873 5.385-5.848 5.385l-23.918-.07C3.528 34.14 0 30.254 0 25.543c0-5.124 4.159-9.233 9.232-9.233 2.55 0 3.022.652 14.878 4.544l10.161 3.46zM26.59 8.154a1.537 1.537 0 01.03-3.076h4.616v-3.54a1.54 1.54 0 013.078 0v3.54c0 1.7-1.378 3.077-3.078 3.077H26.59z"
                  />
                  <circle cx="28.648" cy="28.648" r="1.791" fill="#FFF" />
                  <path
                    fill="#4DDFD2"
                    d="M12.108 5.557a2.083 2.083 0 01-.342 4.137H2.823a2.823 2.823 0 01-.006-5.646c.419 0 .062-.016 9.291 1.51z"
                  />
                  <circle cx="9.098" cy="25.604" r="4.476" fill="#4DDFD2" />
                  <path d="M8.953 25.067l5.73 5.372h7.161" />
                </g></svg
              ><br />
              <label>Fitness</label>
            </div>
          </router-link>
        </li>
        <li class="col-lg-3 col-md-4 col-6">
          <router-link to="/WFHEssentials">
            <div class="text-center category-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 18 18"
                id="wfh-essentials"
                y="1145"
              >
                <g fill="none" fill-rule="evenodd">
                  <g stroke="#434A54" stroke-linecap="round" stroke-width=".4">
                    <path
                      d="M10.438 6.979H5.925V4.382a.26.26 0 01.26-.26h3.993a.26.26 0 01.26.26V6.98z"
                    />
                    <path
                      d="M10.835 7.831H5.528V7.06c0-.08.072-.145.162-.145h4.984c.09 0 .161.065.161.145v.771h0z"
                    />
                  </g>
                  <path
                    d="M5.075 13.594h-.571a.08.08 0 01-.082-.077V8.4h.734v5.117a.08.08 0 01-.081.077zM5.222 8.454h5.806v2.75H5.222zM11.028 8.705h3.36v2.445h-3.36z"
                    stroke="#434A54"
                    stroke-width=".4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.867 10.08h-.317a.15.15 0 01-.147-.153.15.15 0 01.147-.152h.317a.15.15 0 01.147.152.15.15 0 01-.147.153z"
                    fill="#434A54"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M11.028 11.15h3.36v2.139a.306.306 0 01-.305.305h-2.75a.306.306 0 01-.305-.305v-2.14h0z"
                    stroke="#434A54"
                    stroke-width=".4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.867 12.525h-.317a.15.15 0 01-.147-.153.15.15 0 01.147-.153h.317a.15.15 0 01.147.153.15.15 0 01-.147.153z"
                    fill="#434A54"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M14.876 8.694H4.109a.106.106 0 01-.106-.106v-.737c0-.058.047-.106.106-.106h10.767c.058 0 .105.048.105.106v.737a.106.106 0 01-.105.106z"
                    stroke="#434A54"
                    stroke-width=".4"
                    fill="#4DDFD2"
                  />
                </g></svg
              ><br />
              <label>WFH Essentials</label>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="features">
      <div class="rm-main">
        <h3>There's more</h3>
        <h4>to rernting</h4>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            id="icon-finest__quality"
            y="247"
          >
            <defs>
              <path
                id="icon-finest__quality-a"
                d="M.433.154h1.84v1.791H.433z"
              />
              <path
                id="icon-finest__quality-c"
                d="M.388.158h2.749v2.677H.387z"
              />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M13.185 7.04H4.54c-.868 0-1.573.684-1.573 1.53v1.974h11.79V8.57c0-.845-.705-1.53-1.573-1.53z"
              />
              <path
                fill="#4DDFD2"
                d="M8.98 12.37v-1.003c0-.874-.728-1.582-1.626-1.582h-3.02c-.898 0-1.626.708-1.626 1.582v1.004"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M8.98 12.37v-1.003c0-.874-.728-1.582-1.626-1.582h-3.02c-.898 0-1.626.708-1.626 1.582v1.004"
              />
              <path
                fill="#4DDFD2"
                d="M15.266 12.37v-1.003c0-.874-.729-1.582-1.627-1.582h-3.02c-.898 0-1.626.708-1.626 1.582v1.004"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M15.266 12.37v-1.003c0-.874-.729-1.582-1.627-1.582h-3.02c-.898 0-1.626.708-1.626 1.582v1.004m6.26 4.055H2.473a.74.74 0 01-.75-.73v-3.288h14.28v3.288a.74.74 0 01-.75.73z"
              />
              <g transform="translate(14.833 3.67)">
                <mask id="icon-finest__quality-b" fill="#fff">
                  <use xlink:href="#icon-finest__quality-a" />
                </mask>
                <path
                  fill="#434A54"
                  d="M2.272 1.048a.003.003 0 010 .005 1.27 1.27 0 01-.458.242.308.308 0 00-.208.202v.002a1.202 1.202 0 01-.25.445.004.004 0 01-.006 0A1.223 1.223 0 011.1 1.5a.31.31 0 00-.209-.202 1.255 1.255 0 01-.457-.244.003.003 0 010-.005A1.2 1.2 0 01.891.804h.003A.31.31 0 001.1.601c.05-.149.118-.299.25-.446.001-.002.004-.002.004-.002.134.15.202.3.25.447l.002.002c.03.096.107.172.206.202h.002c.152.048.306.115.458.243"
                  mask="url(#icon-finest__quality-b)"
                />
              </g>
              <g transform="translate(10.833 1.075)">
                <mask id="icon-finest__quality-d" fill="#fff">
                  <use xlink:href="#icon-finest__quality-c" />
                </mask>
                <path
                  fill="#434A54"
                  d="M3.135 1.493a.006.006 0 010 .008 1.911 1.911 0 01-.685.363.461.461 0 00-.309.3v.004a1.814 1.814 0 01-.375.665.006.006 0 01-.008 0 1.827 1.827 0 01-.375-.665.466.466 0 00-.31-.303H1.07a1.889 1.889 0 01-.683-.364v-.008c.227-.192.455-.293.683-.364l.003-.002a.458.458 0 00.31-.3V.826A1.84 1.84 0 011.757.16a.006.006 0 01.008 0c.197.221.3.444.372.666l.001.003a.46.46 0 00.31.3l.002.001c.228.071.458.172.685.363"
                  mask="url(#icon-finest__quality-d)"
                />
              </g>
            </g></svg
          ><br />
          <h3>Finest-quality products</h3>
          <p>
            Quality matters to you, and us! That's why we do a strict
            quality-check for every product.
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-12 feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            id="icon-free__relocation"
            y="367"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".423"
                d="M15.368 11.723l-4.262 4.262-4.109-4.11m.001-.001a5.705 5.705 0 118.364-.158"
              />
              <path
                fill="#4DDFD2"
                d="M14.595 7.844a3.488 3.488 0 11-6.977-.001 3.488 3.488 0 016.977 0"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".423"
                d="M14.595 7.844a3.488 3.488 0 11-6.977-.001 3.488 3.488 0 016.977 0zm-5.017 0c0-.844.685-1.528 1.528-1.528"
              />
              <path
                stroke="#434A54"
                stroke-dasharray="1.058"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".423"
                d="M11.01 15.985H4.924L2.31 14.513"
              />
              <path
                fill="#4DDFD2"
                d="M2.31 11.841a.55.55 0 11-1.098 0 .55.55 0 011.098 0"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".423"
                d="M2.31 11.841a.55.55 0 11-1.098 0 .55.55 0 011.098 0z"
              />
              <path fill="#D2D2D2" d="M1.762 14.176V12.39" />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".423"
                d="M1.762 14.176V12.39"
              />
            </g></svg
          ><br />
          <h3>Free relocation</h3>
          <p>
            Changing your house or even your city? We'll relocate your rented
            products for free.
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-12 feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            id="icon-free__maintenance"
            y="307"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#FFF"
                d="M1.703 9.612h3.734l3.37 1.872h6.463c1.226 0 1.47 1.946.289 2.28l-6.561 1.86a1.07 1.07 0 01-.72-.047l-5.183-2.563H1.703V9.612z"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M1.703 9.612h3.734l3.37 1.872h6.463c1.226 0 1.47 1.946.289 2.28l-6.561 1.86a1.07 1.07 0 01-.72-.047l-5.183-2.563H1.703V9.612z"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M7.64 13.092c1.052.076 2.106.156 3.16.228.67.046 1.143-.37 1.2-.887.043-.391-.348-.864-.854-.952"
              />
              <path
                fill="#4DDFD2"
                d="M14.627 6.366a3.585 3.585 0 000-1.12l-.835-.297a2.59 2.59 0 00-.195-.469l.38-.794a3.566 3.566 0 00-.797-.794l-.798.38a2.65 2.65 0 00-.47-.196l-.298-.831a3.717 3.717 0 00-1.124 0l-.297.831a2.63 2.63 0 00-.471.195l-.8-.38c-.305.222-.575.49-.796.795l.38.794a2.66 2.66 0 00-.195.469l-.835.296a3.66 3.66 0 000 1.121l.835.294c.05.164.115.32.195.47l-.38.795c.221.305.49.571.796.794l.8-.38c.15.078.306.145.47.196l.298.831a3.7 3.7 0 001.124 0l.298-.83c.163-.052.32-.12.47-.197l.798.38c.307-.223.575-.489.797-.794l-.38-.794c.078-.15.146-.307.195-.47l.835-.295z"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M14.627 6.366a3.585 3.585 0 000-1.12l-.835-.297a2.59 2.59 0 00-.195-.469l.38-.794a3.566 3.566 0 00-.797-.794l-.798.38a2.65 2.65 0 00-.47-.196l-.298-.831a3.717 3.717 0 00-1.124 0l-.297.831a2.63 2.63 0 00-.471.195l-.8-.38c-.305.222-.575.49-.796.795l.38.794a2.66 2.66 0 00-.195.469l-.835.296a3.66 3.66 0 000 1.121l.835.294c.05.164.115.32.195.47l-.38.795c.221.305.49.571.796.794l.8-.38c.15.078.306.145.47.196l.298.831a3.7 3.7 0 001.124 0l.298-.83c.163-.052.32-.12.47-.197l.798.38c.307-.223.575-.489.797-.794l-.38-.794c.078-.15.146-.307.195-.47l.835-.295z"
              />
              <path
                fill="#FFF"
                d="M12.414 5.806c0-.75-.61-1.357-1.362-1.357a1.36 1.36 0 00-1.363 1.357c0 .75.61 1.355 1.363 1.355.752 0 1.362-.606 1.362-1.355"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M12.414 5.806c0-.75-.61-1.357-1.362-1.357a1.36 1.36 0 00-1.363 1.357c0 .75.61 1.355 1.363 1.355.752 0 1.362-.606 1.362-1.355z"
              />
            </g></svg
          ><br />
          <h3>Free maintenance</h3>
          <p>
            Keeping your rented products in a spick and span condition is on us,
            so you can sit back and relax.
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-12 feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            id="icon-cancel__anytime"
            y="127"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4DDFD2" d="M5.18 11.479h7.118V9.955H5.181z" />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M5.18 11.479h7.118V9.955H5.18z"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M11.435 11.478v3.346h-.854l-.496-3.346m-4.176 0v3.346h.854l.497-3.346m2.848-7.405H7.371c-1.17 0-2.085.988-1.963 2.124l.517 3.758h5.629l.517-3.758c.121-1.136-.792-2.124-1.963-2.124z"
              />
              <path
                fill="#4DDFD2"
                d="M14.134 6.47a2.643 2.643 0 01-3.671 0 2.486 2.486 0 010-3.58 2.645 2.645 0 013.671 0 2.488 2.488 0 010 3.58"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".5"
                d="M14.134 6.47a2.643 2.643 0 01-3.671 0 2.486 2.486 0 010-3.58 2.645 2.645 0 013.671 0 2.488 2.488 0 010 3.58zM13.133 5.572l-1.528-1.527m1.508.019l-1.489 1.49"
              />
            </g></svg
          ><br />
          <h3>Cancel anytime</h3>
          <p>
            Pay only for the time you use the product and close your
            subscription without any hassle.
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-12 feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            id="icon-easy__return"
            y="187"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M12.786 4.861H4.807c-.802 0-1.452.66-1.452 1.475v1.903h10.883V6.336c0-.815-.65-1.475-1.452-1.475z"
              />
              <path
                fill="#4DDFD2"
                d="M8.905 9.999v-.967c0-.843-.672-1.525-1.501-1.525H4.616c-.829 0-1.501.682-1.501 1.525v.967"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M8.905 9.999v-.967c0-.843-.672-1.525-1.501-1.525H4.616c-.829 0-1.501.682-1.501 1.525v.967"
              />
              <path
                fill="#4DDFD2"
                d="M14.707 9.999v-.967c0-.843-.672-1.525-1.502-1.525H10.42c-.83 0-1.502.682-1.502 1.525v.967"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M14.707 9.999v-.967c0-.843-.672-1.525-1.502-1.525H10.42c-.83 0-1.502.682-1.502 1.525v.967m5.777 3.907H2.898a.699.699 0 01-.693-.704v-3.167h13.183v3.167c0 .389-.31.704-.693.704zm.693-6.669c1.152-.464 1.788-1.77 1.43-3.028"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M16.087 4.776l.732-.568.904.571"
              />
            </g></svg
          ><br />
          <h3>Easy return on delivery</h3>
          <p>
            If you don't like the product on delivery, you can return it right
            away—no questions asked.
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-12 feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            id="icon-keep__upgrading"
            y="427"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#4DDFD2"
                d="M8.481 12.185H3.758a.566.566 0 01-.565-.569v-1.265c0-.315.253-.569.565-.569H8.48c.312 0 .565.254.565.569v1.265a.566.566 0 01-.565.569"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M8.488 12.185H3.764a.566.566 0 01-.564-.569v-1.265c0-.315.253-.569.564-.569h4.724c.311 0 .564.254.564.569v1.265a.566.566 0 01-.564.569zm1.678-8.918c.967-.94 2.5-.928 3.417-.023.86.847.963 2.263.2 3.268"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M13.334 5.727l.45.785 1.005-.18m-6.587 5.853H4.037a.847.847 0 01-.843-.85v-9.29c0-.47.377-.85.843-.85h4.165c.466 0 .843.38.843.85v9.29c0 .469-.377.85-.843.85z"
              />
              <path
                fill="#434A54"
                d="M6.541 11.04a.423.423 0 01-.422.425.423.423 0 01-.422-.425c0-.235.19-.425.422-.425.233 0 .422.19.422.425"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M3.194 9.782h5.851M3.194 2.173h5.851"
              />
              <path
                fill="#FFF"
                d="M11.55 16.975H7.385a.847.847 0 01-.844-.851V6.836c0-.47.378-.85.844-.85h4.165c.466 0 .843.38.843.85v9.288c0 .47-.377.85-.843.85"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".4"
                d="M11.55 16.975H7.385a.847.847 0 01-.844-.851V6.836c0-.47.378-.85.844-.85h4.165c.466 0 .843.38.843.85v9.288c0 .47-.377.85-.843.85z"
              />
              <path
                fill="#4DDFD2"
                stroke="#434A54"
                stroke-width=".3"
                d="M9.822 15.903a.356.356 0 01-.355.358.356.356 0 01-.354-.358c0-.197.158-.357.354-.357.196 0 .355.16.355.357"
              />
              <path
                stroke="#434A54"
                stroke-linecap="round"
                stroke-linejoin="bevel"
                stroke-width=".5"
                d="M8.665 6.187h1.808"
              />
            </g></svg
          ><br />
          <h3>Keep upgrading</h3>
          <p>
            Bored of the same product? Upgrade to try another, newer design and
            enjoy the change!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      students: [],
    };
  },
  async created() {
    const res = await fetch("http://localhost:3000/students");
    this.students = await res.json();
  },
  methods: {},
};
</script>

<style scoped>
.carousel img {
  border-radius: 20px;
}
a {
  text-decoration: none;
  color: black;
}
.category-item {
  transition: all 0.2s ease-in;
  border: 1px solid #e2eaf0;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 10px 12%;
}
.category-item:hover {
  box-shadow: 0 8px 14px 0 #bfcfdc;
}
.features {
  padding: 80px 3%;
}
.features .row h3 {
  font-size: 18px;
  color: #313131;
}
.features .row p {
  font-size: 14px;
  color: #717171;
}
.features .feature-item {
  margin: 60px 0;
}
.feature-item svg {
  margin-bottom: 16px;
}
.rm-main {
  position: relative;
}
.rm-main::after {
  background: #dc3226;
  border-radius: 5px;
  bottom: -12px;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  width: 2em;
}
::after,
::before {
  text-decoration: inherit;
  vertical-align: inherit;
}
</style>
