<template>
  <div class="product-list-item">
    <div class="product-list-item-image">
      <img src="../../assets/images/image-1.png" alt="" />
    </div>
    <div class="product-list-item-title">
      <h4>Small Noami</h4>
      <span>$74.99</span>
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
      <div class="product-list-item-variations">
        <div class="variation-list variation-type-1">
          <ul>
            <li class="active-variation">
              <button style="background-color: #008c9c"></button>
            </li>
            <li>
              <button style="background-color: #686868"></button>
            </li>
            <li>
              <button style="background-color: #122230"></button>
            </li>
            <li>
              <button style="background-color: #646f78"></button>
            </li>
            <li>
              <button style="background-color: #bb0000"></button>
            </li>
          </ul>
        </div>
        <div class="variation-list variation-type-2">
          <ul>
            <li class="active-variation">
              <button>XS</button>
            </li>
            <li>
              <button>S</button>
            </li>
            <li>
              <button>M</button>
            </li>
            <li>
              <button>L</button>
            </li>
            <li>
              <button>XL</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-list-item-action">
        <button class="primary-btn full-width-btn">Add to Cart</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductListItem",
  
};
</script>
<style scoped lang="scss">
.product-list-item {
  display: flex;
  flex-direction: column;
  .product-list-item-image {
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
