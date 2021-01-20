export const squareRoot = (num) => {
  let xi = num/2;
  while(1){
    xi = (xi + num/xi)/2;
    if ((num - (xi**2)) < 0.001) break;
  }
  return Math.floor(xi);
};
