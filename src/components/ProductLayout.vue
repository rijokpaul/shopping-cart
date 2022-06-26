<template>
  <div class="container">
    <GlobalHeader></GlobalHeader>
    <ProductList></ProductList>
    <GlobalFooter></GlobalFooter>
  </div>
</template>
<script>
import GlobalHeader from "./globals/GlobalHeader";
import GlobalFooter from "./globals/GlobalFooter";
import ProductList from './product/ProductList'
export default {
  name: "ProductLayout",
  components: {
    GlobalHeader,
    GlobalFooter,
    ProductList,
  },
};
</script>
