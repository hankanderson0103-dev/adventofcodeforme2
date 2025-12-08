//star one i guess
const inputa = [[162,817,812],[57,618,57],[906,360,560],[592,479,940],[352,342,300],[466,668,158],[542,29,236],[431,825,988],[739,650,466],[52,470,668],[216,146,977],[819,987,18],[117,168,530],[805,96,715],[346,949,466],[970,615,88],[941,993,340],[862,61,35],[984,92,344],[425,690,689]];
let inputb = [];
let connected = [];
let tempthing = [];
let tempthing2 = [];
let indexthing = [];

function calcDist(point1, point2) {
  const dx = point2[0] - point1[0];
  const dy = point2[1] - point1[1];
  const dz = point2[2] - point1[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

for(let i=0;i<inputa.length;i++){
    let tempthing = [];
    let tempthing2 = [];
    for(let j=0;j<inputa.length;j++){
        if(i!=j){
            tempthing.push([calcDist(inputa[i],inputa[j]), j, i])
            tempthing2.push(j)

        }

}
numpartpart = tempthing.map(x=>x[0])
inputb.push([
Math.min(...numpartpart), tempthing2[numpartpart.indexOf(Math.min(...numpartpart))]
]);
}
console.log(...inputb)