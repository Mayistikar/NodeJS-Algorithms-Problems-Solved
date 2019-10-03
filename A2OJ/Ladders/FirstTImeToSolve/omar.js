const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lineRun(){    
    rl.on('line', function(input){
        var values = input.split(" ");            
        if( values.length > 1 ){                                
            console.log( parseInt( values[0] ) +  parseInt( values[1] ) );
        }                   
    });
}

lineRun();