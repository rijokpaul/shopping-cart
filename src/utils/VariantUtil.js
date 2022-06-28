class VariantUtil {
    constructor({product}) {
        this.product = product
    }

    getVariations() {
      const order = { "XS": 1, "S": 2, "M": 3, "L": 4, "XL": 5};
      const result = (this.product.options !== undefined ? this.product.options : []);
      const sizeOption = result.find(item => item.name === 'Size').values;
      if(sizeOption) {
        sizeOption.sort((a, b) => {
          return (order[a] || Number.MAX_VALUE) - (order[b] || Number.MAX_VALUE)
        })
      }
      return result;
      // return (this.product.options !== undefined ? this.product.options : []);
    }

    selectVariant(selectedCombination) {
      console.log(selectedCombination);
      const result = this.product.variants.find(item => (item.option1 === selectedCombination.option1 && item.option2 === selectedCombination.option2))
      return result;
    }


}

module.exports = VariantUtil