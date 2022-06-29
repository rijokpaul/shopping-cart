<template>
  <div class="row featured-content-grid">
    <div class="col-4">
      <div class="featured-content-card text-content-card">
        <h3>Made For You</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar ac tortor imperdiet commodo.</p>
        <a href="#" class="primary-btn">Learn More</a>
      </div>
      <div class="featured-content-card image-content-card">
        <div class="featured-content-image">
          <img src="../../assets/images/featured-img-1.png" alt=""/>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="featured-content-card image-content-card">
        <div class="featured-content-image">
          <img src="../../assets/images/featured-img-2.png" alt=""/>
        </div>
      </div>
      <div class="featured-content-card image-content-card">
        <div class="featured-content-image">
          <img src="../../assets/images/featured-img-3.png" alt=""/>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="featured-content-card image-content-card">
        <div class="featured-content-image">
          <img src="../../assets/images/featured-img-4.png" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FeaturedContent",
};
</script>
<style scoped lang="scss">
.featured-content-grid {
  margin-top: 70px;
  .featured-content-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 30px;
    &.text-content-card {
      padding: 0 0 0 0;
      h3 {
        font: normal normal medium 30px/36px Karla;
        color: #122230;
      }
      p {
        font: normal normal normal 16px/24px Karla;
        color: #7D7D7D;
      }
      a {
        font: normal normal bold 13px/15px Karla;
        letter-spacing: 1.3px;
      }
    }
  }
}
</style>
