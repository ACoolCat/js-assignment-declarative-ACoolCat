/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
const prices = items => {
  let itemPrice = [];
  for (var i = 0; i < items.length; i++) {
    itemPrice.push(items[i].price);
  }
  return itemPrice;
}
// TODO - Implementation

// sum: (numbers: [number]) -> number
const sum = numbers => {
  let counter = 0;
  for (var i = 0; i < numbers.length; i++) {
    counter = numbers[i] + counter
  }
  return counter;
}

// TODO - Implementation

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = items => {
  let taxableItems = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].taxable = true) {
      taxableItems.push(items[i]);
    }
  }
  return taxableItems;
} // TODO - Implementation

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => {
  let taxedItems = [];
  for (var i = 0; i < prices.length; i++) {
    let newTax = prices[i] * tax;
    taxedItems.push(newTax);
  }
  return taxedItems;
} // TODO - Implementation

// baseSum: TODO - Type Signature
const baseSum = items => sum(prices(items));


// taxSum: TODO - Type Signature

const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: TODO - Type Signature
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
