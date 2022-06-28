class Cart {
    constructor() {
        this.cartItems = [];
        this.cartTotal = 0;
    }

    addToCart(product) {
        const isExisting = this.cartItems.some(item => item.id === product.id);
        console.log(isExisting)
        if(isExisting) {
            this.updateQuantity(product, 'up')
        } else {
            const cartItem = {
                id: product.id,
                name: product.name,
                quantity: 1,
                image: product.featured_image.src,
                price: parseFloat(product.price),
                variant: 'Test'
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
        } else {
            selectedItem.quantity = (type === 'up' ? selectedItem.quantity += 1 : selectedItem.quantity -= 1);
        }
        this.total();
    }

    total() {
        let total = 0
        for (let product of this.cartItems) {
            total += (product.price * product.quantity)
        }
        this.cartTotal = total;
        // return total
    }
}

module.exports = Cart 