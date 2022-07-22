function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  let final = 0;

  bill.forEach((price) => (sum += price));

  sum = sum - bill[k];
  final = sum / 2;

  if (final != b) {
    console.log(b - final);
  } else {
    console.log(`Bon Appetit`);
  }
}
console.log(bonAppetit([12, 32, 43, 34, 34, 34, 32, 45, 4], 2, 94.5));
