<template>
  <div class="row justify-content-center" :data-now="now">
    <div class="col-auto">
      <a href="#" class="logo">
        <img src="../../assets/images/HULK-logo.svg" alt="">
      </a>
      <button class="mini-cart-btn" @click="openMiniCart">
        <img src="../../assets/images/shopping-bag.svg" alt="">
        <span class="notify">{{getCartItems.length}}</span>
      </button>
    </div>
    <MiniCart v-if="$miniCart.status" @close-cart="closeMiniCart"></MiniCart>
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
      now: Date.now(),
      showMinCart: false,
    };
  },
  mounted() {
    
  },
  methods: {
    openMiniCart() {
      this.$miniCart.status = true;
      document.body.classList.add("nav-visible")
      this.now = Date.now();
    },
    closeMiniCart() {
      this.$miniCart.status = false;
      document.body.classList.remove("nav-visible")
      this.now = Date.now();
    },
  },
  computed: {
    getCartItems() {
      return this.$cart.cartItems;
    },
  },
  watch: {
    '$miniCart': {
      handler (value) {
        if(value.status === true) {
          document.body.classList.add("nav-visible")
        } else {
          document.body.classList.remove("nav-visible")
        }
        this.now = Date.now();
      },
      deep: true,
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
  span {
    width: 16px;
    height: 16px;
    border-radius: 100px;
    background: #ffffff;
    display: inline-block;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    font-weight: 500;
    color: #1E1E1E;
    position: absolute;
    bottom: 10px;
  }
}
</style>
