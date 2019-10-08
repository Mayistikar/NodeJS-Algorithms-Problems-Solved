const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
});

let flag = true;
let minimumCandies = 0;

rl.on('line', (input) => {        
    let totalKids = 0;
    if( flag && input.split(' ').length === 2 ){
        flag = false;
        minimumCandies = parseInt(input.split(' ')[1]);  
    }else{
        input.split(' ').forEach( function( value ){
            //console.log(`Value: ${value}, Min: ${ minimumCandies }, Division: ${ parseInt(value) / minimumCandies }`);
            totalKids += Math.floor( parseInt(value) / minimumCandies );
        });
        console.log(totalKids);
        rl.close();
    }
});