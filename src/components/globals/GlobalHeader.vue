<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <a href="#" class="logo">
        <img src="../../assets/images/HULK-logo.svg" alt="">
      </a>
      <button class="mini-cart-btn">
        <img src="../../assets/images/shopping-bag.svg" alt="">
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalHeader",
};
</script>
<style scoped lang="scss">
.logo {
  margin-bottom: 25px;
}
.mini-cart-btn {
  border: 0px none;
  width: 62px;
  height: 58px;
  background: #D9F5F4;
  border-radius: 0px 0px 0px 10px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
