class VariantUtil {
    constructor({product}) {
        this.product = product
    }

    getVariations() {
      return (this.product.options !== undefined ? this.product.options : []);
    }

    selectVariant(selectedCombination) {
      console.log(selectedCombination);
      const result = this.product.variants.find(item => (item.option1 === selectedCombination.option1 && item.option2 === selectedCombination.option2))
      return result;
    }


}

module.exports = VariantUtil