const maxlimit = [26004,293422,88510,1423,248337139,926580,121,67796062,47,10197,242,5052,5233474,2894150301,1016336,646,9191022,378,91,868857,694076,6767717303,3656,8931031,147042,969217,17,562672,7979843972,2660,23308802]


const lowerlimit = [18623,226779,65855,868,248115026,903911,97,67636417,24,6968,193,3769,5140337,2894097247,979582,502,9132195,266,58,736828,622792,6767592127,2920,8811329,107384,941220,3,360063,7979763615,1890,23170346]




let totalSum = 0;

const ranges = Math.min(lowerlimit.length, maxlimit.length);

for (let i = 0; i < ranges; i++) {
  const start = lowerlimit[i];
  const end = maxlimit[i];

  for (let n = start; n <= end; n++) {
    const s = n.toString();
    const len = s.length;
    let isRepeated = false;

   
    for (let chunk = 1; chunk <= Math.floor(len / 2); chunk++) {
      if (len % chunk !== 0) continue;

      const first = s.slice(0, chunk);
      const times = len / chunk;
      if (first.repeat(times) === s) {
        isRepeated = true;
        break;
      }
    }

    if (isRepeated) totalSum += n;
  }
}

console.log('totalSum =', totalSum);