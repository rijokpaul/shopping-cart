<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-auto col-lg-6 col-sm-10 card-widget text-center mt-3">
        <h2>Featured Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar ac tortor imperdiet commodo.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-3" v-for="product in products" :key="product.id">
        <ProductListItem :product="product"></ProductListItem>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      return axios
        .get("products.json")
        .then((response) => {
          const products = response.data.products
          if(products.length > 0) {
            this.products = products.filter(product => product.variants.length > 1).slice(0, 4)
          }
          // console.log(response.data);
          // console.log(this.products);
          // console.log(JSON.stringify(this.products));
        })
        .catch((error) => {
          throw error.response.data;
        });
    },
  },
};
</script>
<style scoped>
.card-widget {
  /* margin-top: 20px; */
}
</style>
