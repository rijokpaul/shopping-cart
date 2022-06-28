class Cart {
    constructor() {
        this.cartItems = [];
        this.cartTotal = 0;
    }

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
    }

    removeFromCart(productId) {
        this.cartItems.splice(this.cartItems.findIndex(item => item.id === productId) , 1)
        this.total();
    }

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
    }

    total() {
        let total = 0
        for (let product of this.cartItems) {
            total += (product.unitPrice * product.quantity)
        }
        // this.cartTotal = total;
        return total
    }

    getCartTotal() {
      return this.total();
    }
}

module.exports = Cart 