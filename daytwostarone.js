const lowerlimit = [11,95,998,1188511880,222220,1698522,446443,38593856,565635,824824821,2121212118]

const maxlimit = [22,115,1012,1188511890]




let totalcount = 0;
let astring = "";
let midpoint = 0;
for (let i = 0; i < lowerlimit.length; i++) {
    for (let x = lowerlimit[i]; x <= maxlimit[i]; x++) {
        astring = x.toString();
        midpoint = Math.floor(astring.length / 2);
        
        if (astring.length % 2 === 0) {
            if (astring.substring(0, midpoint) === astring.substring(midpoint)) {
                totalcount += x
            }
        }

}
}
console.log(totalcount);