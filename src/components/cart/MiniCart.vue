<template>
  <div class="drop-cart active">
    <a href="#" class="close-cart" @click="closeMiniCart"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          id="close-line"
          d="M18.263,16.975l7.461-7.441a.9.9,0,0,0-1.269-1.266L16.994,15.71,9.533,8.26A.9.9,0,1,0,8.255,9.534l7.47,7.441-7.47,7.441a.9.9,0,1,0,1.269,1.266l7.47-7.441,7.461,7.441a.9.9,0,0,0,1.269-1.266Z"
          transform="translate(-7.94 -7.996)"
          fill="#221f20"
        />
      </svg>
    </a>
    <div class="cart-top">
      <h3>your bag <i>({{getCartItems.length}} {{(getCartItems.length > 1 ? 'items': 'item')}})</i></h3>
      <div class="mini-cart-container" v-if="getCartItems.length > 0">
        <div class="mini-cart-item" v-for="(item, index) in getCartItems" :key="index">
          <div class="mini-cart-image">
            <a href="#">
              <img :src="item.image" :alt="item.name" />
            </a>
          </div>
          <div class="item-price">
            <h4>{{item.name}}</h4>
            <span>Color : Grey</span>
            <div class="qty-price">
              <div class="qty qty-action-block">
                <button @click="$cart.updateQuantity(item, 'down', (item.quantity - 1))" :disabled="item.quantity <= 1"><span class="minus">-</span></button>
                <span class="count">{{item.quantity}}</span>
                <button @click="$cart.updateQuantity(item, 'up', (item.quantity + 1))"><span class="plus">+</span></button>
              </div>
              <span class="price">${{item.price}}</span>
            </div>
          </div>
          <div class="remove-from-cart">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
              >
                <path
                  id="close-line"
                  d="M14.249,13.483l4.559-4.547a.549.549,0,0,0-.775-.773L13.473,12.71,8.914,8.157a.552.552,0,0,0-.781.779L12.7,13.483,8.133,18.031a.549.549,0,1,0,.775.773l4.565-4.547L18.033,18.8a.549.549,0,0,0,.775-.773Z"
                  transform="translate(-7.94 -7.996)"
                  fill="#221f20"
                />
              </svg>
            </a>
          </div>
        </div>


        <!-- <div class="mini-cart-item">
          <div class="mini-cart-image">
            <a href="#">
              <img src="../../assets/images/prod2.png" alt="" />
            </a>
          </div>
          <div class="item-price">
            <a href="#">
              <h4>Stormy</h4>
              <span>Color : Green</span>
              <div class="qty-price">
                <div class="qty">
                  <span class="minus">-</span>
                  <input
                    type="number"
                    class="count"
                    name="qty"
                    value="1"
                    disabled=""
                  />
                  <span class="plus">+</span>
                </div>
                <span class="price">$56.99</span>
              </div>
            </a>
          </div>
          <div class="remove-from-cart">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
              >
                <path
                  id="close-line"
                  d="M14.249,13.483l4.559-4.547a.549.549,0,0,0-.775-.773L13.473,12.71,8.914,8.157a.552.552,0,0,0-.781.779L12.7,13.483,8.133,18.031a.549.549,0,1,0,.775.773l4.565-4.547L18.033,18.8a.549.549,0,0,0,.775-.773Z"
                  transform="translate(-7.94 -7.996)"
                  fill="#221f20"
                />
              </svg>
            </a>
          </div>
        </div> -->
      </div>
    </div>
    <div class="mini-cart-sub-total">
      <div class="d-flex">
        <h2>subtotal</h2>
        <div class="sub-total">
          <span class="price">${{getCartTotal}}</span>
        </div>
      </div>
      <div class="mini-cart-btn">
        <a href="#" class="btn"
          ><img alt="checkout" src="../../assets/images/lock-line.svg" /> Check Out</a
        ><br />
        <p>
          Have a promo code? Enter your code at checkout. Shipping &amp; taxes
          are calculated during checkout.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MiniCart",
  methods: {
    closeMiniCart() {
      this.$emit('close-cart');
    }
  },
  computed: {
    getCartItems() {
      return this.$cart.cartItems;
    },
    getCartTotal() {
      return this.$cart.cartTotal;
    },
  },
};
</script>
<style scoped lang="scss">
.drop-cart {
	width: 450px;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	background: #FFFFFF;
	padding: 30px 0 0;
	z-index: -1;
	opacity: 0;
	visibility: hidden;
	overflow-y: auto;
	transition: all 300ms ease-in;
	box-shadow: -5px 0px 20px 0px rgba(0,0,0,0.12);
	display: flex;
	justify-content: space-between;
	flex-direction:column;
}


.drop-cart.active {
	z-index: 10;
	opacity: 1;
	visibility: visible;
}
.close-cart {
	position: absolute;
	right: 30px;
}

.drop-cart h3 {
	font-size: 32px;
	color: #221F20;
	padding: 0 30px 30px;
	font-weight: 700;
	margin: 0;
	border-bottom: 1px solid #221F20;
	text-transform: uppercase;
}
.drop-cart h3 i {
	font-size: 20px;
	font-weight: 400;
	font-style: normal;
}
.mini-cart-container{
	widows: 100%;
	padding: 0 30px;
}
.mini-cart-container .mini-cart-item {
	display: flex;
	justify-content: space-between;
	border-top: 1px solid rgba(34,31,32,0.25);
	padding-top: 25px;
	padding-bottom: 25px;
	position: relative;
}
.mini-cart-container .mini-cart-item:first-child {
	border: none;
}
.mini-cart-container .mini-cart-image {
	max-width: 100px;
}
.mini-cart-container .mini-cart-image img {
	max-width: 100%;
}
.mini-cart-container .mini-cart-item .item-price {
	color: #9A9A9A;
	font-size: 14px;
	font-weight: bold;
	padding-left: 20px;
	width: calc(100% - 100px);
}
.mini-cart-container .mini-cart-item .item-price h4 {
	color: #221F20;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 5px;
	text-transform: uppercase;
}
.mini-cart-container .mini-cart-item .item-price span {
	color: #221F20;
	font-size: 14px;
	font-weight: 400;
}
.remove-from-cart {
  position: absolute;
  right: 0;
}
.qty-price {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: space-between;
	margin: 20px 0 0;
}
.qty-action-block button {
  border: 0 none;
}
.mini-cart-sub-total {
	display: flex;
	justify-content: space-between;
	flex-direction:column;
	background: #EFF5F7;
	padding: 20px 30px;
}
.mini-cart-sub-total .d-flex {
	justify-content: space-between;
}
.mini-cart-sub-total h2 {
	font-size: 24px;
	color: #221F20;
	font-weight: 700;
	margin-bottom: 0;
	text-transform: uppercase;
}
.mini-cart-sub-total .sub-total {
	font-size: 24px;
	color: #221F20;
	font-weight: 700;
}
.mini-cart-btn {
	display: flex;
	justify-content: space-between;
	flex-direction:column;
	margin-top: 10px;
	text-align: center;
}
.mini-cart-btn .btn {
	color: #ffffff;
	font-size: 12px;
	text-transform: uppercase;
	border: 1px solid #201F4E;
	background: #1E1E1E;
	border-radius: 0;
	padding: 0 20px;
	font-weight: bold;
	height: 54px;
	line-height: 54px;
	margin-bottom: 10px;
}
.mini-cart-btn .btn:hover {
	color: #FFFFFF;
	background: #AAAAAA;
	border-color: #AAAAAA;
}
.mini-cart-btn .btn img {
  position: relative;
  top: -2px;
  margin-right: 5px;
}
.mini-cart-btn p {
	color: #221F20;
	font-size: 13px;
	line-height: 19px;
	margin: 0;
	padding: 0 20px;
}
.qty {
	width: 100px;
	height: 34px;
	padding: 0 15px;
	border-radius: 20px;
	background: #F6F6F6;
	display: flex;
	justify-content: space-between;
    align-items: center;
}
input.count {
	width: 2%;
	border: 0px;
	min-width: 29px;
	background: transparent;
	text-align: center;
	padding: 0;
	appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

</style>
