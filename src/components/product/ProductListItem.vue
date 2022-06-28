<template>
  <div class="product-list-item" v-if="product">
    <div class="product-list-item-image" style="display: block; opacity: 1">
      <img :src="selectedVariant.featured_image.src" alt="" v-if="selectedVariant && selectedVariant.featured_image.src" @load="onImgLoad"/>
      <img src="../../assets/images/image-1.png" alt="" v-else @load="onImgLoad"/>
      <Loading v-if="loading"></Loading>
    </div>
    <div class="product-list-item-title">
      <h4 v-if="product.title">{{product.title}}</h4>
      <span v-if="selectedVariant && selectedVariant.price">${{selectedVariant.price}}</span>
      <span v-else>---</span>
    </div>
    <div class="product-list-item-action">
      <!-- <form action=""> -->
      <!-- <div class="product-list-item-variations">
          <div class="variation-list color-variations custom-radio-group custom-radio-type-rounded">
            <div class="custom-radio-item">
              <input type="radio" name="color" id="green" value="green" checked/>
              <label for="green" style="background-color: #008c9c"></label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="color" id="dark-gray" value="dark-gray"/>
              <label for="dark-gray" style="background-color: #686868"></label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="color" id="navy-blue" value="navy-blue"/>
              <label for="navy-blue" style="background-color: #122230"></label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="color" id="light-gray" value="light-gray"/>
              <label for="light-gray" style="background-color: #646f78"></label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="color" id="red" value="red"/>
              <label for="red" style="background-color: #bb0000"></label>
            </div>            
          </div>

          <div class="variation-list color-variations custom-radio-group custom-radio-type-square">
            <div class="custom-radio-item">
              <input type="radio" name="size" id="x-small" value="xs" checked/>
              <label for="x-small">XS</label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="size" id="small" value="s" checked/>
              <label for="small">S</label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="size" id="medium" value="m" checked/>
              <label for="medium">M</label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="size" id="large" value="l" checked/>
              <label for="large">L</label>
            </div>
            <div class="custom-radio-item">
              <input type="radio" name="size" id="x-large" value="xl" checked/>
              <label for="x-large">XL</label>
            </div>
          </div>
        </div> -->
      <div class="product-list-item-variations" v-if="variants.length > 0">
        <div class="variation-list" :class="{'variation-type-1': variant.name === 'Color', 'variation-type-2': variant.name === 'Size'}" v-for="(variant, index) in variants" :key="index">
          <ul v-if="variant.values && variant.values.length > 0">
            <li :class="{'active-variation': (getSelectedCombination.option1 === item || getSelectedCombination.option2 === item)}" v-for="(item, innerIndex) in variant.values" :key="innerIndex">
              <button :style="`background-color: ${item}`" v-if="variant.name === 'Color'" @click="selectVariant(item, variant.position)"></button>
              <button v-else-if="variant.name === 'Size'" @click="selectVariant(item, variant.position)">{{item}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-list-item-action" style="opacity: 1">
        <button class="primary-btn full-width-btn" :disabled="selectedVariant === undefined" @click="addToCart(selectedVariant)">Add to Cart</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>
<script>
import VariantUtil from '../../utils/VariantUtil';
import Loading from '../globals/Loading';
// import Cart from '../../utils/Cart'
export default {
  name: "ProductListItem",
  props: {
    product: Object,
  },
  components: {
    Loading,
  },
  data() {
    return {
      selectedVariant: undefined,
      variants: [],
      variantUtil: null,
      selectedCombination: undefined,
      loading: true,
    };
  },
  mounted() {
    if(this.product) {
      this.selectedVariant = this.product.variants[0];
      this.variantUtil = new VariantUtil({
        product: this.product
      })

      this.variants = this.variantUtil.getVariations();
      this.selectedCombination = {
        option1: this.selectedVariant.option1,
        option2: this.selectedVariant.option2,
      }
      // console.log(this.variants)

    }
  },
  methods: {
    selectVariant(selected, position) {
      this.loading = true;
      if(position === 1) {
        this.selectedCombination.option1 = selected;
      } else if(position === 2) {
        this.selectedCombination.option2 = selected;
      }
      this.selectedVariant = this.variantUtil.selectVariant(this.selectedCombination);
      console.log(this.selectedVariant)
    },
    addToCart(product) {
      product['name'] = this.product.title;
      this.$cart.addToCart(product);
      this.$miniCart.status = true;
    },
    onImgLoad() {
      this.loading = false;
    },
  },
  computed: {
    getSelectedCombination() {
      return this.selectedCombination
    }
  },
};
</script>
<style scoped lang="scss">
.product-list-item {
  display: flex;
  flex-direction: column;
  .product-list-item-image {
    position: relative;
    min-height: 375px;
    img {
      // max-width: 100%;
      width: 100%;
    }
  }
  .product-list-item-title {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 8px;
    h4 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }
    span {
      font-size: 16px;
    }
  }
  .product-list-item-variations {
    .variation-list {
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        li {
          margin-right: 8px;
          display: flex;
          button {
            cursor: pointer;
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #008c9c;
            position: relative;
            border: 0px none;
            transition: all 400ms ease;
            box-shadow: 0px 0px 5px 2px rgba(#000, 0.2);
            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #fff;
              opacity: 0;
              transition: all 400ms ease;
            }
          }
          &:hover,
          &.active-variation {
            button {
              &::after {
                opacity: 1;
              }
            }
          }
        }
      }
      &.variation-type-2 {
        ul {
          li {
            button {
              width: 30px;
              height: 30px;
              border-radius: 0%;
              background: #fff;
              border: 1px solid #1e1e1e;
              color: #1e1e1e;
              font-size: 12px;
              text-transform: uppercase;
              &::after {
                display: none;
              }
            }
            &:hover,
            &.active-variation {
              button {
                background: #1e1e1e;
                color: #fff;
              }
            }
          }
        }
      }
    }

    .variation-list {
      display: flex;
      margin-bottom: 14px;
    }
  }
}
</style>
