<template>
  <div id="app">
    <transition name="fade"><div class="overlay" @click="closeOverlay"></div></transition>
    <div class="wrapper">
      <ProductLayout></ProductLayout>
    </div>
  </div>
</template>

<script>
import ProductLayout from "./components/ProductLayout";
export default {
  name: "App",
  components: {
    ProductLayout,
  },
  methods: {
    closeOverlay() {
      this.$miniCart.status = false;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap");
#app {
  font-family: "Karla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1e1e1e;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  .wrapper {
    max-width: 1278px;
    width: 100%;
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1300px;
    }
  }
}
body.nav-visible {
	overflow: hidden;
}
body {
  .overlay {
    position: fixed;
    content: "";
    background: rgba(34,31,32,0.55);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  &.nav-visible {
    .overlay {
      opacity: 1;
      visibility: visible;
    }
  }
}



.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
