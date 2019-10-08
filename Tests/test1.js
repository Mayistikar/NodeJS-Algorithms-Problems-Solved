var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var firstLine = 0;
var solutions = [];

rl.on('line', function(firstInput){
    firstLine = parseInt(firstInput);
    //console.log(`FirstLine: ${firstLine}`);      
    rl.pause();
});


rl.on('pause', function(){
    // console.log(`First Input: ${firstLine}`);
    new Promise( function(solve, reject){
        rl.close();
    
        var line = 1;
        var minimumCandies = 1;
        var totalKids = 0;
    
        const rl2 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl2.on('line', function(input){                   
            if( line % 2 !== 0 ){
                minimumCandies = parseInt( input.split(' ')[1] ); 
            }else{
                input.split(' ').forEach(function(value){
                    totalKids += Math.floor(parseInt(value) / minimumCandies);                  
                });
                //console.log(totalKids);
                solutions.push(totalKids);
                //rl2.close();
                totalKids = 0;
            }
            line += 1;
            //console.log(`Line: ${line} Multiplo: ${firstLine * 2 - 1} Igual: ${ line - (firstLine * 2 - 1) } = ${ firstLine }`);
            if( line - (firstLine * 2 + 1) === 0 ){
                rl2.close();
                solve();
            }
        });
    }
    ).then( function(){
     solutions.forEach(function(value){
         console.log(value);
     });
    });
 });