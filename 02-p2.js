const checksum = (arr) => arr.reduce((tot, row) =>
  tot + row.sort((a, b) => a-b).reduce((sum, dig, idx, ora) =>
    sum + ora.slice(idx+1).reduce((s, d) =>
      s + d % dig == 0 ? d/dig : s, 0), 0), 0);
