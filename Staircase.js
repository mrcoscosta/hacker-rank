function staircase(n) {
  // Write your code here
  let rash = "#";
  let espaco = "";
  let position = n - 1; // -1 , -1
  for (let linha = 0; linha < n; linha++) {
    for (let colun = 0; colun < n; colun++) {
      if (colun < position) {
        espaco += " ";
      } else {
        espaco += rash;
      }
    }
    console.log(espaco);
    espaco = "";
    position -= 1;
  }
}
