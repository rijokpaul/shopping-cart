class Cart {
    constructor() {      
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
      this.cartTotal = 0;
    }

    /**
     * addToCart({product variant data});
     * // adds data to cart items and update total
     * @param {object} product - an object with all selected product variant data
     */
    addToCart(product) {
        const isExisting = this.cartItems.some(item => item.id === product.id);
        // console.log(product)
        product['unitPrice'] = parseFloat(product.price);
        if(isExisting) {
            this.updateQuantity(product, 'up')
        } else {
            const cartItem = {
                id: product.id,
                name: product.name,
                quantity: 1,
                image: product.featured_image.src,
                price: parseFloat(product.price),
                unitPrice: parseFloat(product.price),
                variants: [
                    {
                        label: "Color",
                        value: product.option1,
                    },
                    {
                        label: "Size",
                        value: product.option2,
                    },
                ]
            }
            this.cartItems.push(cartItem);
            this.total();
            
        }
        this.saveCart();
    }

    /**
     * removeFromCart(productId);
     * // remove product from cart items and update total
     * @param {number} productId - product variant ID
     */
    removeFromCart(productId) {
        this.cartItems.splice(this.cartItems.findIndex(item => item.id === productId) , 1)
        this.total();
        this.saveCart();
    }

    /**
     * updateQuantity(product, type, quantity);
     * // update an existing product item quantity and update total
     * @param {object} product - cart product object
     * @param {string} type - update type 'up' or 'down'
     * @param {number} quantity - number to update the quantity
     */
    updateQuantity(product, type, quantity) {
      const selectedItem = this.cartItems.find(item => item.id === product.id)
      if(quantity) {
          selectedItem.quantity = quantity;
          selectedItem.price = quantity * product.unitPrice;
      } else {
          selectedItem.quantity = (type === 'up' ? selectedItem.quantity += 1 : selectedItem.quantity -= 1);
          selectedItem.price = selectedItem.quantity * product.unitPrice;
      }
      this.total();
      this.saveCart();
    }

    /**
     * saveCart();
     * // save cart items to localStorage. So even if page is refreshed, we can see the product items.
     */
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }

    /**
     * total();
     * // calculating cart total.
     */
    total() {
        let total = 0
        for (let product of this.cartItems) {
            total += (product.unitPrice * product.quantity)
        }
        // this.cartTotal = total;
        return total
    }

    /**
     * getCartTotal();
     * // returning cart total globally.
     */
    getCartTotal() {
      return this.total();
    }
}

module.exports = Cart 