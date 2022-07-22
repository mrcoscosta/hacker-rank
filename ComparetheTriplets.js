function compareTriplets(a, b) {
  let alice = 0;
  let bobe = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    }
    if (a[i] < b[i]) {
      bobe += 1;
    }
  }

  return [alice, bobe];
}
