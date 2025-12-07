const inputa = [
".......|.......",
"...............",
".......^.......",
"...............",
"......^.^......",
"...............",
".....^.^.^.....",
"...............",
"....^.^...^....",
"...............",
"...^.^...^.^...",
"...............",
"..^...^.....^..",
"...............",
".^.^.^.^.^...^.",
"...............",
]
splits = 0;
for(let i = 0; i<inputa.length; i++){
    for(let j = 0; j<inputa[i].length; j++){
        try {
            if(inputa[i][j] == "."){if(inputa[i-1][j] == "|"){
                inputa[i] = [...inputa[i]]
                inputa[i][j] = '|'
                inputa[i] = inputa[i].join('')
                
            } }     
            if(inputa[i][j] == "."){if((inputa[i][j-1] == "^" && inputa[i-1][j-1] == "|") || (inputa[i][j+1] == "^" && inputa[i-1][j+1] == "|")){
                inputa[i] = [...inputa[i]]
                inputa[i][j] = '|'
                inputa[i] = inputa[i].join('')
                
            }
            }
            
        } catch{console.log("onanedgeorsmth")}
    }
}
for(let m=0;m<inputa.length;m++){
    console.log(inputa[m])
    for(let n=0;n<inputa[m].length;n++){
        if(inputa[m][n] == "^"){
            if(inputa[m-1][n] == "|"){
                splits++;
            }
        }
    }
}
console.log(splits)