<template>
  <div>
    <div>
      <navComponent />
    </div>
    <div>
      <router-view class="routerBody"></router-view>
    </div>
    <div>
      <footerComponent />
    </div>
  </div>
</template>

<script>
import navComponent from "./components/navComponent.vue";
import cartComponent from "./components/cartComponent.vue";
import bodyComponent from "./components/bodyComponent.vue";
import footerComponent from "./components/footerComponent.vue";
import electronicsComponent from "./components/electronicsComponent.vue";
import packagesComponent from "./components/packagesComponent.vue";

export default {
  data: function () {
    return {};
  },
  components: {
    navComponent,
    cartComponent,
    bodyComponent,
    footerComponent,
    electronicsComponent,
    packagesComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  max-width: 100vw;
}
.routerBody {
  min-height: 100vh;
}
</style>
