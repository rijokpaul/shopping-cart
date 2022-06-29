<template>
  <div class="container">
    <GlobalHeader></GlobalHeader>
    <ProductList></ProductList>
    <FeaturedContent style="display: none;"></FeaturedContent>
    <GlobalFooter></GlobalFooter>
  </div>
</template>
<script>
import GlobalHeader from "./globals/GlobalHeader";
import GlobalFooter from "./globals/GlobalFooter";
import ProductList from './product/ProductList'
import FeaturedContent from "./product/FeaturedContent";
export default {
  name: "ProductLayout",
  components: {
    GlobalHeader,
    GlobalFooter,
    ProductList,
    FeaturedContent,
  },
};
</script>
