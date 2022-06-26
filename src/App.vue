<template>
  <div id="app">
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
</style>
