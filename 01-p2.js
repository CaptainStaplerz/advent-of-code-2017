const captcha = (arr, len) => (len = arr.length/2) && 
  arr.reduce((acc, digit, idx, src) => 
    digit === src[idx + len * (idx < len ? 1 : -1)] ?
      acc + ~~digit :
      acc
  , 0);
