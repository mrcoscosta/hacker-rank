function migratoryBirds(arr) {
  // Write your code here
  let iguais = {};
  arr.forEach((igual) => {
    iguais[igual] = (iguais[igual] || 0) + 1;
  });

  const Valmax = Math.max(...Object.values(iguais));

  const num = Object.keys(iguais).find((key) => {
    return iguais[key] === Valmax;
  });

  return num;
}
