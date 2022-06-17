// Discount calculation

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount Percentage is: " + Math.round(discountPercent));

console.log(typeof discountPercent);
