const captcha = (arr) => [...arr, arr[0]]
  .reduce((acc, digit, idx, src) =>
    digit === src[idx+1] ?
      acc + ~~digit :
      acc
  , 0);
