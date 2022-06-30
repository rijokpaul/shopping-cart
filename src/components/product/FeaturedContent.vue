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
      <div class="featured-content-card image-content-card align-items-end">
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
    <div class="col-4 d-flex flex-column justify-content-center">
      <div class="featured-content-card image-content-card highlighted-content-card">
        <div class="featured-content-image">
          <img src="../../assets/images/featured-img-4.png" alt=""/>
        </div>
        <div class="featured-content-text">
          <h3>FIND YOUR SPARKLE.</h3>
          <a href="#">SHOP OUR PRODUCTS <svg xmlns="http://www.w3.org/2000/svg" width="7.622" height="11.825" viewBox="0 0 7.622 11.825">
  <g id="layer1" transform="translate(-1.976 -291.965)">
    <path id="path9429" d="M2.872,291.965a.841.841,0,0,0-.554,1.49l5.146,4.409-5.146,4.407a.841.841,0,1,0,1.092,1.273L9.3,298.5a.841.841,0,0,0,0-1.28l-5.892-5.046a.84.84,0,0,0-.539-.212Z" transform="translate(0)" fill="#7d7d7d"/>
  </g>
</svg></a>
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
    padding-top: calc(var(--bs-gutter-x) * 1);
    &.text-content-card {
      padding: 0 0 0 0;
      h3 {
        font-size: 30px;
        line-height: 36px;
        color: #122230;
        font-weight: 500;
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
    &.highlighted-content-card {
      position: relative;
      &::before {
        content: '';
        width: 705px;
        height: 453px;
        position: absolute;
        right: -80px;
        top: -65px;
        background: #D9F5F4;
        z-index: -1;
      }
      .featured-content-image {
        position: relative;
        z-index: 10;
      }
      .featured-content-text {
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 30px;
          line-height: 36px;
          color: #122230;
          font-weight: 500;
        }
        a {
          text-decoration: none;
          color: #7D7D7D;
        }
      }
    }
  }
}
</style>
