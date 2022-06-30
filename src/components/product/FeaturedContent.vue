<template>
  <div class="row featured-content-grid">
    <div class="col-12 col-md-4 col-sm-6 ">
      <div class="featured-content-card text-content-card pt-0">
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
    <div class="col-12 col-md-4 col-sm-6">
      <div class="featured-content-card image-content-card align-items-sm-end pt-sm-0">
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
    <div class="col-12 col-md-4 col-sm-6 d-flex flex-column justify-content-center">
      <div class="featured-content-card image-content-card highlighted-content-card">
        <div class="featured-content-image">
          <img src="../../assets/images/featured-img-4.png" alt=""/>
        </div>
        <div class="featured-content-text">
          <h3>FIND YOUR SPARKLE.</h3>
          <a href="#">SHOP OUR PRODUCTS</a>
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
  @media only screen and (max-width: 767px) {
    justify-content: flex-end;
  }
  .featured-content-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: calc(var(--bs-gutter-x) * 1);
    .featured-content-image {
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
      img {
        max-width: 100%;
        @media only screen and (max-width: 767px) {
          width: 100%;
        }
      }
    }
    &.text-content-card {
      padding: 0 0 80px 0;
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        padding: 0 0 50px 0;
      }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        padding: 0 0 30px 0;
      }
      @media only screen and (max-width: 767px) {
        padding: 0 0 0 0;
      }
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
        width: 585px;
        height: 453px;
        position: absolute;
        right: -80px;
        top: -65px;
        background: #D9F5F4;
        z-index: -1;
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          width: 555px;
          height: 340px;
          top: -25px;
        }
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          width: 555px;
          height: 340px;
          top: -25px;
        }
        @media only screen and (max-width: 767px) {
          width: 120%;
          height: 120%;
          top: -50px;
        }
      }
      .featured-content-image {
        position: relative;
        z-index: 10;
        padding-bottom: 15px;
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
          position: relative;
          padding-right: 25px;
          &::after {
            content: '';
            position: absolute;
            // right: 0;
            top: 1px;
            width: 20px;
            height: 20px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3LjYyMiIgaGVpZ2h0PSIxMS44MjUiIHZpZXdCb3g9IjAgMCA3LjYyMiAxMS44MjUiPg0KICA8ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS45NzYgLTI5MS45NjUpIj4NCiAgICA8cGF0aCBpZD0icGF0aDk0MjkiIGQ9Ik0yLjg3MiwyOTEuOTY1YS44NDEuODQxLDAsMCwwLS41NTQsMS40OWw1LjE0Niw0LjQwOS01LjE0Niw0LjQwN2EuODQxLjg0MSwwLDEsMCwxLjA5MiwxLjI3M0w5LjMsMjk4LjVhLjg0MS44NDEsMCwwLDAsMC0xLjI4bC01Ljg5Mi01LjA0NmEuODQuODQsMCwwLDAtLjUzOS0uMjEyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiIGZpbGw9IiM3ZDdkN2QiLz4NCiAgPC9nPg0KPC9zdmc+);
            background-size: 8px 12px;
            background-repeat: no-repeat;
            background-position: center;
          }
          &:hover {
            color: #122230;
          }
        }
      }
    }
  }
}
</style>
