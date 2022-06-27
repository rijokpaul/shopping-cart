<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <!-- <a href="#" class="logo">
        <img src="../../assets/images/HULK-logo.svg" alt="">
      </a> -->
      <button class="mini-cart-btn" @click="openMiniCart">
        <img src="../../assets/images/shopping-bag.svg" alt="">
      </button>
    </div>
    <MiniCart v-if="showMinCart" @close-cart="closeMiniCart"></MiniCart>
  </div>
</template>
<script>
import MiniCart from "../cart/MiniCart"
export default {
  name: "GlobalHeader",
  components: {
    MiniCart,
  },
  data() {
    return {
      showMinCart: false,
    };
  },
  mounted() {
    
  },
  methods: {
    openMiniCart() {
      this.showMinCart = true;
      document.body.classList.add("nav-visible")
    },
    closeMiniCart() {
      this.showMinCart = false;
      document.body.classList.remove("nav-visible")
    },
  },
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
